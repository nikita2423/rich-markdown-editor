"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrashIcon_1 = __importDefault(require("../icons/TrashIcon"));
const LeftAlignIcon_1 = __importDefault(require("../icons/LeftAlignIcon"));
const RightAlignIcon_1 = __importDefault(require("../icons/RightAlignIcon"));
const CenterAlignIcon_1 = __importDefault(require("../icons/CenterAlignIcon"));
const TableInsertLeftIcon_1 = __importDefault(require("../icons/TableInsertLeftIcon"));
const TableInsertRightIcon_1 = __importDefault(require("../icons/TableInsertRightIcon"));
const isNodeActive_1 = __importDefault(require("../queries/isNodeActive"));
function tableColMenuItems(state, index, dictionary) {
    const { schema } = state;
    return [
        {
            name: "setColumnAttr",
            tooltip: dictionary.alignLeft,
            icon: LeftAlignIcon_1.default,
            attrs: { index, alignment: "left" },
            active: isNodeActive_1.default(schema.nodes.th, {
                colspan: 1,
                rowspan: 1,
                alignment: "left",
            }),
        },
        {
            name: "setColumnAttr",
            tooltip: dictionary.alignCenter,
            icon: CenterAlignIcon_1.default,
            attrs: { index, alignment: "center" },
            active: isNodeActive_1.default(schema.nodes.th, {
                colspan: 1,
                rowspan: 1,
                alignment: "center",
            }),
        },
        {
            name: "setColumnAttr",
            tooltip: dictionary.alignRight,
            icon: RightAlignIcon_1.default,
            attrs: { index, alignment: "right" },
            active: isNodeActive_1.default(schema.nodes.th, {
                colspan: 1,
                rowspan: 1,
                alignment: "right",
            }),
        },
        {
            name: "separator",
        },
        {
            name: "addColumnBefore",
            tooltip: dictionary.addColumnBefore,
            icon: TableInsertLeftIcon_1.default,
            active: () => false,
        },
        {
            name: "addColumnAfter",
            tooltip: dictionary.addColumnAfter,
            icon: TableInsertRightIcon_1.default,
            active: () => false,
        },
        {
            name: "separator",
        },
        {
            name: "deleteColumn",
            tooltip: dictionary.deleteColumn,
            icon: TrashIcon_1.default,
            active: () => false,
        },
    ];
}
exports.default = tableColMenuItems;
//# sourceMappingURL=tableCol.js.map