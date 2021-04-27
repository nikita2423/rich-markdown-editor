"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importStar(require("react"));
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
class CustomScrollbar extends react_1.PureComponent {
    render() {
        const { id, onScroll, style, hideTracksWhenNotNeeded, scrollToIndexData, setScrollRef, autoHeight, autoHeightMax, className, children, } = this.props;
        return (react_1.default.createElement(react_custom_scrollbars_1.Scrollbars, { ref: (ref) => {
                setScrollRef ? setScrollRef(ref) : null;
            }, renderThumbVertical: (props) => (react_1.default.createElement("div", Object.assign({}, props, { className: className }))), renderThumbHorizontal: (props) => (react_1.default.createElement("div", Object.assign({}, props, { className: className }))), id: id, style: Object.assign({ width: "100%", height: "100%" }, style), universal: true, onScroll: onScroll, autoHide: true, autoHeight: autoHeight, autoHeightMax: autoHeightMax, autoHideTimeout: 1000, hideTracksWhenNotNeeded: hideTracksWhenNotNeeded, thumbMinSize: 50, autoHideDuration: 300 }, children));
    }
}
CustomScrollbar.propTypes = {
    id: prop_types_1.default.string,
    onScroll: prop_types_1.default.func,
    style: prop_types_1.default.object,
    hideTracksWhenNotNeeded: prop_types_1.default.bool,
    scrollToIndexData: prop_types_1.default.func,
    setScrollRef: prop_types_1.default.func,
    autoHeight: prop_types_1.default.number,
    autoHeightMax: prop_types_1.default.number,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
};
CustomScrollbar.defaultProps = {
    id: "",
    onScroll: () => { },
    style: {},
    hideTracksWhenNotNeeded: true,
    scrollToIndexData: () => { },
    setScrollRef: () => { },
    autoHeight: null,
    autoHeightMax: null,
    className: "react-thumb-vertical",
    children: null,
};
exports.default = CustomScrollbar;
//# sourceMappingURL=CustomScrollbar.js.map