"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const OrderedIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), width: "21", height: "14", viewBox: "0 0 21 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M21 10H7V13.5H21V10Z", fill: "black" }),
        react_1.default.createElement("path", { d: "M21 1H7V4.5H21V1Z", fill: "black" }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.83558 1.42373L0.687332 2.48305L0 1.65254L1.86792 0H3V6H1.83558V1.42373Z", fill: "black" }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 12.675L2.22672 10.6167C2.34008 10.5111 2.45344 10.3917 2.5668 10.2583C2.68016 10.125 2.73684 9.96945 2.73684 9.79167C2.73684 9.59167 2.66667 9.43472 2.52632 9.32083C2.38596 9.20694 2.22132 9.15 2.03239 9.15C1.80567 9.15 1.62888 9.22222 1.50202 9.36667C1.37517 9.51111 1.30364 9.68889 1.28745 9.9L0.0728745 9.80833C0.0890689 9.50278 0.151147 9.2375 0.259109 9.0125C0.367072 8.7875 0.510121 8.6 0.688259 8.45C0.866398 8.3 1.07557 8.1875 1.31579 8.1125C1.55601 8.0375 1.81646 8 2.09717 8C2.35628 8 2.59919 8.0375 2.82591 8.1125C3.05263 8.1875 3.24966 8.29861 3.417 8.44583C3.58435 8.59306 3.71525 8.77778 3.80972 9C3.90418 9.22222 3.95142 9.48055 3.95142 9.775C3.95142 9.96389 3.93252 10.1347 3.89474 10.2875C3.85695 10.4403 3.80432 10.5792 3.73684 10.7042C3.66937 10.8292 3.58974 10.9444 3.49798 11.05C3.40621 11.1556 3.30634 11.2583 3.19838 11.3583L1.45749 12.9H4V14H0V12.675Z", fill: "black" })));
};
OrderedIcon.defaultProps = {
    fill: "#ff1744",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
OrderedIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = OrderedIcon;
//# sourceMappingURL=OrderedIcon.js.map