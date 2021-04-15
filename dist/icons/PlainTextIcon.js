"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const PlainTextIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), width: "19", height: "25", viewBox: "0 0 19 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("g", { clipPath: "url(#clip0)" },
            react_1.default.createElement("path", { d: "M3.38522 13H7.0242L7.94821 17H10.0002L7.00021 4H3.4082L0.408203 17H2.46121L3.38522 13ZM5.4082 6L6.56223 11H3.84521L4.99921 6H5.4082Z", fill: "black" }),
            react_1.default.createElement("path", { d: "M18 9V10.38C17.267 9.541 16.201 9 15 9C12.791 9 11 10.791 11 13C11 15.209 12.791 17 15 17C16.201 17 17.267 16.459 18 15.62V17H19V9H18ZM15 15C13.896 15 13 14.104 13 13C13 11.896 13.896 11 15 11C16.103 11 17 11.896 17 13C17 14.104 16.103 15 15 15Z", fill: "black" })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "clip0" },
                react_1.default.createElement("rect", { width: "19", height: "25", fill: "white" })))));
};
PlainTextIcon.defaultProps = {
    fill: "#ff1744",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
PlainTextIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = PlainTextIcon;
//# sourceMappingURL=PlainTextIcon.js.map