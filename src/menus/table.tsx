// import { TrashIcon } from "outline-icons";
import TrashIcon from "../icons/PlusIcon";

import { MenuItem } from "../types";
import baseDictionary from "../dictionary";

export default function tableMenuItems(
  dictionary: typeof baseDictionary
): MenuItem[] {
  return [
    {
      name: "deleteTable",
      tooltip: dictionary.deleteTable,
      icon: TrashIcon,
      active: () => false,
    },
  ];
}
