"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlusIcon_1 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_2 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_3 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_4 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_5 = __importDefault(require("../icons/PlusIcon"));
const PlusIcon_6 = __importDefault(require("../icons/PlusIcon"));
const isNodeActive_1 = __importDefault(require("../queries/isNodeActive"));
function tableColMenuItems(state, index, dictionary) {
    const { schema } = state;
    return [
        {
            name: "setColumnAttr",
            tooltip: dictionary.alignLeft,
            icon: PlusIcon_2.default,
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
            icon: PlusIcon_4.default,
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
            icon: PlusIcon_3.default,
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
            icon: PlusIcon_5.default,
            active: () => false,
        },
        {
            name: "addColumnAfter",
            tooltip: dictionary.addColumnAfter,
            icon: PlusIcon_6.default,
            active: () => false,
        },
        {
            name: "separator",
        },
        {
            name: "deleteColumn",
            tooltip: dictionary.deleteColumn,
            icon: PlusIcon_1.default,
            active: () => false,
        },
    ];
}
exports.default = tableColMenuItems;
//# sourceMappingURL=tableCol.js.map