"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_inputrules_1 = require("prosemirror-inputrules");
const prosemirror_state_1 = require("prosemirror-state");
const prosemirror_tables_1 = require("prosemirror-tables");
const Extension_1 = __importDefault(require("../lib/Extension"));
const MAX_MATCH = 500;
const OPEN_REGEX = /:(\w+)?$/;
const CLOSE_REGEX = /(^(?!:(\w+)?)(.*)[^:]$|^:((\w+)\s.*[^:]|\s|\s.*[^:])$)/;
function run(view, from, to, regex, handler) {
    if (view.composing) {
        return false;
    }
    const state = view.state;
    const $from = state.doc.resolve(from);
    if ($from.parent.type.spec.code) {
        return false;
    }
    const textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, "\ufffc");
    const match = regex.exec(textBefore);
    const tr = handler(state, match, match ? from - match[0].length : from, to);
    if (!tr)
        return false;
    return true;
}
class EmojiIcons extends Extension_1.default {
    get name() {
        return "emojiicons";
    }
    get plugins() {
        return [
            new prosemirror_state_1.Plugin({
                props: {
                    handleClick: () => {
                        this.options.onClose();
                        return false;
                    },
                    handleKeyDown: (view, event) => {
                        if (event.key === "Backspace") {
                            setTimeout(() => {
                                const { pos } = view.state.selection.$from;
                                return run(view, pos, pos, OPEN_REGEX, (state, match) => {
                                    if (match) {
                                        this.options.onOpen(match[1]);
                                    }
                                    else {
                                        this.options.onClose();
                                    }
                                    return null;
                                });
                            });
                        }
                        return false;
                    },
                },
            }),
        ];
    }
    inputRules() {
        return [
            new prosemirror_inputrules_1.InputRule(OPEN_REGEX, (state, match) => {
                if (match && !prosemirror_tables_1.isInTable(state)) {
                    this.options.onOpen(match[1]);
                }
                return null;
            }),
            new prosemirror_inputrules_1.InputRule(CLOSE_REGEX, (state, match) => {
                if (match) {
                    this.options.onClose();
                }
                return null;
            }),
        ];
    }
}
exports.default = EmojiIcons;
//# sourceMappingURL=EmojiIconsTrigger.js.map