"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrashIcon_1 = __importDefault(require("../icons/TrashIcon"));
const TableInsertAboveIcon_1 = __importDefault(require("../icons/TableInsertAboveIcon"));
const TableInsertBelowIcon_1 = __importDefault(require("../icons/TableInsertBelowIcon"));
function tableRowMenuItems(state, index, dictionary) {
    return [
        {
            name: "addRowAfter",
            tooltip: dictionary.addRowBefore,
            icon: TableInsertAboveIcon_1.default,
            attrs: { index: index - 1 },
            active: () => false,
            visible: index !== 0,
        },
        {
            name: "addRowAfter",
            tooltip: dictionary.addRowAfter,
            icon: TableInsertBelowIcon_1.default,
            attrs: { index },
            active: () => false,
        },
        {
            name: "separator",
        },
        {
            name: "deleteRow",
            tooltip: dictionary.deleteRow,
            icon: TrashIcon_1.default,
            active: () => false,
        },
    ];
}
exports.default = tableRowMenuItems;
//# sourceMappingURL=tableRow.js.map