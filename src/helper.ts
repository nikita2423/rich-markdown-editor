import { Fragment, Node } from "prosemirror-model";

const HTTP_LINK_REGEX = /\bhttps?:\/\/[\w_\/\.]+/g;
export const MAX_CAPTION_LIMIT = 128;
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

export const linkify = function(fragment: Fragment): Fragment {
  const linkified: Node[] = [];
  fragment.forEach(function(child: Node) {
    if (child.isText) {
      const text = child.text as string;
      let pos = 0,
        match;

      while ((match = HTTP_LINK_REGEX.exec(text))) {
        const start = match.index;
        const end = start + match[0].length;
        const link = child.type.schema.marks["link"];

        // simply copy across the text from before the match
        if (start > 0) {
          linkified.push(child.cut(pos, start));
        }

        const urlText = text.slice(start, end);
        linkified.push(
          child
            .cut(start, end)
            .mark(link.create({ href: urlText }).addToSet(child.marks))
        );
        pos = end;
      }

      // copy over whatever is left
      if (pos < text.length) {
        linkified.push(child.cut(pos));
      }
    } else {
      linkified.push(child.copy(linkify(child.content)));
    }
  });

  return Fragment.fromArray(linkified);
};
