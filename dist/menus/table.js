"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrashIcon_1 = __importDefault(require("../icons/TrashIcon"));
function tableMenuItems(dictionary) {
    return [
        {
            name: "deleteTable",
            tooltip: dictionary.deleteTable,
            icon: TrashIcon_1.default,
            active: () => false,
        },
    ];
}
exports.default = tableMenuItems;
//# sourceMappingURL=table.js.map