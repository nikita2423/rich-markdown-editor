"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrashIcon_1 = __importDefault(require("../icons/TrashIcon"));
const DownloadIcon_1 = __importDefault(require("../icons/DownloadIcon"));
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
            name: "downloadImage",
            tooltip: dictionary.downloadImage,
            icon: DownloadIcon_1.default,
            visible: !!fetch,
            active: () => false,
        },
        {
            name: "deleteImage",
            tooltip: dictionary.deleteImage,
            icon: TrashIcon_1.default,
            visible: true,
            active: () => false,
        },
    ];
}
exports.default = imageMenuItems;
//# sourceMappingURL=image.js.map