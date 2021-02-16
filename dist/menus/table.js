"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlusIcon_1 = __importDefault(require("../icons/PlusIcon"));
function tableMenuItems(dictionary) {
    return [
        {
            name: "deleteTable",
            tooltip: dictionary.deleteTable,
            icon: PlusIcon_1.default,
            active: () => false,
        },
    ];
}
exports.default = tableMenuItems;
//# sourceMappingURL=table.js.map