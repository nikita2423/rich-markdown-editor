"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Node_1 = __importDefault(require("./Node"));
const cache = {};
class Embed extends Node_1.default {
    get name() {
        return "embed";
    }
    get schema() {
        return {
            content: "inline*",
            group: "block",
            atom: true,
            attrs: {
                href: {},
                matches: {},
            },
            parseDOM: [
                {
                    tag: "iframe[class=embed]",
                    getAttrs: (dom) => {
                        const { embeds } = this.editor.props;
                        const href = dom.getAttribute("src") || "";
                        if (embeds) {
                            for (const embed of embeds) {
                                const matches = embed.matcher(href);
                                if (matches) {
                                    return {
                                        href,
                                        matches,
                                    };
                                }
                            }
                        }
                        return {};
                    },
                },
            ],
            toDOM: node => [
                "iframe",
                { class: "embed", src: node.attrs.href, contentEditable: false },
                0,
            ],
        };
    }
    component({ isEditable, isSelected, theme, node }) {
        const { embeds } = this.editor.props;
        let Component = cache[node.attrs.href];
        if (!Component) {
            for (const embed of embeds) {
                const matches = embed.matcher(node.attrs.href);
                if (matches) {
                    Component = cache[node.attrs.href] = embed.component;
                }
            }
        }
        if (!Component) {
            return null;
        }
        return (React.createElement(Component, { attrs: node.attrs, isEditable: isEditable, isSelected: isSelected, theme: theme }));
    }
    commands({ type }) {
        return attrs => (state, dispatch) => {
            dispatch(state.tr.replaceSelectionWith(type.create(attrs)).scrollIntoView());
            return true;
        };
    }
    toMarkdown(state, node) {
        state.ensureNewLine();
        state.write("[" + state.esc(node.attrs.href) + "](" + state.esc(node.attrs.href) + ")");
        state.write("\n\n");
    }
    parseMarkdown() {
        return {
            node: "embed",
            getAttrs: token => ({
                href: token.attrGet("href"),
                matches: token.attrGet("matches"),
            }),
        };
    }
}
exports.default = Embed;
//# sourceMappingURL=Embed.js.map