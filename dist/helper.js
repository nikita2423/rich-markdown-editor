"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function markdownSerializer() {
    return (state, node) => {
        const label = state.esc(node.attrs.label || "");
        const uri = state.esc(`mention://${node.attrs.type}/${node.attrs.id}`);
        state.write(`@[${label}](${uri})`);
    };
}
exports.markdownSerializer = markdownSerializer;
function markdownParser() {
    return {
        node: "mention",
        getAttrs: ({ mention: { type, id, label } }) => ({ type, id, label }),
    };
}
exports.markdownParser = markdownParser;
//# sourceMappingURL=helper.js.map