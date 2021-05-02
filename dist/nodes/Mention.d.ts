import { InputRule } from "prosemirror-inputrules";
import Node from "./Node";
export default class Mention extends Node {
    get name(): string;
    get schema(): {
        group: string;
        inline: boolean;
        attrs: {
            id: string;
            type: string;
        };
        atom: boolean;
        selectable: boolean;
        draggable: boolean;
        parseDOM: {
            tag: string;
            getAttrs: (dom: any) => {
                id: any;
                type: any;
            };
        }[];
        toDOM: (node: any) => (string | {
            "data-id": any;
            "data-type": any;
            class: string;
        })[];
    };
    inputRules({ type }: {
        type: any;
    }): InputRule<any>[];
    toMarkdown(state: any, node: any): void;
    parseMarkdown(): {
        node: string;
        getAttrs: ({ mention: { type, id, name } }: {
            mention: {
                type: any;
                id: any;
                name: any;
            };
        }) => {
            id: any;
            type: any;
        };
    };
}
//# sourceMappingURL=Mention.d.ts.map