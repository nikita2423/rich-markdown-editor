"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const TableInsertRightIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), fill: fill, width: "24px", height: "24px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7.375,13.25 L5,13.25 C4.44771525,13.25 4,12.8022847 4,12.25 L4,11.75 C4,11.1977153 4.44771525,10.75 5,10.75 L7.375,10.75 L7.375,8 C7.375,7.44771525 7.82271525,7 8.375,7 L8.625,7 C9.17728475,7 9.625,7.44771525 9.625,8 L9.625,10.75 L12,10.75 C12.5522847,10.75 13,11.1977153 13,11.75 L13,12.25 C13,12.8022847 12.5522847,13.25 12,13.25 L9.625,13.25 L9.625,16 C9.625,16.5522847 9.17728475,17 8.625,17 L8.375,17 C7.82271525,17 7.375,16.5522847 7.375,16 L7.375,13.25 Z M13.3417088,8.04852814 C12.8860971,7.57989899 12.8860971,6.82010101 13.3417088,6.35147186 C13.7973204,5.88284271 14.5360129,5.88284271 14.9916246,6.35147186 L19.6582912,11.1514719 C20.1139029,11.620101 20.1139029,12.379899 19.6582912,12.8485281 L14.9916246,17.6485281 C14.5360129,18.1171573 13.7973204,18.1171573 13.3417088,17.6485281 C12.8860971,17.179899 12.8860971,16.420101 13.3417088,15.9514719 L17.1834175,12 L13.3417088,8.04852814 Z" })));
};
TableInsertRightIcon.defaultProps = {
    fill: "#ccc",
    size: "big",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
TableInsertRightIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = TableInsertRightIcon;
//# sourceMappingURL=TableInsertRightIcon.js.map