import mentionPlugin from "markdown-it-flowdock";

export default function mention(md): void {
  return mentionPlugin(md, "mention", {
    marker: ":",
    validate: () => true,
  });
}
