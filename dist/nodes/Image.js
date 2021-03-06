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
const react_medium_image_zoom_1 = __importDefault(require("react-medium-image-zoom"));
const getDataTransferFiles_1 = __importDefault(require("../lib/getDataTransferFiles"));
const uploadPlaceholder_1 = __importDefault(require("../lib/uploadPlaceholder"));
const insertFiles_1 = __importDefault(require("../commands/insertFiles"));
const Node_1 = __importDefault(require("./Node"));
const DocImage_1 = __importDefault(require("../icons/DocImage"));
const DownloadIcon_1 = __importDefault(require("../icons/DownloadIcon"));
const helper_1 = require("../helper");
const IMAGE_INPUT_REGEX = /!\[(?<alt>.*?)]\((?<filename>.*?)(?=\“|\))\“?(?<layoutclass>[^\”]+)?\”?\)/;
const uploadPlugin = (options) => new prosemirror_state_1.Plugin({
    props: {
        handleDOMEvents: {
            paste(view, event) {
                if ((view.props.editable && !view.props.editable(view.state)) ||
                    !options.uploadImage) {
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
                insertFiles_1.default(view, event, pos, files, options);
                return true;
            },
            drop(view, event) {
                if ((view.props.editable && !view.props.editable(view.state)) ||
                    !options.uploadImage) {
                    return false;
                }
                const files = getDataTransferFiles_1.default(event).filter((file) => /image/i.test(file.type));
                if (files.length === 0) {
                    return false;
                }
                const result = view.posAtCoords({
                    left: event.clientX,
                    top: event.clientY,
                });
                if (result) {
                    insertFiles_1.default(view, event, result.pos, files, options);
                    return true;
                }
                return false;
            },
        },
    },
});
const IMAGE_CLASSES = ["right-50", "left-50"];
const getLayoutAndTitle = (tokenTitle) => {
    if (!tokenTitle)
        return {};
    if (IMAGE_CLASSES.includes(tokenTitle)) {
        return {
            layoutClass: tokenTitle,
        };
    }
    else {
        return {
            title: tokenTitle,
        };
    }
};
const downloadImageNode = async (node) => {
    const image = await fetch(node.attrs.src);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    const extension = imageBlob.type.split("/")[1];
    const potentialName = node.attrs.alt || "image";
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = `${potentialName}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
class Image extends Node_1.default {
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
        this.handlePaste = ({ node, getPos }) => (event) => {
            if (event.target.innerText.length > helper_1.MAX_CAPTION_LIMIT &&
                event.key !== "Backspace") {
                event.preventDefault();
                return false;
            }
        };
        this.handleBlur = ({ node, getPos }) => (event) => {
            const alt = event.target.innerText;
            const { src, title, layoutClass } = node.attrs;
            if (alt === node.attrs.alt)
                return;
            const { view } = this.editor;
            const { tr } = view.state;
            const pos = getPos();
            const transaction = tr.setNodeMarkup(pos, undefined, {
                src,
                alt,
                title,
                layoutClass,
            });
            view.dispatch(transaction);
        };
        this.handleSelect = ({ getPos }) => (event) => {
            event.preventDefault();
            const { view } = this.editor;
            const $pos = view.state.doc.resolve(getPos());
            const transaction = view.state.tr.setSelection(new prosemirror_state_1.NodeSelection($pos));
            view.dispatch(transaction);
        };
        this.getExtension = (url) => {
            const spilttedString = url.split(".");
            const extension = spilttedString[spilttedString.length - 1];
            return extension ? extension.toUpperCase() : "";
        };
        this.isImage = (url) => {
            if (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|PNG|JPG|JPEG|GIF|gif)/g.test(url)) {
                return true;
            }
            return false;
        };
        this.handleDownload = ({ node }) => (event) => {
            event.preventDefault();
            event.stopPropagation();
            downloadImageNode(node);
        };
        this.component = (props) => {
            const { theme, isSelected } = props;
            const { alt, src, title, layoutClass } = props.node.attrs;
            const className = layoutClass ? `image image-${layoutClass}` : "image";
            return (React.createElement("div", { contentEditable: false, className: className },
                !this.isImage(src) && (React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
                    React.createElement("a", { href: src, target: "__blank" },
                        React.createElement(DocImage_1.default, { text: this.getExtension(src) })))),
                this.isImage(src) && (React.createElement(ImageWrapper, { className: isSelected ? "ProseMirror-selectednode" : "", onClick: this.handleSelect(props) },
                    React.createElement(Button, null,
                        React.createElement(DownloadIcon_1.default, { onClick: this.handleDownload(props) })),
                    React.createElement(react_medium_image_zoom_1.default, { image: {
                            src,
                            alt,
                            title,
                        }, defaultStyles: {
                            overlay: {
                                backgroundColor: theme.background,
                            },
                        }, shouldRespectMaxDimension: true })))));
        };
    }
    get name() {
        return "image";
    }
    get schema() {
        return {
            inline: true,
            attrs: {
                src: {},
                alt: {
                    default: null,
                },
                layoutClass: {
                    default: null,
                },
                title: {
                    default: null,
                },
            },
            content: "text*",
            marks: "",
            group: "inline",
            selectable: true,
            draggable: true,
            parseDOM: [
                {
                    tag: "div[class~=image]",
                    getAttrs: (dom) => {
                        const img = dom.getElementsByTagName("img")[0];
                        const className = dom.className;
                        const layoutClassMatched = className && className.match(/image-(.*)$/);
                        const layoutClass = layoutClassMatched
                            ? layoutClassMatched[1]
                            : null;
                        return {
                            src: img.getAttribute("src"),
                            alt: img.getAttribute("alt"),
                            title: img.getAttribute("title"),
                            layoutClass: layoutClass,
                        };
                    },
                },
            ],
            toDOM: (node) => {
                const className = node.attrs.layoutClass
                    ? `image image-${node.attrs.layoutClass}`
                    : "image";
                return [
                    "div",
                    {
                        class: className,
                    },
                    ["img", Object.assign(Object.assign({}, node.attrs), { contentEditable: false })],
                    ["p", { class: "caption" }, 0],
                ];
            },
        };
    }
    toMarkdown(state, node) {
        let markdown = " ![" +
            state.esc((node.attrs.alt || "").replace("\n", "") || "") +
            "](" +
            state.esc(node.attrs.src);
        if (node.attrs.layoutClass) {
            markdown += ' "' + state.esc(node.attrs.layoutClass) + '"';
        }
        else if (node.attrs.title) {
            markdown += ' "' + state.esc(node.attrs.title) + '"';
        }
        markdown += ")";
        state.write(markdown);
    }
    parseMarkdown() {
        return {
            node: "image",
            getAttrs: (token) => {
                return Object.assign({ src: token.attrGet("src"), alt: (token.children[0] && token.children[0].content) || null }, getLayoutAndTitle(token.attrGet("title")));
            },
        };
    }
    commands({ type }) {
        return {
            downloadImage: () => async (state) => {
                const { node } = state.selection;
                if (node.type.name !== "image") {
                    return false;
                }
                downloadImageNode(node);
                return true;
            },
            deleteImage: () => (state, dispatch) => {
                dispatch(state.tr.deleteSelection());
                return true;
            },
            alignRight: () => (state, dispatch) => {
                const attrs = Object.assign(Object.assign({}, state.selection.node.attrs), { title: null, layoutClass: "right-50" });
                const { selection } = state;
                dispatch(state.tr.setNodeMarkup(selection.from, undefined, attrs));
                return true;
            },
            alignLeft: () => (state, dispatch) => {
                const attrs = Object.assign(Object.assign({}, state.selection.node.attrs), { title: null, layoutClass: "left-50" });
                const { selection } = state;
                dispatch(state.tr.setNodeMarkup(selection.from, undefined, attrs));
                return true;
            },
            alignCenter: () => (state, dispatch) => {
                const attrs = Object.assign(Object.assign({}, state.selection.node.attrs), { layoutClass: null });
                const { selection } = state;
                dispatch(state.tr.setNodeMarkup(selection.from, undefined, attrs));
                return true;
            },
            createImage: (attrs) => (state, dispatch) => {
                const { selection } = state;
                const position = selection.$cursor
                    ? selection.$cursor.pos
                    : selection.$to.pos;
                const node = type.create(attrs);
                const transaction = state.tr.insert(position, node);
                dispatch(transaction);
                return true;
            },
        };
    }
    inputRules({ type }) {
        return [
            new prosemirror_inputrules_1.InputRule(IMAGE_INPUT_REGEX, (state, match, start, end) => {
                const [okay, alt, src, matchedTitle] = match;
                const { tr } = state;
                if (okay) {
                    tr.replaceWith(start - 1, end, type.create(Object.assign({ src,
                        alt }, getLayoutAndTitle(matchedTitle))));
                }
                return tr;
            }),
        ];
    }
    get plugins() {
        return [uploadPlaceholder_1.default, uploadPlugin(this.options)];
    }
}
exports.default = Image;
const Button = styled_components_1.default.button `
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textSecondary};
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;
  opacity: 0;
  transition: opacity 100ms ease-in-out;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    color: ${(props) => props.theme.text};
    opacity: 1;
  }
`;
const ImageWrapper = styled_components_1.default.span `
  line-height: 0;
  display: inline-block;
  position: relative;

  &:hover {
    ${Button} {
      opacity: 0.9;
    }
  }
`;
const Caption = styled_components_1.default.p `
  border: 0;
  display: block;
  font-size: 13px;
  font-style: italic;
  padding: 2px 0;
  line-height: 16px;
  text-align: center;
  min-height: 1em;
  outline: none;
  background: none;
  resize: none;
  user-select: text;
  cursor: text;

  &:empty:before {
    color: ${(props) => props.theme.placeholder};
    content: "Write a caption";
    pointer-events: none;
  }
`;
//# sourceMappingURL=Image.js.map