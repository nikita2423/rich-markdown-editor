export function markdownSerializer() {
  return (state, node) => {
    const label = state.esc(node.attrs.label || "");
    const uri = state.esc(`mention://${node.attrs.type}/${node.attrs.id}`);

    state.write(`@[${label}](${uri})`);
  };
}
export function markdownParser() {
  return {
    node: "mention",
    getAttrs: ({ mention: { type, id, label } }) => ({ type, id, label }),
  };
}
