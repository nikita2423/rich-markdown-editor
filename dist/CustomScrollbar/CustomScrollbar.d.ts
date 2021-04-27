export default CustomScrollbar;
declare class CustomScrollbar extends React.PureComponent<any, any, any> {
    static propTypes: {
        id: PropTypes.Requireable<string>;
        onScroll: PropTypes.Requireable<(...args: any[]) => any>;
        style: PropTypes.Requireable<object>;
        hideTracksWhenNotNeeded: PropTypes.Requireable<boolean>;
        scrollToIndexData: PropTypes.Requireable<(...args: any[]) => any>;
        setScrollRef: PropTypes.Requireable<(...args: any[]) => any>;
        autoHeight: PropTypes.Requireable<number>;
        autoHeightMax: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        id: string;
        onScroll: () => void;
        style: {};
        hideTracksWhenNotNeeded: boolean;
        scrollToIndexData: () => void;
        setScrollRef: () => void;
        autoHeight: null;
        autoHeightMax: null;
        className: string;
        children: null;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=CustomScrollbar.d.ts.map