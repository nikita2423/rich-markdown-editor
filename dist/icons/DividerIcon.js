"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const DividerIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), width: "17", height: "18", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M16.7316 1.18321C16.3558 0.80742 15.7653 0.80742 15.3895 1.18321L0.268421 16.2864C-0.0894737 16.6443 -0.0894737 17.2527 0.268421 17.6106C0.447368 17.7895 0.697895 17.879 0.930526 17.879C1.18105 17.879 1.41368 17.7895 1.59263 17.6106L16.7316 2.50742C17.0895 2.14953 17.0895 1.5411 16.7316 1.18321Z", fill: "black" })));
};
DividerIcon.defaultProps = {
    fill: "#ff1744",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
DividerIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = DividerIcon;
//# sourceMappingURL=DividerIcon.js.map