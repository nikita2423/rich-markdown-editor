"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_model_1 = require("prosemirror-model");
const HTTP_LINK_REGEX = /\bhttps?:\/\/[\w_\/\.]+/g;
exports.MAX_CAPTION_LIMIT = 128;
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
exports.linkify = function (fragment) {
    const linkified = [];
    fragment.forEach(function (child) {
        if (child.isText) {
            const text = child.text;
            let pos = 0, match;
            while ((match = HTTP_LINK_REGEX.exec(text))) {
                const start = match.index;
                const end = start + match[0].length;
                const link = child.type.schema.marks["link"];
                if (start > 0) {
                    linkified.push(child.cut(pos, start));
                }
                const urlText = text.slice(start, end);
                linkified.push(child
                    .cut(start, end)
                    .mark(link.create({ href: urlText }).addToSet(child.marks)));
                pos = end;
            }
            if (pos < text.length) {
                linkified.push(child.cut(pos));
            }
        }
        else {
            linkified.push(child.copy(exports.linkify(child.content)));
        }
    });
    return prosemirror_model_1.Fragment.fromArray(linkified);
};
//# sourceMappingURL=helper.js.map