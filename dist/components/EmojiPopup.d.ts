import * as React from "react";
import { EditorView } from "prosemirror-view";
import { EmbedDescriptor } from "../types";
import baseDictionary from "../dictionary";
declare type Props = {
    isActive: boolean;
    commands: Record<string, any>;
    dictionary: typeof baseDictionary;
    view: EditorView;
    onClose: () => void;
};
declare type State = {
    insertItem?: EmbedDescriptor;
    left?: number;
    top?: number;
    bottom?: number;
    isAbove: boolean;
    selectedIndex: number;
};
declare class EmojiPopup extends React.Component<Props, State> {
    menuRef: React.RefObject<HTMLDivElement>;
    state: State;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    componentDidUpdate(prevProps: any): void;
    close: () => void;
    clearSearch(): void;
    insertItem: (item: any, emojiCode: any) => void;
    get caretPosition(): {
        top: number;
        left: number;
    };
    calculatePosition(props: any): {
        left: number;
        top: undefined;
        bottom: number;
        isAbove: boolean;
    } | {
        left: number;
        top: any;
        bottom: undefined;
        isAbove: boolean;
    };
    render(): JSX.Element;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {
    active: boolean;
    top?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined;
    isAbove: boolean;
}, never>;
export default EmojiPopup;
//# sourceMappingURL=EmojiPopup.d.ts.map