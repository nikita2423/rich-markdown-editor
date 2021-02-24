"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const HighlighterIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "14.2", height: "18", viewBox: "0 0 14.2 18" },
        react_1.default.createElement("g", { id: "highlighter", transform: "translate(-15 -5)" },
            react_1.default.createElement("path", { id: "Path_3517", "data-name": "Path 3517", d: "M643.826,2366.25h-.374v-1.875a.374.374,0,0,0-.374-.375H631.868a.374.374,0,0,0-.374.375v1.875h-.374a1.124,1.124,0,0,0-1.121,1.125v3a1.124,1.124,0,0,0,1.121,1.125H637.1a.374.374,0,0,1,.374.375v1.887c-.7.152-1.495.7-1.495,1.455v5.625c0,.706,1.06,1.158,1.614,1.158h.747a1.375,1.375,0,0,0,1.376-1.158v-5.625c0-.76-.8-1.3-1.495-1.455v-1.887a1.124,1.124,0,0,0-1.121-1.125h-5.979a.375.375,0,0,1-.374-.375v-3a.374.374,0,0,1,.374-.375h.374v1.875a.375.375,0,0,0,.374.375h11.211a.375.375,0,0,0,.374-.375V2367h.374a.375.375,0,0,0,0-.75", transform: "translate(-615 -2359)", fillRule: "evenodd", fill: fill }))));
};
HighlighterIcon.defaultProps = {
    fill: "#ccc",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
HighlighterIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = HighlighterIcon;
//# sourceMappingURL=HighlighterIcon.js.map