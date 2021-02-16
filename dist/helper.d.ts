import { Fragment } from "prosemirror-model";
export declare function markdownSerializer(): (state: any, node: any) => void;
export declare function markdownParser(): {
    node: string;
    getAttrs: ({ mention: { type, id, label } }: {
        mention: {
            type: any;
            id: any;
            label: any;
        };
    }) => {
        type: any;
        id: any;
        label: any;
    };
};
export declare const linkify: (fragment: Fragment<any>) => Fragment<any>;
//# sourceMappingURL=helper.d.ts.map