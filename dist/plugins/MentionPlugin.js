"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_state_1 = require("prosemirror-state");
const prosemirror_view_1 = require("prosemirror-view");
function getRegexp(mentionTrigger, hashtagTrigger, allowSpace) {
    var mention = allowSpace
        ? new RegExp("(^|\\s)" + mentionTrigger + "([\\w-\\+]+\\s?[\\w-\\+]*)$")
        : new RegExp("(^|\\s)" + mentionTrigger + "([\\w-\\+]+)$");
    var tag = new RegExp("(^|\\s)" + hashtagTrigger + "([\\w-]+)$");
    return {
        mention: mention,
        tag: tag,
    };
}
exports.getRegexp = getRegexp;
function getMatch($position, opts) {
    var parastart = $position.before();
    const text = $position.doc.textBetween(parastart, $position.pos, "\n", "\0");
    var regex = getRegexp(opts.mentionTrigger, opts.hashtagTrigger, opts.allowSpace);
    var mentionMatch = text.match(regex.mention);
    var tagMatch = text.match(regex.tag);
    var match = mentionMatch || tagMatch;
    var type;
    if (mentionMatch) {
        type = "mention";
    }
    else if (tagMatch) {
        type = "tag";
    }
    if (match) {
        match.index = match[0].startsWith(" ") ? match.index + 1 : match.index;
        match[0] = match[0].startsWith(" ")
            ? match[0].substring(1, match[0].length)
            : match[0];
        var from = $position.start() + match.index;
        var to = from + match[0].length;
        var queryText = match[2];
        return {
            range: { from: from, to: to },
            queryText: queryText,
            type: type,
        };
    }
}
exports.getMatch = getMatch;
exports.debounce = (function () {
    var timeoutId = null;
    return function (func, timeout, context) {
        context = context || this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            func.apply(context, arguments);
        }, timeout);
        return timeoutId;
    };
})();
var getNewState = function () {
    return {
        active: false,
        range: {
            from: 0,
            to: 0,
        },
        type: "",
        text: "",
        suggestions: [],
        index: 0,
    };
};
function getMentionsPlugin(opts) {
    var defaultOpts = {
        mentionTrigger: "@",
        hashtagTrigger: "#",
        allowSpace: true,
        getSuggestions: (type, text, cb) => {
            cb([]);
        },
        getSuggestionsHTML: (items) => '<div class="suggestion-item-list">' +
            items
                .map((i) => '<div class="suggestion-item">' + i.name + "</div>")
                .join("") +
            "</div>",
        activeClass: "suggestion-item-active",
        suggestionTextClass: "prosemirror-suggestion",
        maxNoOfSuggestions: 10,
        delay: 500,
    };
    var opts = Object.assign({}, defaultOpts, opts);
    var showListTimeoutId = null;
    var el = document.createElement("div");
    el.style.zIndex = "200";
    var index = 0;
    var caretPosition = function () {
        const selection = window.document.getSelection();
        console.log("Selection", selection);
        if (!selection || !selection.anchorNode || !selection.focusNode) {
            return {
                top: 0,
                left: 0,
            };
        }
        else {
            return {
                left: -1000,
                top: 0,
            };
        }
    };
    var showList = function (view, state, suggestions, opts) {
        el.innerHTML = opts.getSuggestionsHTML(suggestions, state.type);
        el.querySelectorAll(".suggestion-item").forEach(function (itemNode, index) {
            itemNode.addEventListener("click", function () {
                select(view, state, opts);
                view.focus();
            });
            itemNode.addEventListener("mouseover", function () {
                setIndex(index, state, opts);
            });
            itemNode.addEventListener("mouseout", function () {
                setIndex(index, state, opts);
            });
        });
        addClassAtIndex(state.index, opts.activeClass);
        var node = view.domAtPos(view.state.selection.$from.pos);
        var paraDOM = node.node;
        var textDOM = paraDOM.querySelector("." + opts.suggestionTextClass);
        var offset = textDOM.getBoundingClientRect();
        document.body.appendChild(el);
        el.style.position = "absolute";
        el.style.display = "block";
        el.style.left = offset.left + "px";
        const elOffsetHeight = el.offsetHeight;
        var bottomValue = offset.top - el.offsetHeight;
        console.log("Offset Top", offset.top);
        console.log("El offset ", elOffsetHeight);
        el.style.top = bottomValue + "px";
    };
    var hideList = function () {
        el.style.display = "none";
    };
    var removeClassAtIndex = function (index, className) {
        var itemList = el.querySelector(".suggestion-item-list").childNodes;
        var prevItem = itemList[index];
        prevItem.classList.remove(className);
    };
    var addClassAtIndex = function (index, className) {
        var itemList = el.querySelector(".suggestion-item-list").childNodes;
        var prevItem = itemList[index];
        prevItem.classList.add(className);
    };
    var setIndex = function (index, state, opts) {
        removeClassAtIndex(state.index, opts.activeClass);
        state.index = index;
        addClassAtIndex(state.index, opts.activeClass);
    };
    var goNext = function (view, state, opts) {
        removeClassAtIndex(state.index, opts.activeClass);
        state.index++;
        state.index = state.index === state.suggestions.length ? 0 : state.index;
        addClassAtIndex(state.index, opts.activeClass);
    };
    var goPrev = function (view, state, opts) {
        removeClassAtIndex(state.index, opts.activeClass);
        state.index--;
        state.index =
            state.index === -1 ? state.suggestions.length - 1 : state.index;
        addClassAtIndex(state.index, opts.activeClass);
    };
    var select = function (view, state, opts) {
        var item = state.suggestions[state.index];
        var attrs;
        if (state.type === "mention") {
            attrs = {
                id: item.id,
                type: item.type,
            };
        }
        else {
            attrs = {
                tag: item.tag,
            };
        }
        var node = view.state.schema.nodes[state.type].create(attrs);
        var tr = view.state.tr.replaceWith(state.range.from, state.range.to, node);
        var newState = view.state.apply(tr);
        view.updateState(newState);
    };
    return new prosemirror_state_1.Plugin({
        key: new prosemirror_state_1.PluginKey("autosuggestions"),
        state: {
            init() {
                return getNewState();
            },
            apply(tr, state) {
                var newState = getNewState();
                var selection = tr.selection;
                if (selection.from !== selection.to) {
                    return newState;
                }
                const $position = selection.$from;
                const match = getMatch($position, opts);
                if (match) {
                    newState.active = true;
                    newState.range = match.range;
                    newState.type = match.type;
                    newState.text = match.queryText;
                }
                return newState;
            },
        },
        props: {
            handleKeyDown(view, e) {
                var state = this.getState(view.state);
                if (!state.active && !state.suggestions.length) {
                    return false;
                }
                var down, up, enter, esc;
                enter = e.keyCode === 13;
                down = e.keyCode === 40;
                up = e.keyCode === 38;
                esc = e.keyCode === 27;
                if (down) {
                    goNext(view, state, opts);
                    return true;
                }
                else if (up) {
                    goPrev(view, state, opts);
                    return true;
                }
                else if (enter) {
                    select(view, state, opts);
                    return true;
                }
                else if (esc) {
                    clearTimeout(showListTimeoutId);
                    hideList();
                    this.state = getNewState();
                    return true;
                }
                else {
                    return false;
                }
            },
            decorations(editorState) {
                const { active, range } = this.getState(editorState);
                if (!active)
                    return null;
                return prosemirror_view_1.DecorationSet.create(editorState.doc, [
                    prosemirror_view_1.Decoration.inline(range.from, range.to, {
                        nodeName: "span",
                        class: opts.suggestionTextClass,
                    }),
                ]);
            },
        },
        view() {
            return {
                update: (view) => {
                    var state = this.key.getState(view.state);
                    if (!state.text) {
                        hideList();
                        clearTimeout(showListTimeoutId);
                        return;
                    }
                    showListTimeoutId = exports.debounce(function () {
                        opts.getSuggestions(state.type, state.text, function (suggestions) {
                            state.suggestions = suggestions;
                            showList(view, state, suggestions, opts);
                        });
                    }, opts.delay, this);
                },
            };
        },
    });
}
exports.getMentionsPlugin = getMentionsPlugin;
//# sourceMappingURL=MentionPlugin.js.map