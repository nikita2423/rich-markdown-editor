"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const TableInsertLeftIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), fill: fill, width: "24px", height: "24px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M16.625,10.75 L19,10.75 C19.5522847,10.75 20,11.1977153 20,11.75 L20,12.25 C20,12.8022847 19.5522847,13.25 19,13.25 L16.625,13.25 L16.625,16 C16.625,16.5522847 16.1772847,17 15.625,17 L15.375,17 C14.8227153,17 14.375,16.5522847 14.375,16 L14.375,13.25 L12,13.25 C11.4477153,13.25 11,12.8022847 11,12.25 L11,11.75 C11,11.1977153 11.4477153,10.75 12,10.75 L14.375,10.75 L14.375,8 C14.375,7.44771525 14.8227153,7 15.375,7 L15.625,7 C16.1772847,7 16.625,7.44771525 16.625,8 L16.625,10.75 Z M10.6582912,15.9514719 C11.1139029,16.420101 11.1139029,17.179899 10.6582912,17.6485281 C10.2026796,18.1171573 9.4639871,18.1171573 9.00837542,17.6485281 L4.34170876,12.8485281 C3.88609708,12.379899 3.88609708,11.620101 4.34170876,11.1514719 L9.00837542,6.35147186 C9.4639871,5.88284271 10.2026796,5.88284271 10.6582912,6.35147186 C11.1139029,6.82010101 11.1139029,7.57989899 10.6582912,8.04852814 L6.81658249,12 L10.6582912,15.9514719 Z" })));
};
TableInsertLeftIcon.defaultProps = {
    fill: "#ccc",
    size: "big",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
TableInsertLeftIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = TableInsertLeftIcon;
//# sourceMappingURL=TableInsertLeftIcon.js.map