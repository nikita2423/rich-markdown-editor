"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_inputrules_1 = require("prosemirror-inputrules");
const Node_1 = __importDefault(require("./Node"));
class Mention extends Node_1.default {
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
                    tag: "span[data-mention-id][data-mention-name][data-mention-email]",
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
    inputRules({ type }) {
        return [prosemirror_inputrules_1.wrappingInputRule(/^@$/, type)];
    }
    toMarkdown(state, node) {
        const label = state.esc(node.attrs.email || "");
        const uri = state.esc(`mention://${node.attrs.name}/${node.attrs.id}`);
        const markdown = "@" + node.attrs.name;
        state.write(markdown);
        state.closeBlock(node);
    }
    parseMarkdown() {
        return {
            node: "mention",
            getAttrs: ({ mention: { name, id, email } }) => ({ name, id, email }),
        };
    }
}
exports.default = Mention;
//# sourceMappingURL=Mention.js.map