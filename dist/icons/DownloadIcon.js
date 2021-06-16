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
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), xmlns: "http://www.w3.org/2000/svg", width: "16.193", height: "16.185", viewBox: "0 0 16.193 16.185" },
        react_1.default.createElement("g", { id: "noun_Download_2176275", transform: "translate(.002)" },
            react_1.default.createElement("path", { id: "Path_827", d: "M8.086 0a.578.578 0 0 0-.569.578v10.168L3.881 7.11a.578.578 0 1 0-.817.818l4.622 4.622.007.006.018.017.024.021.015.011.027.019.021.013.024.013.021.01.023.011.026.009.02.007.026.007.024.005H8.164l.039-.007.027.008.026-.007.038-.012.025-.009.034-.015.047-.023.035-.022.024-.017.038-.03.027-.024 4.622-4.622a.578.578 0 0 0-.4-.992h-.017a.577.577 0 0 0-.4.174l-3.656 3.647V.58A.578.578 0 0 0 8.095 0h-.009zM.584 15.029H.576a.578.578 0 1 0 0 1.156h15.037a.578.578 0 0 0 0-1.156H.584z", fill: fill, "data-name": "Path 827" }))));
};
DividerIcon.defaultProps = {
    fill: "#fff",
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
//# sourceMappingURL=DownloadIcon.js.map