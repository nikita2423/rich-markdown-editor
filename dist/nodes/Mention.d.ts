import Node from "./Node";
export default class Mention extends Node {
    get name(): string;
    get schema(): {
        group: string;
        inline: boolean;
        attrs: {
            id: string;
            name: string;
            email: string;
        };
        content: string;
        selectable: boolean;
        draggable: boolean;
        parseDOM: {
            tag: string;
            getAttrs: (dom: any) => {
                id: any;
                name: any;
                email: any;
            };
        }[];
        toDOM: (node: any) => any[];
    };
    inputRules({ type }: {
        type: any;
    }): import("prosemirror-inputrules").InputRule<any>[];
    toMarkdown(state: any, node: any): void;
    parseMarkdown(): {
        node: string;
        getAttrs: ({ mention: { name, id, email } }: {
            mention: {
                name: any;
                id: any;
                email: any;
            };
        }) => {
            name: any;
            id: any;
            email: any;
        };
    };
}
//# sourceMappingURL=Mention.d.ts.map