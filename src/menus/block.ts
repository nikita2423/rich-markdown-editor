// import {
//   BlockQuoteIcon,
//   BulletedListIcon,
//   CodeIcon,
//   Heading1Icon,
//   Heading2Icon,
//   Heading3Icon,
//   HorizontalRuleIcon,
//   OrderedListIcon,
//   TableIcon,
//   TodoListIcon,
//   ImageIcon,
//   StarredIcon,
//   WarningIcon,
//   InfoIcon,
//   LinkIcon,
// } from "outline-icons";
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
import LinkIcon from "../icons/LinkIcon";
import InfoIcon from "../icons/InfoHintIcon";
import WarningIcon from "../icons/WarningIcon";
import StarredIcon from "../icons/BasicIcon";
import EmojiIcon from "../icons/EmojiIcon";
import MentionIcon from "../icons/MentionIcon";
import DangerIcon from "../icons/DangerIcon";
import SuccessIcon from "../icons/SuccessIcon";

import { MenuItem } from "../types";
import baseDictionary from "../dictionary";
const SSR = typeof window === "undefined";
const isMac = !SSR && window.navigator.platform === "MacIntel";
const mod = isMac ? "⌘" : "ctrl";

export default function blockMenuItems(
  dictionary: typeof baseDictionary
): MenuItem[] {
  return [
    {
      name: "heading",
      title: dictionary.h1,
      keywords: "h1 heading1 title",
      icon: Heading1Icon,
      shortcut: "^ ⇧ 1",
      description: dictionary.heading1Desc,
      attrs: { level: 1 },
    },
    {
      name: "heading",
      title: dictionary.h2,
      keywords: "h2 heading2",
      icon: Heading2Icon,
      description: dictionary.heading2Desc,
      shortcut: "^ ⇧ 2",
      attrs: { level: 2 },
    },
    {
      name: "heading",
      title: dictionary.h3,
      description: dictionary.heading3Desc,
      keywords: "h3 heading3",
      icon: Heading3Icon,
      shortcut: "^ ⇧ 3",
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
      shortcut: "^ ⇧ 7",
    },
    {
      name: "bullet_list",
      title: dictionary.bulletList,
      description: dictionary.bulletedListDesc,
      icon: BulletedListIcon,
      shortcut: "^ ⇧ 8",
    },
    {
      name: "ordered_list",
      title: dictionary.orderedList,
      description: dictionary.numberedListDesc,
      icon: OrderedListIcon,
      shortcut: "^ ⇧ 9",
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
      shortcut: `${mod} ]`,
    },
    {
      name: "code_block",
      title: dictionary.codeBlock,
      description: dictionary.codeDesc,
      icon: CodeIcon,
      shortcut: "^ ⇧ \\",
      keywords: "script",
    },
    {
      name: "hr",
      title: dictionary.hr,
      description: dictionary.dividerDesc,
      icon: HorizontalRuleIcon,
      shortcut: `${mod} _`,
      keywords: "horizontal rule break line",
    },
    {
      name: "image",
      title: dictionary.image,
      description: dictionary.imageDesc,
      icon: ImageIcon,
      keywords: "picture photo",
    },
    {
      name: "link",
      title: dictionary.link,
      description: dictionary.linkDesc,
      icon: LinkIcon,
      shortcut: `${mod} k`,
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
}
