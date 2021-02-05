import * as React from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import styled, { withTheme } from "styled-components";
import theme from "../theme";

type Props = {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  theme: typeof theme;
  icon: typeof React.Component | React.FC<any>;
  title: string;
  shortcut?: string;
};

function BlockMenuItem({
  selected,
  disabled,
  onClick,
  title,
  shortcut,
  icon,
}: Props) {
  const Icon = icon;

  const ref = React.useCallback(
    (node) => {
      if (selected && node) {
        scrollIntoView(node, {
          scrollMode: "if-needed",
          block: "center",
          boundary: (parent) => {
            // All the parent elements of your target are checked until they
            // reach the #block-menu-container. Prevents body and other parent
            // elements from being scrolled
            return parent.id !== "block-menu-container";
          },
        });
      }
    },
    [selected]
  );

  return (
    <MenuItem
      selected={selected}
      onClick={disabled ? undefined : onClick}
      ref={ref}
    >
      <div className="icon-container">
        <Icon
          color={selected ? theme.black : undefined}
          style={{ width: "19px", height: "auto" }}
        />
      </div>
      <div className="text-container">
        {/* &nbsp;&nbsp; */}
        <div style={{ textAlign: "left" }}>
          <div>{title}</div>
          <div style={{ color: "#aaa", fontSize: "12px", marginTop: "4px" }}>
            Start writing your new idea or topic.
          </div>
        </div>

        <Shortcut>{shortcut}</Shortcut>
      </div>
    </MenuItem>
  );
}

const MenuItem = styled.button<{
  selected: boolean;
}>`
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
  color: ${(props) =>
    props.selected ? props.theme.black : props.theme.blockToolbarText};
  background: ${(props) =>
    props.selected ? props.theme.blockToolbarTrigger : "none"};
  padding: 0 16px;
  outline: none;
  padding: 0px 21px;

  &:hover,
  &:active {
    color: ${(props) => props.theme.black};
    background: ${(props) =>
      props.selected
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

const Shortcut = styled.span`
  color: ${(props) => props.theme.textSecondary};
  flex-grow: 1;
  text-align: right;
`;

export default withTheme(BlockMenuItem);
