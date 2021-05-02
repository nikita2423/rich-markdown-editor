import markdownit from "markdown-it";
import mentionPlugin from "markdown-it-flowdock";
import markdownitMentions from "@quartzy/markdown-it-mentions";
import markPlugin from "./mark";
import checkboxPlugin from "./checkboxes";
import embedsPlugin from "./embeds";
import breakPlugin from "./breaks";
import tablesPlugin from "./tables";
import noticesPlugin from "./notices";
import underlinesPlugin from "./underlines";
// import mentionPlugin from "./mention";

export default function rules({ embeds }) {
  return markdownit("default", {
    breaks: false,
    html: false,
  })
    .use(embedsPlugin(embeds))
    .use(breakPlugin)
    .use(checkboxPlugin)
    .use(markPlugin({ delim: "==", mark: "mark" }))
    .use(markPlugin({ delim: "!!", mark: "placeholder" }))
    .use(underlinesPlugin)
    .use(tablesPlugin)
    .use(markdownitMentions)
    .use(noticesPlugin);
}
