"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlusIcon_1 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_2 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_3 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_4 = __importDefault(require("../icons/PlusIcon"));
const isNodeActive_1 = __importDefault(require("../queries/isNodeActive"));
function imageMenuItems(state, dictionary) {
    const { schema } = state;
    const isLeftAligned = isNodeActive_1.default(schema.nodes.image, {
        layoutClass: "left-50",
    });
    const isRightAligned = isNodeActive_1.default(schema.nodes.image, {
        layoutClass: "right-50",
    });
    return [
        {
            name: "alignLeft",
            tooltip: dictionary.alignLeft,
            icon: PlusIcon_2.default,
            visible: true,
            active: isLeftAligned,
        },
        {
            name: "alignCenter",
            tooltip: dictionary.alignCenter,
            icon: PlusIcon_4.default,
            visible: true,
            active: (state) => isNodeActive_1.default(schema.nodes.image)(state) &&
                !isLeftAligned(state) &&
                !isRightAligned(state),
        },
        {
            name: "alignRight",
            tooltip: dictionary.alignRight,
            icon: PlusIcon_3.default,
            visible: true,
            active: isRightAligned,
        },
        {
            name: "separator",
            visible: true,
        },
        {
            name: "deleteImage",
            tooltip: dictionary.deleteImage,
            icon: PlusIcon_1.default,
            visible: true,
            active: () => false,
        },
    ];
}
exports.default = imageMenuItems;
//# sourceMappingURL=image.js.map