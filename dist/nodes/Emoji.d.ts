import Node from "./Node";
export default class Text extends Node {
    get name(): string;
    get schema(): {
        inline: boolean;
        group: string;
    };
    toMarkdown(state: any, node: any): void;
}
//# sourceMappingURL=Emoji.d.ts.map