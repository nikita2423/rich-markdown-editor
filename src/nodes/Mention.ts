import { wrappingInputRule, InputRule } from "prosemirror-inputrules";
import markInputRule from "../lib/markInputRule";
import Node from "./Node";

const MENTION_INPUT_REGEX = /^\@\[(.+)]\((\S+)\)/;

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
        name: "",
        email: "",
      },

      selectable: false,
      draggable: false,
      parseDOM: [
        {
          // match tag with following CSS Selector
          tag: "span[data-mention-id][data-mention-name][data-mention-email]",
          //tag: "span[type=mention]",

          getAttrs: (dom) => {
            const id = dom.getAttribute("data-mention-id");
            const name = dom.getAttribute("data-mention-name");
            const email = dom.getAttribute("data-mention-email");
            return {
              id: id,
              name: name,
              email: email,
            };
          },
        },
      ],
      toDOM: (node) => {
        // console.log("Mention Node to dom", node);
        return [
          "span",
          {
            "data-mention-id": node.attrs.id,
            "data-mention-name": node.attrs.name,
            "data-mention-email": node.attrs.email,
            class: "prosemirror-mention-node",
          },
          "@" + node.attrs.name || node.attrs.email,
        ];
      },
    };
  }

  // commands({ type }) {
  //   return () => (state, dispatch) => {
  //     dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView());
  //     return true;
  //   };
  // }

  // keys({ type }) {
  //   return {
  //     "Mod-_": (state, dispatch) => {
  //       dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView());
  //       return true;
  //     },
  //   };
  // }

  inputRules({ type }) {
    console.log("Input rules", type);
    return [wrappingInputRule(MENTION_INPUT_REGEX, type)];
  }

  // inputRules({ type }) {
  //   return [
  //     new InputRule(MENTION_INPUT_REGEX, (state, match, start, end) => {
  //       const [okay, alt, href] = match;
  //       const { tr } = state;

  //       if (okay) {
  //         tr.replaceWith(start, end, this.editor.schema.text(alt)).addMark(
  //           start,
  //           start + alt.length,
  //           type.create({ href })
  //         );
  //       }

  //       return tr;
  //     }),
  //   ];
  // }

  toMarkdown(state, node) {
    // console.log("To amrkdown getting called");
    const label = state.esc(node.attrs.name || "");
    const uri = state.esc(`mention://${node.attrs.email}/${node.attrs.id}`);
    const markdown = "@(" + label + ")(" + uri + ")";
    // const markdown = "@" + node.attrs.name;
    state.write(`@[${label}](${uri})`);
    // state.write(markdown);
    // state.closeBlock(node);
    // state.text(node.text);
    // state.closeBlock(node);.
    // state.write("\n:::" + (node.attrs.style || "info") + "\n");
    // state.renderContent(node);
    // state.ensureNewLine();
    // state.write(":::");
    // state.closeBlock(node);
    // state.write(node.attrs.markup || "\n---");
    // state.closeBlock(node);
  }

  parseMarkdown() {
    return {
      node: "mention",
      getAttrs: ({ mention: { name, id, email } }) => ({
        name,
        id,
        email,
      }),
    };
  }
}
