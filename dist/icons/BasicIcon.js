"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("./utils");
const BasicIcon = ({ fill, size, style, className, onClick, id, }) => {
    const sizeStyle = utils_1.getSizeDimension(size);
    return (react_1.default.createElement("svg", { id: id, onClick: onClick, className: className, style: Object.assign(Object.assign({}, sizeStyle), style), width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M3.75233 17.4534C3.67397 17.4481 3.59749 17.4267 3.52758 17.3904C3.45766 17.3541 3.39577 17.3037 3.34571 17.2423C3.29564 17.1809 3.25845 17.1098 3.23641 17.0333C3.21437 16.9568 3.20795 16.8765 3.21754 16.7974L3.91945 11.2663L0.153609 7.20566C0.0838336 7.12915 0.0354378 7.03513 0.013418 6.93329C-0.00860184 6.83145 -0.0034475 6.72548 0.0283486 6.62633C0.0601447 6.52719 0.11743 6.43846 0.194291 6.3693C0.271152 6.30015 0.364802 6.25307 0.465573 6.23293L5.85808 5.20362L8.48749 0.305977C8.53707 0.213402 8.61032 0.136116 8.69954 0.0822646C8.78876 0.0284134 8.89063 0 8.99443 0C9.09823 0 9.2001 0.0284134 9.28932 0.0822646C9.37853 0.136116 9.45179 0.213402 9.50137 0.305977L12.1308 5.20362L17.5344 6.23293C17.6352 6.25307 17.7288 6.30015 17.8057 6.3693C17.8826 6.43846 17.9399 6.52719 17.9717 6.62633C18.0034 6.72548 18.0086 6.83145 17.9866 6.93329C17.9646 7.03513 17.9162 7.12915 17.8464 7.20566L14.0805 11.2663L14.7825 16.7974C14.7953 16.902 14.7801 17.0082 14.7385 17.1047C14.6968 17.2013 14.6303 17.2847 14.5459 17.346C14.4614 17.4074 14.3623 17.4445 14.2588 17.4535C14.1553 17.4624 14.0514 17.4428 13.958 17.3968L9 14.9989L4.03087 17.3968C3.94412 17.4389 3.84837 17.4584 3.75233 17.4534ZM4.49881 15.8699L8.75489 13.8339C8.83159 13.7974 8.91527 13.7784 9 13.7784C9.08473 13.7784 9.16841 13.7974 9.24511 13.8339L13.5012 15.8699L12.8995 11.1419C12.8876 11.0541 12.8955 10.9647 12.9225 10.8805C12.9495 10.7963 12.995 10.7193 13.0555 10.6555L16.2866 7.18304L11.6517 6.30079C11.5675 6.28503 11.4879 6.25048 11.4185 6.19961C11.3491 6.14875 11.2918 6.08284 11.2506 6.0067L8.98886 1.81034L6.73826 6.0067C6.69707 6.08284 6.63971 6.14875 6.57034 6.19961C6.50097 6.25048 6.42132 6.28503 6.33717 6.30079L1.71342 7.18304L4.94448 10.6555C5.00501 10.7193 5.0505 10.7963 5.07752 10.8805C5.10454 10.9647 5.11238 11.0541 5.10046 11.1419L4.49881 15.8699Z", fill: "black" })));
};
BasicIcon.defaultProps = {
    fill: "#ff1744",
    size: "tiny",
    style: {},
    className: null,
    circleClassName: "",
    onClick: () => { },
    id: "",
};
BasicIcon.propTypes = {
    fill: prop_types_1.default.string,
    size: prop_types_1.default.string,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    circleClassName: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    id: prop_types_1.default.string,
};
exports.default = BasicIcon;
//# sourceMappingURL=BasicIcon.js.map