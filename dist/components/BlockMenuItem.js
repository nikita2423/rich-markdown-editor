"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const smooth_scroll_into_view_if_needed_1 = __importDefault(require("smooth-scroll-into-view-if-needed"));
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = __importDefault(require("../theme"));
function BlockMenuItem({ selected, disabled, onClick, title, shortcut, icon, }) {
    const Icon = icon;
    const ref = React.useCallback((node) => {
        if (selected && node) {
            smooth_scroll_into_view_if_needed_1.default(node, {
                scrollMode: "if-needed",
                block: "center",
                boundary: (parent) => {
                    return parent.id !== "block-menu-container";
                },
            });
        }
    }, [selected]);
    return (React.createElement(MenuItem, { selected: selected, onClick: disabled ? undefined : onClick, ref: ref },
        React.createElement("div", { className: "icon-container" },
            React.createElement(Icon, { color: selected ? theme_1.default.black : undefined, style: { width: "19px", height: "auto" } })),
        React.createElement("div", { className: "text-container" },
            React.createElement("div", { style: { textAlign: "left" } },
                React.createElement("div", null, title),
                React.createElement("div", { style: { color: "#aaa", fontSize: "12px", marginTop: "4px" } }, "Start writing your new idea or topic.")),
            React.createElement(Shortcut, null, shortcut))));
}
const MenuItem = styled_components_1.default.button `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  width: 100%;
  cursor: pointer;
  border: none;
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  color: ${(props) => props.selected ? props.theme.black : props.theme.blockToolbarText};
  background: ${(props) => props.selected ? props.theme.blockToolbarTrigger : "none"};
  padding: 0 16px;
  outline: none;
  padding: 0px 21px;

  &:hover,
  &:active {
    color: ${(props) => props.theme.black};
    background: ${(props) => props.selected
    ? props.theme.blockToolbarTrigger
    : props.theme.blockToolbarHoverBackground};
  }

  .icon-container {
    min-width: 44px;
    height: 44px;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 9px 0px;
  }

  .text-container {
    display: flex;
    align-items: center;
    height: 62px;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
    margin-left: 15px;
  }
`;
const Shortcut = styled_components_1.default.span `
  color: ${(props) => props.theme.textSecondary};
  flex-grow: 1;
  text-align: right;
`;
exports.default = styled_components_1.withTheme(BlockMenuItem);
//# sourceMappingURL=BlockMenuItem.js.map