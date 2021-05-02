"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_inputrules_1 = require("prosemirror-inputrules");
const Node_1 = __importDefault(require("./Node"));
const MENTION_INPUT_REGEX = /^\@(.+)$/;
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
                type: "",
            },
            atom: true,
            selectable: false,
            draggable: false,
            parseDOM: [
                {
                    tag: "span[data-id][data-type]",
                    getAttrs: (dom) => {
                        console.log("Mention dom", dom);
                        const name = "";
                        const id = dom.getAttribute("data-id");
                        const email = dom.getAttribute("data-type");
                        return {
                            id: id,
                            type: email,
                        };
                    },
                },
            ],
            toDOM: (node) => {
                console.log("Mention Node to dom", node);
                return [
                    "span",
                    {
                        "data-id": node.attrs.id,
                        "data-type": node.attrs.type,
                        class: "mention",
                    },
                    "@" + node.attrs.type,
                ];
            },
        };
    }
    inputRules({ type }) {
        return [prosemirror_inputrules_1.wrappingInputRule(/^@$/, type)];
    }
    toMarkdown(state, node) {
        const label = state.esc(node.attrs.name || "");
        const uri = state.esc(`mention://${node.attrs.type}/${node.attrs.id}`);
        state.write(`@[${label}](${uri})`);
    }
    parseMarkdown() {
        return {
            node: "mention",
            getAttrs: ({ mention: { type, id, name } }) => ({
                id,
                type,
            }),
        };
    }
}
exports.default = Mention;
//# sourceMappingURL=Mention.js.map