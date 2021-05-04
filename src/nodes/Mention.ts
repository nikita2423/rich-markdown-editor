import {
  wrappingInputRule,
  InputRule,
  textblockTypeInputRule,
} from "prosemirror-inputrules";
import markInputRule from "../lib/markInputRule";
import Node from "./Node";

// const MENTION_INPUT_REGEX = /^\@\(.+\)$/;
const MENTION_INPUT_REGEX = /^\@(.+)$/;

export default class Mention extends Node {
  get name() {
    return "mention";
  }

  get schema() {
    return {
      group: "inline",
      inline: true,
      attrs: {
        id: "",
        type: "",
        // name: "",
        // email: "",
      },
      atom: true,

      selectable: false,
      draggable: false,
      parseDOM: [
        {
          // match tag with following CSS Selector
          tag: "span[data-id][data-type]",
          // tag: "span[type=mention]",
          // tag: "span[data-mention-email]",

          getAttrs: (dom) => {
            const name = "";
            const id = dom.getAttribute("data-id");
            // const name = dom.getAttribute("data-name");
            const email = dom.getAttribute("data-type");
            return {
              id: id,
              // name: name,
              type: email,
            };
          },
        },
      ],
      toDOM: (node) => {
        return [
          "span",
          {
            "data-id": node.attrs.id,
            // "data-name": node.attrs.name,
            "data-type": node.attrs.type,
            class: "mention",
          },
          "@" + node.attrs.type,
        ];
      },
    };
  }

  inputRules({ type }) {
    return [wrappingInputRule(/^@$/, type)];
  }

  toMarkdown(state, node) {
    const label = state.esc(node.attrs.name || "");
    const uri = state.esc(`mention://${node.attrs.type}/${node.attrs.id}`);
    state.write(`@[${label}](${uri})`);
  }

  parseMarkdown() {
    return {
      node: "mention",
      getAttrs: ({ mention: { type, id, name } }) => ({
        id,
        type,
        // name,
      }),
    };
  }
}
