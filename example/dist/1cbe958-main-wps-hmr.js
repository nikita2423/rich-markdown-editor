webpackHotUpdate("main",{

/***/ "./src/plugins/MentionPlugin.js":
/*!**************************************!*\
  !*** ./src/plugins/MentionPlugin.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst prosemirror_state_1 = __webpack_require__(/*! prosemirror-state */ \"./node_modules/prosemirror-state/dist/index.js\");\nconst prosemirror_view_1 = __webpack_require__(/*! prosemirror-view */ \"./node_modules/prosemirror-view/dist/index.js\");\nfunction getRegexp(mentionTrigger, hashtagTrigger, allowSpace) {\n    var mention = allowSpace\n        ? new RegExp(\"(^|\\\\s)\" + mentionTrigger + \"([\\\\w-\\\\+]+\\\\s?[\\\\w-\\\\+]*)$\")\n        : new RegExp(\"(^|\\\\s)\" + mentionTrigger + \"([\\\\w-\\\\+]+)$\");\n    var tag = new RegExp(\"(^|\\\\s)\" + hashtagTrigger + \"([\\\\w-]+)$\");\n    return {\n        mention: mention,\n        tag: tag,\n    };\n}\nexports.getRegexp = getRegexp;\nfunction getMatch($position, opts) {\n    var parastart = $position.before();\n    const text = $position.doc.textBetween(parastart, $position.pos, \"\\n\", \"\\0\");\n    var regex = getRegexp(opts.mentionTrigger, opts.hashtagTrigger, opts.allowSpace);\n    var mentionMatch = text.match(regex.mention);\n    var tagMatch = text.match(regex.tag);\n    var match = mentionMatch || tagMatch;\n    var type;\n    if (mentionMatch) {\n        type = \"mention\";\n    }\n    else if (tagMatch) {\n        type = \"tag\";\n    }\n    if (match) {\n        match.index = match[0].startsWith(\" \") ? match.index + 1 : match.index;\n        match[0] = match[0].startsWith(\" \")\n            ? match[0].substring(1, match[0].length)\n            : match[0];\n        var from = $position.start() + match.index;\n        var to = from + match[0].length;\n        var queryText = match[2];\n        return {\n            range: { from: from, to: to },\n            queryText: queryText,\n            type: type,\n        };\n    }\n}\nexports.getMatch = getMatch;\nexports.debounce = (function () {\n    var timeoutId = null;\n    return function (func, timeout, context) {\n        context = context || this;\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(function () {\n            func.apply(context, arguments);\n        }, timeout);\n        return timeoutId;\n    };\n})();\nvar getNewState = function () {\n    return {\n        active: false,\n        range: {\n            from: 0,\n            to: 0,\n        },\n        type: \"\",\n        text: \"\",\n        suggestions: [],\n        index: 0,\n    };\n};\nfunction getMentionsPlugin(opts) {\n    var defaultOpts = {\n        mentionTrigger: \"@\",\n        hashtagTrigger: \"#\",\n        allowSpace: true,\n        getSuggestions: (type, text, cb) => {\n            cb([]);\n        },\n        getSuggestionsHTML: (items) => '<div class=\"suggestion-item-list\">' +\n            items\n                .map((i) => '<div class=\"suggestion-item\">' + i.name + \"</div>\")\n                .join(\"\") +\n            \"</div>\",\n        activeClass: \"suggestion-item-active\",\n        suggestionTextClass: \"prosemirror-suggestion\",\n        maxNoOfSuggestions: 10,\n        delay: 500,\n    };\n    var opts = Object.assign({}, defaultOpts, opts);\n    var showListTimeoutId = null;\n    var el = document.createElement(\"div\");\n    el.style.zIndex = \"200\";\n    var index = 0;\n    var caretPosition = function () {\n        const selection = window.document.getSelection();\n        console.log(\"Selection\", selection);\n        if (!selection || !selection.anchorNode || !selection.focusNode) {\n            return {\n                top: 0,\n                left: 0,\n            };\n        }\n        else {\n            return {\n                left: -1000,\n                top: 0,\n            };\n        }\n    };\n    var showList = function (view, state, suggestions, opts) {\n        el.innerHTML = opts.getSuggestionsHTML(suggestions, state.type);\n        el.querySelectorAll(\".suggestion-item\").forEach(function (itemNode, index) {\n            itemNode.addEventListener(\"click\", function () {\n                select(view, state, opts);\n                view.focus();\n            });\n            itemNode.addEventListener(\"mouseover\", function () {\n                setIndex(index, state, opts);\n            });\n            itemNode.addEventListener(\"mouseout\", function () {\n                setIndex(index, state, opts);\n            });\n        });\n        addClassAtIndex(state.index, opts.activeClass);\n        var node = view.domAtPos(view.state.selection.$from.pos);\n        var paraDOM = node.node;\n        var textDOM = paraDOM.querySelector(\".\" + opts.suggestionTextClass);\n        var offset = textDOM.getBoundingClientRect();\n        document.body.appendChild(el);\n        el.style.position = \"absolute\";\n        el.style.display = \"block\";\n        el.style.left = offset.left + \"px\";\n        const margin = 24;\n        const elOffsetHeight = el.offsetHeight;\n        const startPos = view.coordsAtPos(view.state.selection.$from.pos);\n        const paragraph = view.domAtPos(view.state.selection.$from.pos);\n        const { top, bottom } = paragraph.node.getBoundingClientRect();\n        var bottomValue = offset.top - textDOM.offsetHeight - 16;\n        console.log(\"Offset Top\", offset.top);\n        console.log(\"El offset \", elOffsetHeight);\n        el.style.top = bottomValue + \"px\";\n    };\n    var hideList = function () {\n        el.style.display = \"none\";\n    };\n    var removeClassAtIndex = function (index, className) {\n        var itemList = el.querySelector(\".suggestion-item-list\").childNodes;\n        var prevItem = itemList[index];\n        prevItem.classList.remove(className);\n    };\n    var addClassAtIndex = function (index, className) {\n        var itemList = el.querySelector(\".suggestion-item-list\").childNodes;\n        var prevItem = itemList[index];\n        prevItem.classList.add(className);\n    };\n    var setIndex = function (index, state, opts) {\n        removeClassAtIndex(state.index, opts.activeClass);\n        state.index = index;\n        addClassAtIndex(state.index, opts.activeClass);\n    };\n    var goNext = function (view, state, opts) {\n        removeClassAtIndex(state.index, opts.activeClass);\n        state.index++;\n        state.index = state.index === state.suggestions.length ? 0 : state.index;\n        addClassAtIndex(state.index, opts.activeClass);\n    };\n    var goPrev = function (view, state, opts) {\n        removeClassAtIndex(state.index, opts.activeClass);\n        state.index--;\n        state.index =\n            state.index === -1 ? state.suggestions.length - 1 : state.index;\n        addClassAtIndex(state.index, opts.activeClass);\n    };\n    var select = function (view, state, opts) {\n        var item = state.suggestions[state.index];\n        var attrs;\n        if (state.type === \"mention\") {\n            attrs = {\n                id: item.id,\n                type: item.type,\n            };\n        }\n        else {\n            attrs = {\n                tag: item.tag,\n            };\n        }\n        var node = view.state.schema.nodes[state.type].create(attrs);\n        var tr = view.state.tr.replaceWith(state.range.from, state.range.to, node);\n        var newState = view.state.apply(tr);\n        view.updateState(newState);\n    };\n    return new prosemirror_state_1.Plugin({\n        key: new prosemirror_state_1.PluginKey(\"autosuggestions\"),\n        state: {\n            init() {\n                return getNewState();\n            },\n            apply(tr, state) {\n                var newState = getNewState();\n                var selection = tr.selection;\n                if (selection.from !== selection.to) {\n                    return newState;\n                }\n                const $position = selection.$from;\n                const match = getMatch($position, opts);\n                if (match) {\n                    newState.active = true;\n                    newState.range = match.range;\n                    newState.type = match.type;\n                    newState.text = match.queryText;\n                }\n                return newState;\n            },\n        },\n        props: {\n            handleKeyDown(view, e) {\n                var state = this.getState(view.state);\n                if (!state.active && !state.suggestions.length) {\n                    return false;\n                }\n                var down, up, enter, esc;\n                enter = e.keyCode === 13;\n                down = e.keyCode === 40;\n                up = e.keyCode === 38;\n                esc = e.keyCode === 27;\n                if (down) {\n                    goNext(view, state, opts);\n                    return true;\n                }\n                else if (up) {\n                    goPrev(view, state, opts);\n                    return true;\n                }\n                else if (enter) {\n                    select(view, state, opts);\n                    return true;\n                }\n                else if (esc) {\n                    clearTimeout(showListTimeoutId);\n                    hideList();\n                    this.state = getNewState();\n                    return true;\n                }\n                else {\n                    return false;\n                }\n            },\n            decorations(editorState) {\n                const { active, range } = this.getState(editorState);\n                if (!active)\n                    return null;\n                return prosemirror_view_1.DecorationSet.create(editorState.doc, [\n                    prosemirror_view_1.Decoration.inline(range.from, range.to, {\n                        nodeName: \"span\",\n                        class: opts.suggestionTextClass,\n                    }),\n                ]);\n            },\n        },\n        view() {\n            return {\n                update: (view) => {\n                    var state = this.key.getState(view.state);\n                    if (!state.text) {\n                        hideList();\n                        clearTimeout(showListTimeoutId);\n                        return;\n                    }\n                    showListTimeoutId = exports.debounce(function () {\n                        opts.getSuggestions(state.type, state.text, function (suggestions) {\n                            state.suggestions = suggestions;\n                            showList(view, state, suggestions, opts);\n                        });\n                    }, opts.delay, this);\n                },\n            };\n        },\n    });\n}\nexports.getMentionsPlugin = getMentionsPlugin;\n\n\n//# sourceURL=webpack:///./src/plugins/MentionPlugin.js?");

/***/ })

})