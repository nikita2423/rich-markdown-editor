import Node from "./Node";

export default class Text extends Node {
  get name() {
    return "text";
  }

  get schema() {
    return {
      group: "inline",
    };
  }

  toMarkdown(state, node) {
    // console.log("To text");
    state.text(node.text);
  }
}
