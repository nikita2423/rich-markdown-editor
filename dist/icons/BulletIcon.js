"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const BulletIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), width: "22", height: "14", viewBox: "0 0 22 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M22 10H8V13.5H22V10Z", fill: "black" }),
        react_1.default.createElement("path", { d: "M22 1H8V4.5H22V1Z", fill: "black" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "black" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "11.5", r: "2.5", fill: "black" })));
};
BulletIcon.defaultProps = {
    fill: "#ff1744",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
BulletIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = BulletIcon;
//# sourceMappingURL=BulletIcon.js.map