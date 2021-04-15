"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const BoldIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "13.488", height: "18", viewBox: "0 0 13.488 18" },
        react_1.default.createElement("g", { id: "bold", transform: "translate(-29 -22)" },
            react_1.default.createElement("path", { id: "Path_3513", "data-name": "Path 3513", d: "M39.546,30.209A5.143,5.143,0,0,0,35.429,22H29V40h8.357a5.143,5.143,0,0,0,2.189-9.791Zm-7.975-5.638h3.857a2.571,2.571,0,1,1,0,5.143H31.571Zm5.786,12.857H31.571V32.286h5.786a2.571,2.571,0,1,1,0,5.143Z", transform: "translate(0 0)", fill: fill }))));
};
BoldIcon.defaultProps = {
    fill: "#ccc",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
BoldIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = BoldIcon;
//# sourceMappingURL=BoldIcon.js.map