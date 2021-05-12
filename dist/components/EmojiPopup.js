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
const react_portal_1 = require("react-portal");
const prosemirror_utils_1 = require("prosemirror-utils");
const styled_components_1 = __importDefault(require("styled-components"));
const block_1 = __importDefault(require("../menus/block"));
const map_1 = __importDefault(require("lodash/map"));
const SSR = typeof window === "undefined";
class EmojiPopup extends React.Component {
    constructor() {
        super(...arguments);
        this.menuRef = React.createRef();
        this.state = {
            left: -1000,
            top: 0,
            bottom: undefined,
            isAbove: false,
            selectedIndex: 0,
            insertItem: undefined,
        };
        this.close = () => {
            this.props.onClose();
            this.props.view.focus();
        };
        this.insertItem = (emojiCode) => {
            const { view } = this.props;
            const { dispatch, state } = view;
            const { from, to } = state.selection;
            const emojiText = `${emojiCode} `;
            dispatch(view.state.tr.insertText(emojiText, from - 1, to));
            view.focus();
            this.props.onClose();
        };
        this.getAllEmojis = () => {
            const { emojiData } = this.props;
            if (emojiData && emojiData.length) {
                return map_1.default(emojiData, (emoji, index) => {
                    const onSelect = () => {
                        this.insertItem(emoji);
                    };
                    return (React.createElement("div", { className: "editor-emoji-item", onClick: onSelect, key: index }, emoji));
                });
            }
        };
        this.onEmojiClick = (event, emojiObject) => {
            this.insertItem(emojiObject.emoji);
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.isActive !== this.props.isActive || nextState !== this.state);
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.isActive && this.props.isActive) {
            const position = this.calculatePosition(this.props);
            this.setState(Object.assign({ insertItem: undefined, selectedIndex: 0 }, position));
        }
    }
    clearSearch() {
        const { state, dispatch } = this.props.view;
        const parent = prosemirror_utils_1.findParentNode((node) => !!node)(state.selection);
        if (parent) {
            dispatch(state.tr.insertText("", parent.pos, parent.pos + parent.node.textContent.length + 1));
        }
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
        const startPos = view.coordsAtPos(selection.$from.pos);
        const ref = this.menuRef.current;
        const offsetHeight = ref ? ref.offsetHeight : 0;
        const paragraph = view.domAtPos(selection.$from.pos);
        if (!props.isActive ||
            !paragraph.node ||
            !paragraph.node.getBoundingClientRect ||
            SSR) {
            return {
                left: -1000,
                top: 0,
                bottom: undefined,
                isAbove: false,
            };
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
    render() {
        const { dictionary, isActive } = this.props;
        const positioning = __rest(this.state, []);
        const items = block_1.default(dictionary);
        return (React.createElement(react_portal_1.Portal, null,
            React.createElement(exports.Wrapper, Object.assign({ id: "block-menu-container", active: isActive, ref: this.menuRef }, positioning), isActive && (React.createElement("div", { className: "editor-emoji-container" }, this.getAllEmojis())))));
    }
}
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
  width: 277px;
  overflow: hidden;
  overflow-y: auto;
  padding-left: 14px;
  height: 244px;

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
    min-height: 100px;
  `};

  .editor-emoji-container {
    margin-top: 10px;
    height: inherit;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .editor-emoji-item {
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding-right: 3px;
    padding-top: 2px;
    cursor: pointer;
    font-size: 22px;
    margin-right: 10px;
  }

  .editor-emoji-item:hover {
    background: #f4f7fa;
  }

  @media print {
    display: none;
  }
`;
exports.default = EmojiPopup;
//# sourceMappingURL=EmojiPopup.js.map