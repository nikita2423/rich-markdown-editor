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
            console.log("Mention dom", dom);
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
        console.log("Mention Node to dom", node);
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
    return [wrappingInputRule(/^@$/, type)];
  }

  // inputRules({ type }) {
  //   return [
  //     new InputRule(MENTION_INPUT_REGEX, (state, match, start, end) => {
  //       const [okay, email] = match;
  //       console.log("State", state);
  //       console.log("Macth", match);
  //       const { tr } = state;
  //       console.log("I ma n", email, okay);
  //       console.log("Start", start);
  //       console.log("End", end);
  //       console.log("Type", type);
  //       if (okay) {
  //         console.log("Rep;ace wioth");
  //         tr.replaceWith(
  //           start - 1,
  //           end,
  //           type.create({
  //             email,
  //           })
  //         );
  //       }
  //       // if (okay) {
  //       //   tr.replaceWith(start, end, this.editor.schema.text(alt)).addMark(
  //       //     start,
  //       //     start + alt.length,
  //       //     type.create({ href })
  //       //   );
  //       // }

  //       return tr;
  //     }),
  //   ];
  // }

  toMarkdown(state, node) {
    // console.log("To amrkdown getting called");
    const label = state.esc(node.attrs.name || "");
    const uri = state.esc(`mention://${node.attrs.type}/${node.attrs.id}`);
    // const markdown = "@(" + label + ")(" + uri + ")";
    // const markdown = "@" + node.attrs.name;
    state.write(`@[${label}](${uri})`);
    //const markdown = "@(" + label + ")";
    // state.write(markdown);
    // state.renderContent(node);
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
      getAttrs: ({ mention: { type, id, name } }) => ({
        id,
        type,
        // name,
      }),
    };
  }
}
