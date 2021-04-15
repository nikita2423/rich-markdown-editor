"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const TrashIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "18.119", height: "19.5", viewBox: "0 0 18.119 19.5" },
        react_1.default.createElement("g", { id: "delete", transform: "translate(0 0.75)" },
            react_1.default.createElement("path", { id: "Path_3508", "data-name": "Path 3508", d: "M256.813,364.1v11.183a1.212,1.212,0,0,1-1.208,1.208h-9.9a1.212,1.212,0,0,1-1.208-1.208V364.1", transform: "translate(-241.573 -358.49)", fill: "none", stroke: fill, strokeMiterlimit: "10", strokeMidth: "1.5" }),
            react_1.default.createElement("path", { id: "Path_3509", "data-name": "Path 3509", d: "M135.119,248H117", transform: "translate(-117 -245.061)", fill: "none", stroke: fill, strokeMiterlimit: "10", strokeWidth: "1.5" }),
            react_1.default.createElement("path", { id: "Path_3510", "data-name": "Path 3510", d: "M355,122.939v-2.261a.74.74,0,0,1,.744-.677h5.788a.642.642,0,0,1,.631.677v2.261", transform: "translate(-349.533 -120)", fill: "none", stroke: fill, strokeMiterlimit: "10", strokeWidth: "1.5" }),
            react_1.default.createElement("path", { id: "Path_3511", "data-name": "Path 3511", d: "M424.6,364.1v9.445", transform: "translate(-417.536 -358.492)", fill: "none", stroke: fill, strokeMiterlimit: "10", strokeWidth: "1.5" }),
            react_1.default.createElement("path", { id: "Path_3512", "data-name": "Path 3512", d: "M600.5,364.1v9.445", transform: "translate(-589.396 -358.492)", fill: "none", stroke: fill, strokeMiterlimit: "10", strokeWidth: "1.5" }))));
};
TrashIcon.defaultProps = {
    fill: "#ccc",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
TrashIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = TrashIcon;
//# sourceMappingURL=TrashIcon.js.map