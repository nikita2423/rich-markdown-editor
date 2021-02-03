export function markdownSerializer(): (state: any, node: any) => void;
export function markdownParser(): {
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
//# sourceMappingURL=helper.d.ts.map