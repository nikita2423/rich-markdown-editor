import Node from "./Node";

export default class Text extends Node {
  get name() {
    return "emoji";
  }

  get schema() {
    return {
      inline: true,
      group: "inline",
    };
  }

  toMarkdown(state, node) {
    state.text(node.text);
  }
}
