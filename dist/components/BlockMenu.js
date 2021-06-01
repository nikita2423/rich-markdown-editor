"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const capitalize_1 = __importDefault(require("lodash/capitalize"));
const react_portal_1 = require("react-portal");
const prosemirror_utils_1 = require("prosemirror-utils");
const styled_components_1 = __importDefault(require("styled-components"));
const types_1 = require("../types");
const BlockMenuItem_1 = __importDefault(require("./BlockMenuItem"));
const Input_1 = __importDefault(require("./Input"));
const VisuallyHidden_1 = __importDefault(require("./VisuallyHidden"));
const getDataTransferFiles_1 = __importDefault(require("../lib/getDataTransferFiles"));
const insertFiles_1 = __importDefault(require("../commands/insertFiles"));
const insertAllFiles_1 = __importDefault(require("../commands/insertAllFiles"));
const block_1 = __importDefault(require("../menus/block"));
const SSR = typeof window === "undefined";
const defaultPosition = {
    left: -1000,
    top: 0,
    bottom: undefined,
    isAbove: false,
};
class BlockMenu extends React.Component {
    constructor() {
        super(...arguments);
        this.menuRef = React.createRef();
        this.inputRef = React.createRef();
        this.fileInputRef = React.createRef();
        this.state = {
            left: -1000,
            top: 0,
            bottom: undefined,
            isAbove: false,
            selectedIndex: 0,
            insertItem: undefined,
        };
        this.handleKeyDown = (event) => {
            if (!this.props.isActive)
                return;
            if (event.key === "Enter") {
                event.preventDefault();
                event.stopPropagation();
                const item = this.filtered[this.state.selectedIndex];
                if (item) {
                    this.insertItem(item);
                }
                else {
                    this.props.onClose();
                }
            }
            if (event.key === "ArrowUp" || (event.ctrlKey && event.key === "p")) {
                event.preventDefault();
                event.stopPropagation();
                if (this.filtered.length) {
                    const prevIndex = this.state.selectedIndex - 1;
                    const prev = this.filtered[prevIndex];
                    this.setState({
                        selectedIndex: Math.max(0, prev && prev.name === "separator" ? prevIndex - 1 : prevIndex),
                    });
                }
                else {
                    this.close();
                }
            }
            if (event.key === "ArrowDown" ||
                event.key === "Tab" ||
                (event.ctrlKey && event.key === "n")) {
                event.preventDefault();
                event.stopPropagation();
                if (this.filtered.length) {
                    const total = this.filtered.length - 1;
                    const nextIndex = this.state.selectedIndex + 1;
                    const next = this.filtered[nextIndex];
                    this.setState({
                        selectedIndex: Math.min(next && next.name === "separator" ? nextIndex + 1 : nextIndex, total),
                    });
                }
                else {
                    this.close();
                }
            }
            if (event.key === "Escape") {
                this.close();
            }
        };
        this.insertItem = (item) => {
            switch (item.name) {
                case "image":
                    return this.triggerImagePick();
                case "file":
                    return this.triggerFilePick();
                case "embed":
                    return this.triggerLinkInput(item);
                case "link": {
                    this.clearSearch(true);
                    this.props.onClose();
                    this.props.onLinkToolbarOpen();
                    return;
                }
                case "emoji": {
                    return this.handleEmojiClick();
                }
                case "mention": {
                    return this.handleMentionClick();
                }
                default:
                    this.insertBlock(item);
            }
        };
        this.close = () => {
            this.props.onClose();
            this.props.view.focus();
        };
        this.handleEmojiClick = () => {
            this.clearSearch(false);
            const { view, onOpenEmoji } = this.props;
            const { dispatch, state } = view;
            const { from, to } = state.selection;
            const colonText = `:`;
            dispatch(view.state.tr.insertText(colonText, from - 1, to));
            this.close();
            if (onOpenEmoji) {
                onOpenEmoji();
            }
        };
        this.handleMentionClick = () => {
            this.clearSearch(false);
            const { view } = this.props;
            const { dispatch, state } = view;
            const { from, to } = state.selection;
            const mentionText = `@`;
            dispatch(view.state.tr.insertText(mentionText, from - 1, to));
            this.close();
        };
        this.handleLinkInputKeydown = (event) => {
            if (!this.props.isActive)
                return;
            if (!this.state.insertItem)
                return;
            if (event.key === "Enter") {
                event.preventDefault();
                event.stopPropagation();
                const href = event.currentTarget.value;
                const matches = this.state.insertItem.matcher(href);
                if (!matches && this.props.onShowToast) {
                    this.props.onShowToast(this.props.dictionary.embedInvalidLink, types_1.ToastType.Error);
                    return;
                }
                this.insertBlock({
                    name: "embed",
                    attrs: {
                        href,
                        component: this.state.insertItem.component,
                        matches,
                    },
                });
            }
            if (event.key === "Escape") {
                this.props.onClose();
                this.props.view.focus();
            }
        };
        this.handleLinkInputPaste = (event) => {
            if (!this.props.isActive)
                return;
            if (!this.state.insertItem)
                return;
            const href = event.clipboardData.getData("text/plain");
            const matches = this.state.insertItem.matcher(href);
            if (matches) {
                event.preventDefault();
                event.stopPropagation();
                this.insertBlock({
                    name: "embed",
                    attrs: {
                        href,
                        component: this.state.insertItem.component,
                        matches,
                    },
                });
            }
        };
        this.triggerImagePick = () => {
            if (this.inputRef.current) {
                this.inputRef.current.click();
            }
        };
        this.triggerFilePick = () => {
            if (this.fileInputRef.current) {
                this.fileInputRef.current.click();
            }
        };
        this.triggerLinkInput = (item) => {
            this.setState({ insertItem: item });
        };
        this.handleImagePicked = (event) => {
            const files = getDataTransferFiles_1.default(event);
            const { view, uploadImage, onImageUploadStart, onImageUploadStop, onShowToast, } = this.props;
            const { state, dispatch } = view;
            const parent = prosemirror_utils_1.findParentNode((node) => !!node)(state.selection);
            if (parent) {
                dispatch(state.tr.insertText("", parent.pos, parent.pos + parent.node.textContent.length + 1));
                insertFiles_1.default(view, event, parent.pos, files, {
                    uploadImage,
                    onImageUploadStart,
                    onImageUploadStop,
                    onShowToast,
                    dictionary: this.props.dictionary,
                });
            }
            if (this.inputRef.current) {
                this.inputRef.current.value = "";
            }
            this.props.onClose();
        };
        this.handleFilePicked = (event) => {
            const files = getDataTransferFiles_1.default(event);
            const { view, uploadFile, onFileUploadStart, onFileUploadStop, onShowToast, } = this.props;
            const { state, dispatch } = view;
            const parent = prosemirror_utils_1.findParentNode((node) => !!node)(state.selection);
            if (parent) {
                dispatch(state.tr.insertText("", parent.pos, parent.pos + parent.node.textContent.length + 1));
                insertAllFiles_1.default(view, event, parent.pos, files, {
                    uploadFile,
                    onFileUploadStart,
                    onFileUploadStop,
                    onShowToast,
                    dictionary: this.props.dictionary,
                });
            }
            this.props.onClose();
        };
    }
    componentDidMount() {
        if (!SSR) {
            window.addEventListener("keydown", this.handleKeyDown);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.search !== this.props.search ||
            nextProps.isActive !== this.props.isActive ||
            nextState !== this.state);
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.isActive && this.props.isActive) {
            const position = this.calculatePosition(this.props);
            this.setState(Object.assign({ insertItem: undefined, selectedIndex: 0 }, position));
        }
        else if (prevProps.search !== this.props.search) {
            this.setState({ selectedIndex: 0 });
        }
    }
    componentWillUnmount() {
        if (!SSR) {
            window.removeEventListener("keydown", this.handleKeyDown);
        }
    }
    clearSearch(removeSlash) {
        const { search } = this.props;
        const { state, dispatch } = this.props.view;
        const parent = prosemirror_utils_1.findParentNode((node) => !!node)(state.selection);
        const searchlength = search && search.length ? search.length : 0;
        if (parent) {
            let startPosition = parent.pos + parent.node.textContent.length - searchlength;
            if (removeSlash) {
                dispatch(state.tr.insertText("", startPosition, parent.pos + parent.node.textContent.length + 1));
            }
            else {
                startPosition =
                    parent.pos + parent.node.textContent.length - searchlength + 1;
                dispatch(state.tr.insertText("", startPosition, parent.pos + parent.node.textContent.length + 1));
            }
        }
    }
    insertBlock(item) {
        this.clearSearch(true);
        const command = this.props.commands[item.name];
        if (command) {
            command(item.attrs);
        }
        else {
            this.props.commands[`create${capitalize_1.default(item.name)}`](item.attrs);
        }
        this.props.onClose();
    }
    get caretPosition() {
        const selection = window.document.getSelection();
        if (!selection || !selection.anchorNode || !selection.focusNode) {
            return {
                top: 0,
                left: 0,
            };
        }
        const range = window.document.createRange();
        range.setStart(selection.anchorNode, selection.anchorOffset);
        range.setEnd(selection.focusNode, selection.focusOffset);
        const rects = range.getClientRects();
        if (rects.length === 0) {
            if (range.startContainer && range.collapsed) {
                range.selectNodeContents(range.startContainer);
            }
        }
        const rect = range.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
        };
    }
    calculatePosition(props) {
        const { view } = props;
        const { selection } = view.state;
        let startPos;
        try {
            startPos = view.coordsAtPos(selection.from);
        }
        catch (err) {
            console.warn(err);
            return defaultPosition;
        }
        const ref = this.menuRef.current;
        const offsetHeight = ref ? ref.offsetHeight : 0;
        const paragraph = view.domAtPos(selection.from);
        if (!props.isActive ||
            !paragraph.node ||
            !paragraph.node.getBoundingClientRect ||
            SSR) {
            return defaultPosition;
        }
        const { left } = this.caretPosition;
        const { top, bottom } = paragraph.node.getBoundingClientRect();
        const margin = 24;
        if (startPos.top - offsetHeight > margin) {
            return {
                left: left + window.scrollX,
                top: undefined,
                bottom: window.innerHeight - top - window.scrollY,
                isAbove: false,
            };
        }
        else {
            return {
                left: left + window.scrollX,
                top: bottom + window.scrollY,
                bottom: undefined,
                isAbove: true,
            };
        }
    }
    get filtered() {
        const { dictionary, embeds, search = "", uploadImage, uploadFile, hideUpload, } = this.props;
        let items = block_1.default(dictionary, hideUpload);
        const embedItems = [];
        for (const embed of embeds) {
            if (embed.title && embed.icon) {
                embedItems.push(Object.assign(Object.assign({}, embed), { name: "embed" }));
            }
        }
        if (embedItems.length) {
            items.push({
                name: "separator",
            });
            items = items.concat(embedItems);
        }
        const filtered = items.filter((item) => {
            if (item.name === "separator")
                return true;
            if (!uploadImage && item.name === "image")
                return false;
            if (!search)
                return !item.defaultHidden;
            const n = search.toLowerCase();
            return ((item.title || "").toLowerCase().includes(n) ||
                (item.keywords || "").toLowerCase().includes(n));
        });
        return filtered.reduce((acc, item, index) => {
            if (item.name === "separator" && index === 0)
                return acc;
            if (item.name === "separator" && index === filtered.length - 1)
                return acc;
            const prev = filtered[index - 1];
            if (prev && prev.name === "separator" && item.name === "separator")
                return acc;
            const next = filtered[index + 1];
            if (next && next.name === "separator" && item.name === "separator")
                return acc;
            return [...acc, item];
        }, []);
    }
    render() {
        const { dictionary, isActive, uploadImage, uploadFile } = this.props;
        const items = this.filtered;
        const _a = this.state, { insertItem } = _a, positioning = __rest(_a, ["insertItem"]);
        return (React.createElement(react_portal_1.Portal, null,
            React.createElement(exports.Wrapper, Object.assign({ id: "block-menu-container", active: isActive, ref: this.menuRef }, positioning),
                insertItem ? (React.createElement(LinkInputWrapper, null,
                    React.createElement(LinkInput, { type: "text", placeholder: insertItem.title
                            ? dictionary.pasteLinkWithTitle(insertItem.title)
                            : dictionary.pasteLink, onKeyDown: this.handleLinkInputKeydown, onPaste: this.handleLinkInputPaste, autoFocus: true }))) : (React.createElement(List, null,
                    items.map((item, index) => {
                        const selected = index === this.state.selectedIndex && isActive;
                        if (!item.title || !item.icon) {
                            return null;
                        }
                        return (React.createElement(ListItem, { key: index },
                            React.createElement(BlockMenuItem_1.default, { onClick: () => this.insertItem(item), selected: selected, icon: item.icon, title: item.title, description: item.description, shortcut: item.shortcut })));
                    }),
                    items.length === 0 && (React.createElement(ListItem, null,
                        React.createElement(Empty, null, dictionary.noResults))))),
                uploadImage && (React.createElement(VisuallyHidden_1.default, null,
                    React.createElement("input", { type: "file", ref: this.inputRef, onChange: this.handleImagePicked, accept: "image/*" }))),
                uploadFile && (React.createElement(VisuallyHidden_1.default, null,
                    React.createElement("input", { type: "file", ref: this.fileInputRef, onChange: this.handleFilePicked, accept: "*" }))))));
    }
}
const LinkInputWrapper = styled_components_1.default.div `
  margin: 8px;
`;
const LinkInput = styled_components_1.default(Input_1.default) `
  height: 36px;
  width: 100%;
  color: ${(props) => props.theme.blockToolbarText};
`;
const List = styled_components_1.default.ol `
  list-style: none;
  text-align: left;
  height: 100%;
  padding: 8px 0;
  margin: 0;
`;
const ListItem = styled_components_1.default.li `
  padding: 0;
  margin: 0;
`;
const Empty = styled_components_1.default.div `
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  padding: 0 16px;
`;
exports.Wrapper = styled_components_1.default.div `
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};
  position: absolute;
  z-index: ${(props) => {
    return props.theme.zIndex + 100;
}};
  ${(props) => props.top !== undefined && `top: ${props.top}px`};
  ${(props) => props.bottom !== undefined && `bottom: ${props.bottom}px`};
  left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.blockToolbarBackground};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 150ms;
  line-height: 0;
  box-sizing: border-box;
  pointer-events: none;
  white-space: nowrap;
  width: 355px;
  max-height: 336px;
  overflow: hidden;
  overflow-y: auto;

  * {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid ${(props) => props.theme.blockToolbarDivider};
  }

  ${({ active, isAbove }) => active &&
    `
     transform: translateY(${isAbove ? "6px" : "-6px"}) scale(1);
    pointer-events: all;
    opacity: 1;
  `};

  @media print {
    display: none;
  }
`;
exports.default = BlockMenu;
//# sourceMappingURL=BlockMenu.js.map