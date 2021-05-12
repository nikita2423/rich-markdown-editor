"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoldIcon_1 = __importDefault(require("../icons/BoldIcon"));
const CodeBlockIcon_1 = __importDefault(require("../icons/CodeBlockIcon"));
const H1Icon_1 = __importDefault(require("../icons/H1Icon"));
const H2Icon_1 = __importDefault(require("../icons/H2Icon"));
const ItalicIcon_1 = __importDefault(require("../icons/ItalicIcon"));
const QuoteIcon_1 = __importDefault(require("../icons/QuoteIcon"));
const LinkIcon_1 = __importDefault(require("../icons/LinkIcon"));
const StrikeThroughIcon_1 = __importDefault(require("../icons/StrikeThroughIcon"));
const PlusIcon_1 = __importDefault(require("../icons/PlusIcon"));
const HighlighterIcon_1 = __importDefault(require("../icons/HighlighterIcon"));
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
            icon: PlusIcon_1.default,
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
            icon: BoldIcon_1.default,
            active: isMarkActive_1.default(schema.marks.strong),
        },
        {
            name: "em",
            tooltip: dictionary.em,
            icon: ItalicIcon_1.default,
            active: isMarkActive_1.default(schema.marks.em),
        },
        {
            name: "strikethrough",
            tooltip: dictionary.strikethrough,
            icon: StrikeThroughIcon_1.default,
            active: isMarkActive_1.default(schema.marks.strikethrough),
        },
        {
            name: "highlight",
            tooltip: dictionary.mark,
            icon: HighlighterIcon_1.default,
            active: isMarkActive_1.default(schema.marks.highlight),
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