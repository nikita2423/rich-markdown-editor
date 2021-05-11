webpackHotUpdate("main",{

/***/ "./src/lib/ExtensionManager.ts":
/*!*************************************!*\
  !*** ./src/lib/ExtensionManager.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst prosemirror_keymap_1 = __webpack_require__(/*! prosemirror-keymap */ \"./node_modules/prosemirror-keymap/dist/index.js\");\nconst prosemirror_markdown_1 = __webpack_require__(/*! prosemirror-markdown */ \"./node_modules/prosemirror-markdown/dist/index.js\");\nconst serializer_1 = __webpack_require__(/*! ./markdown/serializer */ \"./src/lib/markdown/serializer.js\");\nconst rules_1 = __importDefault(__webpack_require__(/*! ./markdown/rules */ \"./src/lib/markdown/rules.ts\"));\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./src/helper.js\");\nclass ExtensionManager {\n    constructor(extensions = [], editor) {\n        if (editor) {\n            extensions.forEach((extension) => {\n                extension.bindEditor(editor);\n            });\n        }\n        this.extensions = extensions;\n        this.embeds = editor ? editor.props.embeds : undefined;\n    }\n    get nodes() {\n        return this.extensions\n            .filter((extension) => extension.type === \"node\")\n            .reduce((nodes, node) => (Object.assign(Object.assign({}, nodes), { [node.name]: node.schema })), {});\n    }\n    serializer() {\n        const nodes = this.extensions\n            .filter((extension) => extension.type === \"node\")\n            .reduce((nodes, extension) => (Object.assign(Object.assign({}, nodes), { [extension.name]: extension.toMarkdown })), {});\n        const marks = this.extensions\n            .filter((extension) => extension.type === \"mark\")\n            .reduce((marks, extension) => (Object.assign(Object.assign({}, marks), { [extension.name]: extension.toMarkdown })), {});\n        return new serializer_1.MarkdownSerializer(Object.assign(Object.assign({}, nodes), { mention: helper_1.markdownParser() }), marks);\n    }\n    parser({ schema }) {\n        const tokens = this.extensions\n            .filter((extension) => extension.type === \"mark\" || extension.type === \"node\")\n            .reduce((nodes, extension) => {\n            const md = extension.parseMarkdown();\n            if (!md)\n                return nodes;\n            return Object.assign(Object.assign({}, nodes), { [extension.markdownToken || extension.name]: md });\n        }, {});\n        return new prosemirror_markdown_1.MarkdownParser(schema, rules_1.default({ embeds: this.embeds }), Object.assign(Object.assign({}, tokens), { mention: helper_1.markdownParser() }));\n    }\n    get marks() {\n        return this.extensions\n            .filter((extension) => extension.type === \"mark\")\n            .reduce((marks, { name, schema }) => (Object.assign(Object.assign({}, marks), { [name]: schema })), {});\n    }\n    get plugins() {\n        return this.extensions\n            .filter((extension) => extension.plugins)\n            .reduce((allPlugins, { plugins }) => [...allPlugins, ...plugins], []);\n    }\n    keymaps({ schema }) {\n        const extensionKeymaps = this.extensions\n            .filter((extension) => [\"extension\"].includes(extension.type))\n            .filter((extension) => extension.keys)\n            .map((extension) => extension.keys({ schema }));\n        const nodeMarkKeymaps = this.extensions\n            .filter((extension) => [\"node\", \"mark\"].includes(extension.type))\n            .filter((extension) => extension.keys)\n            .map((extension) => extension.keys({\n            type: schema[`${extension.type}s`][extension.name],\n            schema,\n        }));\n        return [\n            ...extensionKeymaps,\n            ...nodeMarkKeymaps,\n        ].map((keys) => prosemirror_keymap_1.keymap(keys));\n    }\n    inputRules({ schema }) {\n        const extensionInputRules = this.extensions\n            .filter((extension) => [\"extension\"].includes(extension.type))\n            .filter((extension) => extension.inputRules)\n            .map((extension) => extension.inputRules({ schema }));\n        const nodeMarkInputRules = this.extensions\n            .filter((extension) => [\"node\", \"mark\"].includes(extension.type))\n            .filter((extension) => extension.inputRules)\n            .map((extension) => extension.inputRules({\n            type: schema[`${extension.type}s`][extension.name],\n            schema,\n        }));\n        return [...extensionInputRules, ...nodeMarkInputRules].reduce((allInputRules, inputRules) => [...allInputRules, ...inputRules], []);\n    }\n    commands({ schema, view }) {\n        return this.extensions\n            .filter((extension) => extension.commands)\n            .reduce((allCommands, extension) => {\n            const { name, type } = extension;\n            const commands = {};\n            const value = extension.commands(Object.assign({ schema }, ([\"node\", \"mark\"].includes(type)\n                ? {\n                    type: schema[`${type}s`][name],\n                }\n                : {})));\n            const apply = (callback, attrs) => {\n                if (!view.editable) {\n                    return false;\n                }\n                view.focus();\n                return callback(attrs)(view.state, view.dispatch, view);\n            };\n            const handle = (_name, _value) => {\n                if (Array.isArray(_value)) {\n                    commands[_name] = (attrs) => _value.forEach((callback) => apply(callback, attrs));\n                }\n                else if (typeof _value === \"function\") {\n                    commands[_name] = (attrs) => apply(_value, attrs);\n                }\n            };\n            if (typeof value === \"object\") {\n                Object.entries(value).forEach(([commandName, commandValue]) => {\n                    handle(commandName, commandValue);\n                });\n            }\n            else {\n                handle(name, value);\n            }\n            return Object.assign(Object.assign({}, allCommands), commands);\n        }, {});\n    }\n}\nexports.default = ExtensionManager;\n\n\n//# sourceURL=webpack:///./src/lib/ExtensionManager.ts?");

/***/ })

})