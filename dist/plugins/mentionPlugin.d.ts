import { Plugin } from "prosemirror-state";
export declare function getRegexp(mentionTrigger: any, hashtagTrigger: any, allowSpace: any): {
    mention: RegExp;
    tag: RegExp;
};
export declare function getMatch($position: any, opts: any): {
    range: {
        from: any;
        to: any;
    };
    queryText: any;
    type: any;
} | undefined;
export declare const debounce: (func: any, timeout: any, context: any) => null;
export declare function getMentionsPlugin(opts: any): Plugin<any, any>;
//# sourceMappingURL=mentionPlugin.d.ts.map