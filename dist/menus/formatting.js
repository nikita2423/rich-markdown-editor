"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlusIcon_1 = __importDefault(require("../icons/PlusIcon"));
const CodeBlockIcon_1 = __importDefault(require("../icons/CodeBlockIcon"));
const H1Icon_1 = __importDefault(require("../icons/H1Icon"));
const H2Icon_1 = __importDefault(require("../icons/H2Icon"));
const PlusIcon_2 = __importDefault(require("../icons/PlusIcon"));
const QuoteIcon_1 = __importDefault(require("../icons/QuoteIcon"));
const LinkIcon_1 = __importDefault(require("../icons/LinkIcon"));
const PlusIcon_3 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_4 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_5 = __importDefault(require("../icons/PlusIcon"));
const prosemirror_tables_1 = require("prosemirror-tables");
const isInList_1 = __importDefault(require("../queries/isInList"));
const isMarkActive_1 = __importDefault(require("../queries/isMarkActive"));
const isNodeActive_1 = __importDefault(require("../queries/isNodeActive"));
function formattingMenuItems(state, isTemplate, dictionary) {
    const { schema } = state;
    const isTable = prosemirror_tables_1.isInTable(state);
    const isList = isInList_1.default(state);
    const allowBlocks = !isTable && !isList;
    return [
        {
            name: "placeholder",
            tooltip: dictionary.placeholder,
            icon: PlusIcon_4.default,
            active: isMarkActive_1.default(schema.marks.placeholder),
            visible: isTemplate,
        },
        {
            name: "separator",
            visible: isTemplate,
        },
        {
            name: "strong",
            tooltip: dictionary.strong,
            icon: PlusIcon_1.default,
            active: isMarkActive_1.default(schema.marks.strong),
        },
        {
            name: "em",
            tooltip: dictionary.em,
            icon: PlusIcon_2.default,
            active: isMarkActive_1.default(schema.marks.em),
        },
        {
            name: "strikethrough",
            tooltip: dictionary.strikethrough,
            icon: PlusIcon_3.default,
            active: isMarkActive_1.default(schema.marks.strikethrough),
        },
        {
            name: "mark",
            tooltip: dictionary.mark,
            icon: PlusIcon_5.default,
            active: isMarkActive_1.default(schema.marks.mark),
            visible: !isTemplate,
        },
        {
            name: "code_inline",
            tooltip: dictionary.codeInline,
            icon: CodeBlockIcon_1.default,
            active: isMarkActive_1.default(schema.marks.code_inline),
        },
        {
            name: "separator",
            visible: allowBlocks,
        },
        {
            name: "heading",
            tooltip: dictionary.heading,
            icon: H1Icon_1.default,
            active: isNodeActive_1.default(schema.nodes.heading, { level: 1 }),
            attrs: { level: 1 },
            visible: allowBlocks,
        },
        {
            name: "heading",
            tooltip: dictionary.subheading,
            icon: H2Icon_1.default,
            active: isNodeActive_1.default(schema.nodes.heading, { level: 2 }),
            attrs: { level: 2 },
            visible: allowBlocks,
        },
        {
            name: "blockquote",
            tooltip: dictionary.quote,
            icon: QuoteIcon_1.default,
            active: isNodeActive_1.default(schema.nodes.blockquote),
            attrs: { level: 2 },
            visible: allowBlocks,
        },
        {
            name: "separator",
        },
        {
            name: "link",
            tooltip: dictionary.createLink,
            icon: LinkIcon_1.default,
            active: isMarkActive_1.default(schema.marks.link),
            attrs: { href: "" },
        },
    ];
}
exports.default = formattingMenuItems;
//# sourceMappingURL=formatting.js.map