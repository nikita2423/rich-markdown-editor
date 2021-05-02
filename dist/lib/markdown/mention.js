"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_it_flowdock_1 = __importDefault(require("markdown-it-flowdock"));
function mention(md) {
    return markdown_it_flowdock_1.default(md, "mention", {
        marker: ":",
        validate: () => true,
    });
}
exports.default = mention;
//# sourceMappingURL=mention.js.map