"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const NewTabIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "18.227", height: "18.201", viewBox: "0 0 18.227 18.201", fill: fill },
        react_1.default.createElement("g", { id: "new_tab", transform: "translate(-15.7 -15.7)" },
            react_1.default.createElement("path", { id: "Path_3515", "data-name": "Path 3515", d: "M19.226,38.44h9.488a3.419,3.419,0,0,0,3.426-3.426v-5.8a.777.777,0,0,0-.791-.791h0a.777.777,0,0,0-.791.791v5.8a1.834,1.834,0,0,1-1.845,1.845H19.226a1.834,1.834,0,0,1-1.845-1.845V25.526a1.834,1.834,0,0,1,1.845-1.845h5.8a.791.791,0,0,0,0-1.581h-5.8A3.419,3.419,0,0,0,15.8,25.526h0v9.488A3.419,3.419,0,0,0,19.226,38.44Z", transform: "translate(0 -4.64)", stroke: fill, strokeWidth: "0.2" }),
            react_1.default.createElement("path", { id: "Path_3516", "data-name": "Path 3516", d: "M55.7,21.44V16.617a.334.334,0,0,0-.026-.158c0-.026,0-.053-.026-.053,0-.026-.026-.053-.026-.079s-.026-.053-.053-.079a.092.092,0,0,0-.026-.053.8.8,0,0,0-.211-.211l-.053-.026a.191.191,0,0,0-.158-.105l-.079-.026c-.053,0-.105-.026-.158-.026H50.059a.791.791,0,1,0,0,1.581h2.925l-7.248,7.274a.783.783,0,1,0,1.107,1.107l7.274-7.248V21.44a.777.777,0,0,0,.791.791h0A.83.83,0,0,0,55.7,21.44Z", transform: "translate(-21.872)", stroke: fill, strokeWidth: "0.2" }))));
};
NewTabIcon.defaultProps = {
    fill: "#ccc",
    size: "medium",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
NewTabIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = NewTabIcon;
//# sourceMappingURL=NewTabIcon.js.map