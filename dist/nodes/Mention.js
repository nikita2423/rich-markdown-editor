"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_inputrules_1 = require("prosemirror-inputrules");
const Node_1 = __importDefault(require("./Node"));
const MENTION_INPUT_REGEX = /^\@\[(.+)]\((\S+)\)/;
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
        console.log("Input rules", type);
        return [prosemirror_inputrules_1.wrappingInputRule(MENTION_INPUT_REGEX, type)];
    }
    toMarkdown(state, node) {
        const label = state.esc(node.attrs.name || "");
        const uri = state.esc(`mention://${node.attrs.email}/${node.attrs.id}`);
        const markdown = "@(" + label + ")(" + uri + ")";
        state.write(`@[${label}](${uri})`);
    }
    parseMarkdown() {
        return {
            node: "mention",
            getAttrs: ({ mention: { name, id, email } }) => ({
                name,
                id,
                email,
            }),
        };
    }
}
exports.default = Mention;
//# sourceMappingURL=Mention.js.map