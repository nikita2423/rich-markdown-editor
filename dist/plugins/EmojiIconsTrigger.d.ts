import { InputRule } from "prosemirror-inputrules";
import { Plugin } from "prosemirror-state";
import Extension from "../lib/Extension";
export default class EmojiIcons extends Extension {
    get name(): string;
    get plugins(): Plugin<any, any>[];
    inputRules(): InputRule<any>[];
}
//# sourceMappingURL=EmojiIconsTrigger.d.ts.map