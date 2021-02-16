"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlusIcon_1 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_2 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_3 = __importDefault(require("../icons/PlusIcon"));
function tableRowMenuItems(state, index, dictionary) {
    return [
        {
            name: "addRowAfter",
            tooltip: dictionary.addRowBefore,
            icon: PlusIcon_2.default,
            attrs: { index: index - 1 },
            active: () => false,
            visible: index !== 0,
        },
        {
            name: "addRowAfter",
            tooltip: dictionary.addRowAfter,
            icon: PlusIcon_3.default,
            attrs: { index },
            active: () => false,
        },
        {
            name: "separator",
        },
        {
            name: "deleteRow",
            tooltip: dictionary.deleteRow,
            icon: PlusIcon_1.default,
            active: () => false,
        },
    ];
}
exports.default = tableRowMenuItems;
//# sourceMappingURL=tableRow.js.map