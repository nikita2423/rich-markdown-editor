"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const ItalicIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "14.224", height: "18", viewBox: "0 0 14.224 18" },
        react_1.default.createElement("g", { id: "italic", transform: "translate(-13.65 -4)" },
            react_1.default.createElement("g", { id: "Group_9712", "data-name": "Group 9712", transform: "translate(13.65 4)" },
                react_1.default.createElement("path", { id: "Path_3514", "data-name": "Path 3514", d: "M27.874,5.174A1.175,1.175,0,0,1,26.7,6.348H25.16l-6.2,13.3h1.227a1.174,1.174,0,0,1,0,2.348H14.824a1.174,1.174,0,1,1,0-2.348h1.54l6.2-13.3H21.341a1.174,1.174,0,0,1,0-2.348H26.7A1.175,1.175,0,0,1,27.874,5.174Z", transform: "translate(-13.65 -4)", fill: fill })))));
};
ItalicIcon.defaultProps = {
    fill: "#ccc",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
ItalicIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = ItalicIcon;
//# sourceMappingURL=ItalicIcon.js.map