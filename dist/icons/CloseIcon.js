"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const Close = ({ fill, size }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { style: Object.assign({}, sizeStyle), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 8" },
        react_1.default.createElement("path", { fill: fill, d: "M13,5.806,12.194,5,9,8.194,5.806,5,5,5.806,8.194,9,5,12.194,5.806,13,9,9.806,12.194,13,13,12.194,9.806,9Z", transform: "translate(-5 -5)" })));
};
Close.defaultProps = {
    fill: "#ccc",
    size: "tiny",
};
Close.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
};
exports.default = Close;
//# sourceMappingURL=CloseIcon.js.map