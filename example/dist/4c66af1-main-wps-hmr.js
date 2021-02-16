webpackHotUpdate("main",{

/***/ "./src/plugins/BlockMenuTrigger.tsx":
/*!******************************************!*\
  !*** ./src/plugins/BlockMenuTrigger.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst prosemirror_inputrules_1 = __webpack_require__(/*! prosemirror-inputrules */ \"./node_modules/prosemirror-inputrules/dist/index.js\");\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\nconst prosemirror_state_1 = __webpack_require__(/*! prosemirror-state */ \"./node_modules/prosemirror-state/dist/index.js\");\nconst prosemirror_tables_1 = __webpack_require__(/*! prosemirror-tables */ \"./node_modules/prosemirror-tables/dist/index.js\");\nconst prosemirror_utils_1 = __webpack_require__(/*! prosemirror-utils */ \"./node_modules/prosemirror-utils/dist/index.js\");\nconst prosemirror_view_1 = __webpack_require__(/*! prosemirror-view */ \"./node_modules/prosemirror-view/dist/index.js\");\nconst Extension_1 = __importDefault(__webpack_require__(/*! ../lib/Extension */ \"./src/lib/Extension.ts\"));\nconst PlusIcon_1 = __importDefault(__webpack_require__(/*! ../icons/PlusIcon */ \"./src/icons/PlusIcon.js\"));\nconst MAX_MATCH = 500;\nconst OPEN_REGEX = /\\/(\\w+)?$/;\nconst CLOSE_REGEX = /(^(?!\\/(\\w+)?)(.*)[^\\/]$|^\\/((\\w+)\\s.*[^\\/]|\\s|\\s.*[^\\/])$)/;\nconst plusComponent = React.createElement(PlusIcon_1.default, { style: { width: \"18px\", height: \"18px\" } });\nfunction run(view, from, to, regex, handler) {\n    if (view.composing) {\n        return false;\n    }\n    const state = view.state;\n    const $from = state.doc.resolve(from);\n    if ($from.parent.type.spec.code) {\n        return false;\n    }\n    const textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, \"\\ufffc\");\n    const match = regex.exec(textBefore);\n    const tr = handler(state, match, match ? from - match[0].length : from, to);\n    if (!tr)\n        return false;\n    return true;\n}\nclass BlockMenuTrigger extends Extension_1.default {\n    get name() {\n        return \"blockmenu\";\n    }\n    get plugins() {\n        return [\n            new prosemirror_state_1.Plugin({\n                props: {\n                    handleClick: () => {\n                        this.options.onClose();\n                        return false;\n                    },\n                    handleKeyDown: (view, event) => {\n                        if (event.key === \"Backspace\") {\n                            setTimeout(() => {\n                                const { pos } = view.state.selection.$from;\n                                return run(view, pos, pos, OPEN_REGEX, (state, match) => {\n                                    if (match) {\n                                        this.options.onOpen(match[1]);\n                                    }\n                                    else {\n                                        this.options.onClose();\n                                    }\n                                    return null;\n                                });\n                            });\n                        }\n                        if (event.key === \"Enter\" ||\n                            event.key === \"ArrowUp\" ||\n                            event.key === \"ArrowDown\" ||\n                            event.key === \"Tab\") {\n                            const { pos } = view.state.selection.$from;\n                            return run(view, pos, pos, OPEN_REGEX, (state, match) => {\n                                return match ? true : null;\n                            });\n                        }\n                        return false;\n                    },\n                    decorations: (state) => {\n                        const parent = prosemirror_utils_1.findParentNode((node) => node.type.name === \"paragraph\")(state.selection);\n                        if (!parent) {\n                            return;\n                        }\n                        const decorations = [];\n                        const isEmpty = parent && parent.node.content.size === 0;\n                        const isSlash = parent && parent.node.textContent === \"/\";\n                        const isTopLevel = state.selection.$from.depth === 1;\n                        if (isTopLevel) {\n                            if (isEmpty) {\n                                decorations.push(prosemirror_view_1.Decoration.widget(parent.pos, () => {\n                                    const icon = document.createElement(\"div\");\n                                    icon.className = \"block-menu-trigger\";\n                                    icon.addEventListener(\"click\", () => {\n                                        this.options.onOpen(\"\");\n                                    });\n                                    react_dom_1.default.render(plusComponent, icon);\n                                    return icon;\n                                }));\n                                decorations.push(prosemirror_view_1.Decoration.node(parent.pos, parent.pos + parent.node.nodeSize, {\n                                    class: \"placeholder\",\n                                    \"data-empty-text\": this.options.dictionary.newLineEmpty,\n                                }));\n                            }\n                            if (isSlash) {\n                                decorations.push(prosemirror_view_1.Decoration.node(parent.pos, parent.pos + parent.node.nodeSize, {\n                                    class: \"placeholder\",\n                                    \"data-empty-text\": `  ${this.options.dictionary.newLineWithSlash}`,\n                                }));\n                            }\n                            return prosemirror_view_1.DecorationSet.create(state.doc, decorations);\n                        }\n                        return;\n                    },\n                },\n            }),\n        ];\n    }\n    inputRules() {\n        return [\n            new prosemirror_inputrules_1.InputRule(OPEN_REGEX, (state, match) => {\n                if (match &&\n                    state.selection.$from.parent.type.name === \"paragraph\" &&\n                    !prosemirror_tables_1.isInTable(state)) {\n                    this.options.onOpen(match[1]);\n                }\n                return null;\n            }),\n            new prosemirror_inputrules_1.InputRule(CLOSE_REGEX, (state, match) => {\n                if (match) {\n                    this.options.onClose();\n                }\n                return null;\n            }),\n        ];\n    }\n}\nexports.default = BlockMenuTrigger;\n\n\n//# sourceURL=webpack:///./src/plugins/BlockMenuTrigger.tsx?");

/***/ })

})