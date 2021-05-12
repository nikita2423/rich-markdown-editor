import { EditorState } from "prosemirror-state";
import HorizontalRuleIcon from "../icons/DividerIcon";
import isNodeActive from "../queries/isNodeActive";
import { MenuItem } from "../types";
import baseDictionary from "../dictionary";

export default function dividerMenuItems(
  state: EditorState,
  dictionary: typeof baseDictionary
): MenuItem[] {
  const { schema } = state;

  return [
    {
      name: "hr",
      tooltip: dictionary.pageBreak,
      attrs: { markup: "***" },
      active: isNodeActive(schema.nodes.hr, { markup: "***" }),
      icon: HorizontalRuleIcon,
    },
    {
      name: "hr",
      tooltip: dictionary.hr,
      attrs: { markup: "---" },
      active: isNodeActive(schema.nodes.hr, { markup: "---" }),
      icon: HorizontalRuleIcon,
    },
  ];
}
