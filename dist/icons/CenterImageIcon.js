"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const CenterImageIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "24.69", height: "18", viewBox: "0 0 24.69 18", fill: fill },
        react_1.default.createElement("g", { id: "middle_image", transform: "translate(-6 -6)" },
            react_1.default.createElement("rect", { id: "Rectangle_17325", "data-name": "Rectangle 17325", width: "5", height: "1.543", rx: "0.771", transform: "translate(6 18.344)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17326", "data-name": "Rectangle 17326", width: "10", height: "10", rx: "1", transform: "translate(13.114 10)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17327", "data-name": "Rectangle 17327", width: "5", height: "1.543", rx: "0.771", transform: "translate(6 14.229)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17330", "data-name": "Rectangle 17330", width: "5", height: "1.543", rx: "0.771", transform: "translate(6 10.115)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17331", "data-name": "Rectangle 17331", width: "24.69", height: "1.543", rx: "0.771", transform: "translate(6 6)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17332", "data-name": "Rectangle 17332", width: "24.69", height: "1.543", rx: "0.771", transform: "translate(6 22.457)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17354", "data-name": "Rectangle 17354", width: "5", height: "1.543", rx: "0.771", transform: "translate(25.515 18.344)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17355", "data-name": "Rectangle 17355", width: "5", height: "1.543", rx: "0.771", transform: "translate(25.515 14.229)" }),
            react_1.default.createElement("rect", { id: "Rectangle_17356", "data-name": "Rectangle 17356", width: "5", height: "1.543", rx: "0.771", transform: "translate(25.515 10.115)" }))));
};
CenterImageIcon.defaultProps = {
    fill: "#ccc",
    size: "medium",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
CenterImageIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = CenterImageIcon;
//# sourceMappingURL=CenterImageIcon.js.map