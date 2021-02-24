"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const CenterAlignIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "24.333", height: "18", viewBox: "0 0 24.333 18", fill: fill },
        react_1.default.createElement("g", { id: "left_aligned", transform: "translate(-17.04 -25.36)" },
            react_1.default.createElement("rect", { id: "Rectangle_17341", "data-name": "Rectangle 17341", width: "24.333", height: "2", rx: "1", transform: "translate(17.04 25.36)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17342", "data-name": "Rectangle 17342", width: "16.023", height: "2", rx: "1", transform: "translate(17.04 30.695)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17343", "data-name": "Rectangle 17343", width: "24.333", height: "2", rx: "1", transform: "translate(17.04 36.025)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17344", "data-name": "Rectangle 17344", width: "16.023", height: "2", rx: "1", transform: "translate(17.04 41.36)" }))));
};
CenterAlignIcon.defaultProps = {
    fill: "#ccc",
    size: "medium",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
CenterAlignIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = CenterAlignIcon;
//# sourceMappingURL=LeftAlignIcon.js.map