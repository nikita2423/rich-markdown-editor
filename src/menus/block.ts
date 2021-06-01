import Heading1Icon from "../icons/H1Icon";
import Heading2Icon from "../icons/H2Icon";
import Heading3Icon from "../icons/H3Icon";
import TodoListIcon from "../icons/CheckListIcon";
import BulletedListIcon from "../icons/BulletIcon";
import OrderedListIcon from "../icons/OrderedIcon";
import TableIcon from "../icons/TableIcon";
import BlockQuoteIcon from "../icons/QuoteIcon";
import CodeIcon from "../icons/CodeBlockIcon";
import HorizontalRuleIcon from "../icons/DividerIcon";
import ImageIcon from "../icons/ImageIcon";
import FileIcon from "../icons/FileIcon";
import LinkIcon from "../icons/LinkIcon";
import InfoIcon from "../icons/InfoHintIcon";
import WarningIcon from "../icons/WarningIcon";
import StarredIcon from "../icons/BasicIcon";
import EmojiIcon from "../icons/EmojiIcon";
import MentionIcon from "../icons/MentionIcon";

import { MenuItem } from "../types";
import baseDictionary from "../dictionary";
const SSR = typeof window === "undefined";
const isMac = !SSR && window.navigator.platform === "MacIntel";
const mod = isMac ? "⌘" : "ctrl";

export default function blockMenuItems(
  dictionary: typeof baseDictionary,
  hideUpload: boolean
): MenuItem[] {
  let list = [];
  list = [
    {
      name: "heading",
      title: dictionary.h1,
      keywords: "h1 heading1 title",
      icon: Heading1Icon,
      shortcut: "ctrl shift 1",
      description: dictionary.heading1Desc,
      attrs: { level: 1 },
    },
    {
      name: "heading",
      title: dictionary.h2,
      keywords: "h2 heading2",
      icon: Heading2Icon,
      description: dictionary.heading2Desc,
      shortcut: "ctrl shift 2",
      attrs: { level: 2 },
    },
    {
      name: "heading",
      title: dictionary.h3,
      description: dictionary.heading3Desc,
      keywords: "h3 heading3",
      icon: Heading3Icon,
      shortcut: "ctrl shift 3",
      attrs: { level: 3 },
    },
    // {
    //   name: "separator",
    // },
    {
      name: "checkbox_list",
      title: dictionary.checkboxList,
      description: dictionary.todoListDesc,
      icon: TodoListIcon,
      keywords: "checklist checkbox task",
      shortcut: "ctrl shift 4",
    },
    {
      name: "bullet_list",
      title: dictionary.bulletList,
      description: dictionary.bulletedListDesc,
      icon: BulletedListIcon,
      shortcut: "ctrl shift 5",
    },
    {
      name: "ordered_list",
      title: dictionary.orderedList,
      description: dictionary.numberedListDesc,
      icon: OrderedListIcon,
      shortcut: "ctrl shift 6",
    },
    // {
    //   name: "separator",
    // },
    {
      name: "table",
      title: dictionary.table,
      description: dictionary.tableDesc,
      icon: TableIcon,
      attrs: { rowsCount: 3, colsCount: 3 },
    },
    {
      name: "blockquote",
      title: dictionary.quote,
      description: dictionary.quoteDesc,
      icon: BlockQuoteIcon,
      shortcut: `ctrl shift 7`,
    },
    {
      name: "code_block",
      title: dictionary.codeBlock,
      description: dictionary.codeDesc,
      icon: CodeIcon,
      shortcut: "ctrl shift 9",
      keywords: "script",
    },
    {
      name: "hr",
      title: dictionary.hr,
      description: dictionary.dividerDesc,
      icon: HorizontalRuleIcon,
      shortcut: `ctrl _`,
      keywords: "horizontal rule break line",
    },
    {
      name: "hr",
      title: dictionary.pageBreak,
      description: dictionary.dividerDesc,
      icon: HorizontalRuleIcon,
      keywords: "page print break line",
      attrs: { markup: "***" },
    },
    {
      name: "image",
      title: dictionary.image,
      description: dictionary.imageDesc,
      icon: ImageIcon,
      keywords: "picture photo",
    },
    {
      name: "file",
      title: "File Upload",
      description: "Upload attachments, docs or pdfs.",
      icon: FileIcon,
      keywords: "file doc pdf",
    },
    {
      name: "link",
      title: dictionary.link,
      description: dictionary.linkDesc,
      icon: LinkIcon,
      shortcut: `ctrl k`,
      keywords: "link url uri href",
    },
    // {
    //   name: "separator",
    // },
    {
      name: "container_notice",
      title: dictionary.infoNotice,
      description: dictionary.hintInfoDesc,
      icon: InfoIcon,
      keywords: "container_notice card information",
      attrs: { style: "info" },
    },
    {
      name: "container_notice",
      title: dictionary.warningNotice,
      description: dictionary.warningDesc,
      icon: WarningIcon,
      keywords: "container_notice card error",
      attrs: { style: "warning" },
    },
    {
      name: "container_notice",
      title: dictionary.tipNotice,
      description: dictionary.basicDesc,
      icon: StarredIcon,
      keywords: "container_notice card suggestion",
      attrs: { style: "tip" },
    },
    // {
    //   name: "separator",
    // },
    {
      name: "emoji",
      title: dictionary.emoji,
      description: dictionary.emojiDesc,
      icon: EmojiIcon,
      shortcut: `:`,
    },
    {
      name: "mention",
      title: dictionary.mention,
      description: dictionary.mentionDesc,
      icon: MentionIcon,
      shortcut: `@`,
    },
  ];
  if (hideUpload) {
    list.splice(11, 2);
  }
  return list;
}
