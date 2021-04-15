"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const H1Icon_1 = __importDefault(require("../icons/H1Icon"));
const H2Icon_1 = __importDefault(require("../icons/H2Icon"));
const H3Icon_1 = __importDefault(require("../icons/H3Icon"));
const CheckListIcon_1 = __importDefault(require("../icons/CheckListIcon"));
const BulletIcon_1 = __importDefault(require("../icons/BulletIcon"));
const OrderedIcon_1 = __importDefault(require("../icons/OrderedIcon"));
const TableIcon_1 = __importDefault(require("../icons/TableIcon"));
const QuoteIcon_1 = __importDefault(require("../icons/QuoteIcon"));
const CodeBlockIcon_1 = __importDefault(require("../icons/CodeBlockIcon"));
const DividerIcon_1 = __importDefault(require("../icons/DividerIcon"));
const ImageIcon_1 = __importDefault(require("../icons/ImageIcon"));
const LinkIcon_1 = __importDefault(require("../icons/LinkIcon"));
const InfoHintIcon_1 = __importDefault(require("../icons/InfoHintIcon"));
const WarningIcon_1 = __importDefault(require("../icons/WarningIcon"));
const BasicIcon_1 = __importDefault(require("../icons/BasicIcon"));
const EmojiIcon_1 = __importDefault(require("../icons/EmojiIcon"));
const MentionIcon_1 = __importDefault(require("../icons/MentionIcon"));
const SSR = typeof window === "undefined";
const isMac = !SSR && window.navigator.platform === "MacIntel";
const mod = isMac ? "⌘" : "ctrl";
function blockMenuItems(dictionary) {
    return [
        {
            name: "heading",
            title: dictionary.h1,
            keywords: "h1 heading1 title",
            icon: H1Icon_1.default,
            shortcut: "^ ⇧ 1",
            description: dictionary.heading1Desc,
            attrs: { level: 1 },
        },
        {
            name: "heading",
            title: dictionary.h2,
            keywords: "h2 heading2",
            icon: H2Icon_1.default,
            description: dictionary.heading2Desc,
            shortcut: "^ ⇧ 2",
            attrs: { level: 2 },
        },
        {
            name: "heading",
            title: dictionary.h3,
            description: dictionary.heading3Desc,
            keywords: "h3 heading3",
            icon: H3Icon_1.default,
            shortcut: "^ ⇧ 3",
            attrs: { level: 3 },
        },
        {
            name: "checkbox_list",
            title: dictionary.checkboxList,
            description: dictionary.todoListDesc,
            icon: CheckListIcon_1.default,
            keywords: "checklist checkbox task",
            shortcut: "^ ⇧ 7",
        },
        {
            name: "bullet_list",
            title: dictionary.bulletList,
            description: dictionary.bulletedListDesc,
            icon: BulletIcon_1.default,
            shortcut: "^ ⇧ 8",
        },
        {
            name: "ordered_list",
            title: dictionary.orderedList,
            description: dictionary.numberedListDesc,
            icon: OrderedIcon_1.default,
            shortcut: "^ ⇧ 9",
        },
        {
            name: "table",
            title: dictionary.table,
            description: dictionary.tableDesc,
            icon: TableIcon_1.default,
            attrs: { rowsCount: 3, colsCount: 3 },
        },
        {
            name: "blockquote",
            title: dictionary.quote,
            description: dictionary.quoteDesc,
            icon: QuoteIcon_1.default,
            shortcut: `${mod} ]`,
        },
        {
            name: "code_block",
            title: dictionary.codeBlock,
            description: dictionary.codeDesc,
            icon: CodeBlockIcon_1.default,
            shortcut: "^ ⇧ \\",
            keywords: "script",
        },
        {
            name: "hr",
            title: dictionary.hr,
            description: dictionary.dividerDesc,
            icon: DividerIcon_1.default,
            shortcut: `${mod} _`,
            keywords: "horizontal rule break line",
        },
        {
            name: "image",
            title: dictionary.image,
            description: dictionary.imageDesc,
            icon: ImageIcon_1.default,
            keywords: "picture photo",
        },
        {
            name: "file",
            title: "File",
            description: dictionary.imageDesc,
            icon: ImageIcon_1.default,
            keywords: "file doc pdf",
        },
        {
            name: "link",
            title: dictionary.link,
            description: dictionary.linkDesc,
            icon: LinkIcon_1.default,
            shortcut: `${mod} k`,
            keywords: "link url uri href",
        },
        {
            name: "container_notice",
            title: dictionary.infoNotice,
            description: dictionary.hintInfoDesc,
            icon: InfoHintIcon_1.default,
            keywords: "container_notice card information",
            attrs: { style: "info" },
        },
        {
            name: "container_notice",
            title: dictionary.warningNotice,
            description: dictionary.warningDesc,
            icon: WarningIcon_1.default,
            keywords: "container_notice card error",
            attrs: { style: "warning" },
        },
        {
            name: "container_notice",
            title: dictionary.tipNotice,
            description: dictionary.basicDesc,
            icon: BasicIcon_1.default,
            keywords: "container_notice card suggestion",
            attrs: { style: "tip" },
        },
        {
            name: "emoji",
            title: dictionary.emoji,
            description: dictionary.emojiDesc,
            icon: EmojiIcon_1.default,
            shortcut: `:`,
        },
        {
            name: "mention",
            title: dictionary.mention,
            description: dictionary.mentionDesc,
            icon: MentionIcon_1.default,
            shortcut: `@`,
        },
    ];
}
exports.default = blockMenuItems;
//# sourceMappingURL=block.js.map