"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const H2Icon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), width: "21", height: "13", viewBox: "0 0 21 13", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M3.08594 1.75781V5.03906H8.09375V1.75781C8.09375 1.28906 8.19792 0.9375 8.40625 0.703125C8.61979 0.46875 8.89844 0.351562 9.24219 0.351562C9.59115 0.351562 9.8724 0.46875 10.0859 0.703125C10.3047 0.932292 10.4141 1.28385 10.4141 1.75781V10.7812C10.4141 11.2552 10.3047 11.6094 10.0859 11.8438C9.86719 12.0781 9.58594 12.1953 9.24219 12.1953C8.89323 12.1953 8.61458 12.0781 8.40625 11.8438C8.19792 11.6042 8.09375 11.25 8.09375 10.7812V6.92969H3.08594V10.7812C3.08594 11.2552 2.97656 11.6094 2.75781 11.8438C2.53906 12.0781 2.25781 12.1953 1.91406 12.1953C1.5651 12.1953 1.28646 12.0781 1.07812 11.8438C0.869792 11.6042 0.765625 11.25 0.765625 10.7812V1.75781C0.765625 1.28906 0.867188 0.9375 1.07031 0.703125C1.27865 0.46875 1.5599 0.351562 1.91406 0.351562C2.26302 0.351562 2.54427 0.46875 2.75781 0.703125C2.97656 0.932292 3.08594 1.28385 3.08594 1.75781ZM15.2266 10.1562H19.3047C19.7109 10.1562 20.0208 10.2396 20.2344 10.4062C20.4479 10.5729 20.5547 10.7995 20.5547 11.0859C20.5547 11.3411 20.4688 11.5573 20.2969 11.7344C20.1302 11.9115 19.875 12 19.5312 12H13.7812C13.3906 12 13.0859 11.8932 12.8672 11.6797C12.6484 11.4609 12.5391 11.2057 12.5391 10.9141C12.5391 10.7266 12.6094 10.4792 12.75 10.1719C12.8906 9.85938 13.0443 9.61458 13.2109 9.4375C13.9036 8.71875 14.5286 8.10417 15.0859 7.59375C15.6432 7.07812 16.0417 6.73958 16.2812 6.57812C16.7083 6.27604 17.0625 5.97396 17.3438 5.67188C17.6302 5.36458 17.8464 5.05208 17.9922 4.73438C18.1432 4.41146 18.2188 4.09635 18.2188 3.78906C18.2188 3.45573 18.138 3.15885 17.9766 2.89844C17.8203 2.63281 17.6042 2.42708 17.3281 2.28125C17.0573 2.13542 16.7604 2.0625 16.4375 2.0625C15.7552 2.0625 15.2188 2.36198 14.8281 2.96094C14.776 3.03906 14.6875 3.2526 14.5625 3.60156C14.4427 3.95052 14.3047 4.21875 14.1484 4.40625C13.9974 4.59375 13.7734 4.6875 13.4766 4.6875C13.2161 4.6875 13 4.60156 12.8281 4.42969C12.6562 4.25781 12.5703 4.02344 12.5703 3.72656C12.5703 3.36719 12.651 2.99219 12.8125 2.60156C12.974 2.21094 13.2135 1.85677 13.5312 1.53906C13.8542 1.22135 14.2604 0.966146 14.75 0.773438C15.2448 0.575521 15.8229 0.476562 16.4844 0.476562C17.2812 0.476562 17.9609 0.601562 18.5234 0.851562C18.888 1.01823 19.2083 1.2474 19.4844 1.53906C19.7604 1.83073 19.974 2.16927 20.125 2.55469C20.2812 2.9349 20.3594 3.33073 20.3594 3.74219C20.3594 4.38802 20.1979 4.97656 19.875 5.50781C19.5573 6.03385 19.2318 6.44792 18.8984 6.75C18.5651 7.04688 18.0052 7.51562 17.2188 8.15625C16.4375 8.79688 15.901 9.29427 15.6094 9.64844C15.4844 9.78906 15.3568 9.95833 15.2266 10.1562Z", fill: fill })));
};
H2Icon.defaultProps = {
    fill: "#333B4F",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
H2Icon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = H2Icon;
//# sourceMappingURL=H2Icon.js.map