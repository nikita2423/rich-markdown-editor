webpackHotUpdate("main",{

/***/ "./src/components/EmojiPopup.tsx":
/*!***************************************!*\
  !*** ./src/components/EmojiPopup.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_portal_1 = __webpack_require__(/*! react-portal */ \"./node_modules/react-portal/lib/index.js\");\nconst prosemirror_utils_1 = __webpack_require__(/*! prosemirror-utils */ \"./node_modules/prosemirror-utils/dist/index.js\");\nconst styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.cjs.js\"));\nconst block_1 = __importDefault(__webpack_require__(/*! ../menus/block */ \"./src/menus/block.ts\"));\nconst map_1 = __importDefault(__webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\"));\nconst SSR = typeof window === \"undefined\";\nclass EmojiPopup extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.menuRef = React.createRef();\n        this.state = {\n            left: -1000,\n            top: 0,\n            bottom: undefined,\n            isAbove: false,\n            selectedIndex: 0,\n            insertItem: undefined,\n        };\n        this.close = () => {\n            this.props.onClose();\n            this.props.view.focus();\n        };\n        this.insertItem = (emojiCode) => {\n            const { view } = this.props;\n            const { dispatch, state } = view;\n            const { from, to } = state.selection;\n            const emojiText = `${emojiCode} `;\n            dispatch(view.state.tr.insertText(emojiText, from - 1, to));\n            view.focus();\n            this.props.onClose();\n        };\n        this.getAllEmojis = () => {\n            const { emojiData } = this.props;\n            if (emojiData && emojiData.length) {\n                return map_1.default(emojiData, (emoji, index) => {\n                    const onSelect = () => {\n                        this.insertItem(emoji);\n                    };\n                    return (React.createElement(\"div\", { className: \"editor-emoji-item\", onClick: onSelect, key: index }, emoji));\n                });\n            }\n        };\n        this.onEmojiClick = (event, emojiObject) => {\n            this.insertItem(emojiObject.emoji);\n        };\n    }\n    shouldComponentUpdate(nextProps, nextState) {\n        return (nextProps.isActive !== this.props.isActive || nextState !== this.state);\n    }\n    componentDidUpdate(prevProps) {\n        if (!prevProps.isActive && this.props.isActive) {\n            const position = this.calculatePosition(this.props);\n            this.setState(Object.assign({ insertItem: undefined, selectedIndex: 0 }, position));\n        }\n    }\n    clearSearch() {\n        const { state, dispatch } = this.props.view;\n        const parent = prosemirror_utils_1.findParentNode((node) => !!node)(state.selection);\n        if (parent) {\n            dispatch(state.tr.insertText(\"\", parent.pos, parent.pos + parent.node.textContent.length + 1));\n        }\n    }\n    get caretPosition() {\n        const selection = window.document.getSelection();\n        if (!selection || !selection.anchorNode || !selection.focusNode) {\n            return {\n                top: 0,\n                left: 0,\n            };\n        }\n        const range = window.document.createRange();\n        range.setStart(selection.anchorNode, selection.anchorOffset);\n        range.setEnd(selection.focusNode, selection.focusOffset);\n        const rects = range.getClientRects();\n        if (rects.length === 0) {\n            if (range.startContainer && range.collapsed) {\n                range.selectNodeContents(range.startContainer);\n            }\n        }\n        const rect = range.getBoundingClientRect();\n        return {\n            top: rect.top,\n            left: rect.left,\n        };\n    }\n    calculatePosition(props) {\n        const { view } = props;\n        const { selection } = view.state;\n        const startPos = view.coordsAtPos(selection.$from.pos);\n        const ref = this.menuRef.current;\n        const offsetHeight = ref ? ref.offsetHeight : 0;\n        const paragraph = view.domAtPos(selection.$from.pos);\n        if (!props.isActive ||\n            !paragraph.node ||\n            !paragraph.node.getBoundingClientRect ||\n            SSR) {\n            return {\n                left: -1000,\n                top: 0,\n                bottom: undefined,\n                isAbove: false,\n            };\n        }\n        const { left } = this.caretPosition;\n        const { top, bottom } = paragraph.node.getBoundingClientRect();\n        const margin = 24;\n        if (startPos.top - offsetHeight > margin) {\n            return {\n                left: left + window.scrollX,\n                top: undefined,\n                bottom: window.innerHeight - top - window.scrollY,\n                isAbove: false,\n            };\n        }\n        else {\n            return {\n                left: left + window.scrollX,\n                top: bottom + window.scrollY,\n                bottom: undefined,\n                isAbove: true,\n            };\n        }\n    }\n    render() {\n        const { dictionary, isActive } = this.props;\n        const positioning = __rest(this.state, []);\n        const items = block_1.default(dictionary);\n        console.log(\"EMoji getting called\", isActive);\n        return (React.createElement(react_portal_1.Portal, null,\n            React.createElement(exports.Wrapper, Object.assign({ id: \"block-menu-container\", active: isActive, ref: this.menuRef }, positioning),\n                React.createElement(\"div\", { className: \"editor-emoji-container\" }, this.getAllEmojis()))));\n    }\n}\nexports.Wrapper = styled_components_1.default.div `\n  color: ${(props) => props.theme.text};\n  font-family: ${(props) => props.theme.fontFamily};\n  position: absolute;\n  z-index: ${(props) => {\n    return props.theme.zIndex + 100;\n}};\n  ${(props) => props.top !== undefined && `top: ${props.top}px`};\n  ${(props) => props.bottom !== undefined && `bottom: ${props.bottom}px`};\n  left: ${(props) => props.left}px;\n  background-color: ${(props) => props.theme.blockToolbarBackground};\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;\n  opacity: 0;\n  transform: scale(0.95);\n  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 150ms;\n  line-height: 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  white-space: nowrap;\n  width: 277px;\n  overflow: hidden;\n  overflow-y: auto;\n  padding: 0;\n\n  * {\n    box-sizing: border-box;\n  }\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #fff;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 5px;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  hr {\n    border: 0;\n    height: 0;\n    border-top: 1px solid ${(props) => props.theme.blockToolbarDivider};\n  }\n\n  ${({ active, isAbove }) => active &&\n    `\n    transform: translateY(${isAbove ? \"6px\" : \"-6px\"}) scale(1);\n    pointer-events: all;\n    opacity: 1;\n  `};\n\n  .editor-emoji-container {\n    margin-top: 10px;\n    height: inherit;\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 10px;\n  }\n\n  .editor-emoji-item {\n    height: 32px;\n    min-width: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 6px;\n    padding-right: 3px;\n    padding-top: 2px;\n    cursor: pointer;\n    font-size: 22px;\n    margin-right: 10px;\n  }\n\n  .editor-emoji-item:hover {\n    background: #f4f7fa;\n  }\n\n  @media print {\n    display: none;\n  }\n`;\nexports.default = EmojiPopup;\n\n\n//# sourceURL=webpack:///./src/components/EmojiPopup.tsx?");

/***/ })

})