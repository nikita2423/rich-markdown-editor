"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DividerIcon_1 = __importDefault(require("../icons/DividerIcon"));
const isNodeActive_1 = __importDefault(require("../queries/isNodeActive"));
function dividerMenuItems(state, dictionary) {
    const { schema } = state;
    return [
        {
            name: "hr",
            tooltip: dictionary.pageBreak,
            attrs: { markup: "***" },
            active: isNodeActive_1.default(schema.nodes.hr, { markup: "***" }),
            icon: DividerIcon_1.default,
        },
        {
            name: "hr",
            tooltip: dictionary.hr,
            attrs: { markup: "---" },
            active: isNodeActive_1.default(schema.nodes.hr, { markup: "---" }),
            icon: DividerIcon_1.default,
        },
    ];
}
exports.default = dividerMenuItems;
//# sourceMappingURL=divider.js.map