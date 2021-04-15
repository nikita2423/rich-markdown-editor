"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const DocImage = ({ fill, className, style, size, onClick, text }) => {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "300", height: "200", viewBox: "0 0 300 200", onClick: onClick, className: className, style: Object.assign({}, style) },
        react_1.default.createElement("g", { id: "Group_5084", "data-name": "Group 5084", transform: "translate(-781 -423)" },
            react_1.default.createElement("rect", { id: "Rectangle_1798", "data-name": "Rectangle 1798", width: "300", height: "200", rx: "5", transform: "translate(781 423)", fill: "#f3f3f3" }),
            react_1.default.createElement("g", { id: "Group_5082", "data-name": "Group 5082", transform: "translate(365)" },
                react_1.default.createElement("g", { id: "Group_5079", "data-name": "Group 5079", transform: "translate(-761 -123)" },
                    react_1.default.createElement("g", { id: "Group_5077", "data-name": "Group 5077" },
                        react_1.default.createElement("path", { id: "Path_926", "data-name": "Path 926", d: "M88.9,25.9,67.4,4.4a5.135,5.135,0,0,0-3.7-1.5H16.5a6.018,6.018,0,0,0-6,6v82a6.018,6.018,0,0,0,6,6h68a6.018,6.018,0,0,0,6-6v-61A5.76,5.76,0,0,0,88.9,25.9ZM50.5,83.3,39,71.8h5.9V53.2H56.2V71.8h5.9ZM77.4,44.7a2.112,2.112,0,0,1-2.1,2.1H25.8a2.112,2.112,0,0,1-2.1-2.1V31.2a2.112,2.112,0,0,1,2.1-2.1H75.3a2.112,2.112,0,0,1,2.1,2.1Z", transform: "translate(1277 596.1)", fill: "#bbb" }),
                        react_1.default.createElement("rect", { id: "Rectangle_1799", "data-name": "Rectangle 1799", width: "62", height: "60", transform: "translate(1296 623)", fill: "#bbb" }))),
                react_1.default.createElement("text", { id: "SVG", transform: "translate(549 519)", fill: "#fff", fontSize: "18", fontFamily: "Roboto-Bold, Roboto", fontWeight: "700" },
                    react_1.default.createElement("tspan", { x: "0", y: "0" }, text)),
                react_1.default.createElement("g", { id: "Group_5080", "data-name": "Group 5080", transform: "translate(-756 -123)" },
                    react_1.default.createElement("path", { id: "Path_928", "data-name": "Path 928", d: "M30.693,45.035a4.92,4.92,0,0,0,6.3,0l5.808-4.84a2.461,2.461,0,1,0-3.151-3.781L36.3,39.2V28.461a2.461,2.461,0,1,0-4.922,0V39.2l-3.347-2.789a2.461,2.461,0,1,0-3.15,3.781Z", transform: "translate(1287.834 630)", fill: "#fff", stroke: "#bbb", strokeWidth: "2" }))))));
};
DocImage.defaultProps = {
    fill: "#37352f",
    size: "mini",
    style: {},
    className: "",
    onClick: null,
    text: "",
};
DocImage.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    text: prop_types_1.default.string,
};
exports.default = DocImage;
//# sourceMappingURL=DocImage.js.map