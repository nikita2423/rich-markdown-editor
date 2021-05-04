"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const prosemirror_state_1 = require("prosemirror-state");
const prosemirror_inputrules_1 = require("prosemirror-inputrules");
const prosemirror_utils_1 = require("prosemirror-utils");
const styled_components_1 = __importDefault(require("styled-components"));
const getDataTransferFiles_1 = __importDefault(require("../lib/getDataTransferFiles"));
const uploadFilePlaceholder_1 = __importDefault(require("../lib/uploadFilePlaceholder"));
const insertAllFiles_1 = __importDefault(require("../commands/insertAllFiles"));
const DocImage_1 = __importDefault(require("../icons/DocImage"));
const Node_1 = __importDefault(require("./Node"));
const helper_1 = require("../helper");
const FILE_INPUT_REGEX = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;
const uploadPlugin = (options) => new prosemirror_state_1.Plugin({
    props: {
        handleDOMEvents: {
            paste(view, event) {
                if ((view.props.editable && !view.props.editable(view.state)) ||
                    !options.uploadFile) {
                    return false;
                }
                if (!event.clipboardData)
                    return false;
                const files = Array.prototype.slice
                    .call(event.clipboardData.items)
                    .map((dt) => dt.getAsFile())
                    .filter((file) => file);
                if (files.length === 0)
                    return false;
                const { tr } = view.state;
                if (!tr.selection.empty) {
                    tr.deleteSelection();
                }
                const pos = tr.selection.from;
                insertAllFiles_1.default(view, event, pos, files, options);
                return true;
            },
            drop(view, event) {
                if ((view.props.editable && !view.props.editable(view.state)) ||
                    !options.uploadImage) {
                    return false;
                }
                const files = getDataTransferFiles_1.default(event);
                if (files.length === 0) {
                    return false;
                }
                const result = view.posAtCoords({
                    left: event.clientX,
                    top: event.clientY,
                });
                if (result) {
                    insertAllFiles_1.default(view, event, result.pos, files, options);
                    return true;
                }
                return false;
            },
        },
    },
});
class File extends Node_1.default {
    constructor() {
        super(...arguments);
        this.handleKeyDown = ({ node, getPos }) => (event) => {
            if (event.target.innerText.length > helper_1.MAX_CAPTION_LIMIT &&
                event.key !== "Backspace") {
                event.preventDefault();
                return false;
            }
            if (event.key === "Enter") {
                event.preventDefault();
                const { view } = this.editor;
                const pos = getPos() + node.nodeSize;
                view.focus();
                view.dispatch(prosemirror_utils_1.setTextSelection(pos)(view.state.tr));
                return;
            }
            if (event.key === "Backspace" && event.target.innerText === "") {
                const { view } = this.editor;
                const $pos = view.state.doc.resolve(getPos());
                const tr = view.state.tr.setSelection(new prosemirror_state_1.NodeSelection($pos));
                view.dispatch(tr.deleteSelection());
                view.focus();
                return;
            }
        };
        this.handleBlur = ({ node, getPos }) => (event) => {
            const alt = event.target.innerText;
            const src = node.attrs.src;
            if (alt === node.attrs.alt)
                return;
            const { view } = this.editor;
            const { tr } = view.state;
            const pos = getPos();
            const transaction = tr.setNodeMarkup(pos, undefined, {
                src,
                alt,
            });
            view.dispatch(transaction);
        };
        this.handlePaste = ({ node, getPos }) => (event) => {
            if (event.target.innerText.length > helper_1.MAX_CAPTION_LIMIT &&
                event.key !== "Backspace") {
                event.preventDefault();
                return false;
            }
        };
        this.getExtension = (url) => {
            const spilttedString = url.split(".");
            const extension = spilttedString[spilttedString.length - 1];
            return extension ? extension.toUpperCase() : "";
        };
        this.component = (options) => {
            const { alt, src } = options.node.attrs;
            return (React.createElement("div", { className: "file", contentEditable: false },
                React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
                    React.createElement("a", { href: src, target: "__blank" },
                        React.createElement(DocImage_1.default, { text: this.getExtension(src) }))),
                (options.isEditable || alt) && (React.createElement(Caption, { onKeyDown: this.handleKeyDown(options), onBlur: this.handleBlur(options), tabIndex: -1, contentEditable: options.isEditable, suppressContentEditableWarning: true, onPaste: this.handlePaste(options) }, alt))));
        };
    }
    get name() {
        return "file";
    }
    get schema() {
        return {
            inline: true,
            attrs: {
                src: {},
                alt: {
                    default: null,
                },
            },
            content: "text*",
            marks: "",
            group: "inline",
            draggable: true,
            parseDOM: [
                {
                    tag: "div[class=file]",
                    getAttrs: (dom) => {
                        const a = dom.getElementsByTagName("a")[0];
                        const caption = dom.getElementsByTagName("p")[0];
                        return {
                            src: a.getAttribute("href"),
                            alt: caption.innerText,
                        };
                    },
                },
            ],
            toDOM: (node) => {
                return [
                    "div",
                    {
                        class: "file",
                    },
                    ["a", Object.assign(Object.assign({}, node.attrs), { contentEditable: false })],
                    ["p", { class: "caption" }, 0],
                ];
            },
        };
    }
    toMarkdown(state, node) {
        state.write("![" +
            state.esc((node.attrs.alt || "").replace("\n", "") || "") +
            "](" +
            state.esc(node.attrs.src) +
            ")");
    }
    parseMarkdown() {
        return {
            node: "file",
            getAttrs: (token) => ({
                src: token.attrGet("src"),
                alt: (token.children[0] && token.children[0].content) || null,
            }),
        };
    }
    commands({ type }) {
        return (attrs) => (state, dispatch) => {
            const { selection } = state;
            const position = selection.$cursor
                ? selection.$cursor.pos
                : selection.$to.pos;
            const node = type.create(attrs);
            const transaction = state.tr.insert(position, node);
            dispatch(transaction);
            return true;
        };
    }
    inputRules({ type }) {
        return [
            new prosemirror_inputrules_1.InputRule(FILE_INPUT_REGEX, (state, match, start, end) => {
                const [okay, alt, src] = match;
                const { tr } = state;
                if (okay) {
                    tr.replaceWith(start - 1, end, type.create({
                        src,
                        alt,
                    }));
                }
                return tr;
            }),
        ];
    }
    get plugins() {
        return [uploadFilePlaceholder_1.default, uploadPlugin(this.options)];
    }
}
exports.default = File;
const Caption = styled_components_1.default.p `
  border: 0;
  display: block;
  font-size: 13px;
  font-style: italic;
  padding: 2px 0;
  line-height: 16px;
  text-align: center;
  width: 100%;
  min-height: 1em;
  outline: none;
  background: none;
  resize: none;
  &:empty:before {
    color: ${(props) => props.theme.placeholder};
    content: "Write a caption";
    pointer-events: none;
  }
`;
//# sourceMappingURL=FileDoc.js.map