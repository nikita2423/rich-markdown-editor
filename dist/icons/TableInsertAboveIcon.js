"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const TableInsertAboveIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), fill: fill, width: "24px", height: "24px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M13.125,16.75 L13.125,19.5 C13.125,20.0522847 12.6772847,20.5 12.125,20.5 L11.875,20.5 C11.3227153,20.5 10.875,20.0522847 10.875,19.5 L10.875,16.75 L8.5,16.75 C7.94771525,16.75 7.5,16.3022847 7.5,15.75 L7.5,15.25 C7.5,14.6977153 7.94771525,14.25 8.5,14.25 L10.875,14.25 L10.875,11.5 C10.875,10.9477153 11.3227153,10.5 11.875,10.5 L12.125,10.5 C12.6772847,10.5 13.125,10.9477153 13.125,11.5 L13.125,14.25 L15.5,14.25 C16.0522847,14.25 16.5,14.6977153 16.5,15.25 L16.5,15.75 C16.5,16.3022847 16.0522847,16.75 15.5,16.75 L13.125,16.75 Z M7.38994949,10.6094757 C6.84321549,11.1301748 5.95678451,11.1301748 5.41005051,10.6094757 C4.8633165,10.0887767 4.8633165,9.24455668 5.41005051,8.72385763 L11.0100505,3.39052429 C11.5567845,2.86982524 12.4432155,2.86982524 12.9899495,3.39052429 L18.5899495,8.72385763 C19.1366835,9.24455668 19.1366835,10.0887767 18.5899495,10.6094757 C18.0432155,11.1301748 17.1567845,11.1301748 16.6100505,10.6094757 L12,6.21895142 L7.38994949,10.6094757 Z" })));
};
TableInsertAboveIcon.defaultProps = {
    fill: "#ccc",
    size: "big",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
TableInsertAboveIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = TableInsertAboveIcon;
//# sourceMappingURL=TableInsertAboveIcon.js.map