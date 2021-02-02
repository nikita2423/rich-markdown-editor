import * as React from "react";
import { Portal } from "react-portal";
import { EditorView } from "prosemirror-view";
import { findParentNode } from "prosemirror-utils";
import styled from "styled-components";
import { EmbedDescriptor, MenuItem } from "../types";

import getMenuItems from "../menus/block";
import baseDictionary from "../dictionary";

const SSR = typeof window === "undefined";

type Props = {
  isActive: boolean;
  commands: Record<string, any>;
  dictionary: typeof baseDictionary;
  view: EditorView;
  //   search: string;
  onClose: () => void;
};

type State = {
  insertItem?: EmbedDescriptor;
  left?: number;
  top?: number;
  bottom?: number;
  isAbove: boolean;
  selectedIndex: number;
};

class EmojiPopup extends React.Component<Props, State> {
  menuRef = React.createRef<HTMLDivElement>();

  state: State = {
    left: -1000,
    top: 0,
    bottom: undefined,
    isAbove: false,
    selectedIndex: 0,
    insertItem: undefined,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      //   nextProps.search !== this.props.search ||
      nextProps.isActive !== this.props.isActive || nextState !== this.state
    );
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isActive && this.props.isActive) {
      const position = this.calculatePosition(this.props);

      this.setState({
        insertItem: undefined,
        selectedIndex: 0,
        ...position,
      });
    }
    // else if (prevProps.search !== this.props.search) {
    //   this.setState({ selectedIndex: 0 });
    // }
  }

  close = () => {
    this.props.onClose();
    this.props.view.focus();
  };

  clearSearch() {
    const { state, dispatch } = this.props.view;
    const parent = findParentNode((node) => !!node)(state.selection);

    if (parent) {
      dispatch(
        state.tr.insertText(
          "",
          parent.pos,
          parent.pos + parent.node.textContent.length + 1
        )
      );
    }
  }

  insertItem = (item, emojiCode) => {
    const { view } = this.props;
    const { dispatch, state } = view;
    const { from, to } = state.selection;
    const emojiText = `${emojiCode} `;
    dispatch(view.state.tr.insertText(emojiText, from - 1, to));
    view.focus();
    this.props.onClose();
  };

  get caretPosition(): { top: number; left: number } {
    const selection = window.document.getSelection();
    if (!selection || !selection.anchorNode || !selection.focusNode) {
      return {
        top: 0,
        left: 0,
      };
    }

    const range = window.document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.focusNode, selection.focusOffset);

    // This is a workaround for an edgecase where getBoundingClientRect will
    // return zero values if the selection is collapsed at the start of a newline
    // see reference here: https://stackoverflow.com/a/59780954
    const rects = range.getClientRects();
    if (rects.length === 0) {
      // probably buggy newline behavior, explicitly select the node contents
      if (range.startContainer && range.collapsed) {
        range.selectNodeContents(range.startContainer);
      }
    }

    const rect = range.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
    };
  }

  calculatePosition(props) {
    const { view } = props;
    const { selection } = view.state;
    const startPos = view.coordsAtPos(selection.$from.pos);
    const ref = this.menuRef.current;
    const offsetHeight = ref ? ref.offsetHeight : 0;
    const paragraph = view.domAtPos(selection.$from.pos);

    if (
      !props.isActive ||
      !paragraph.node ||
      !paragraph.node.getBoundingClientRect ||
      SSR
    ) {
      return {
        left: -1000,
        top: 0,
        bottom: undefined,
        isAbove: false,
      };
    }

    const { left } = this.caretPosition;
    const { top, bottom } = paragraph.node.getBoundingClientRect();
    const margin = 24;

    if (startPos.top - offsetHeight > margin) {
      return {
        left: left + window.scrollX,
        top: undefined,
        bottom: window.innerHeight - top - window.scrollY,
        isAbove: false,
      };
    } else {
      return {
        left: left + window.scrollX,
        top: bottom + window.scrollY,
        bottom: undefined,
        isAbove: true,
      };
    }
  }

  render() {
    const { dictionary, isActive } = this.props;
    // const items = this.filtered;
    const { ...positioning } = this.state;
    const items: (EmbedDescriptor | MenuItem)[] = getMenuItems(dictionary);
    return (
      <Portal>
        <Wrapper
          id="block-menu-container"
          active={isActive}
          ref={this.menuRef}
          {...positioning}
        >
          <div style={{ marginTop: "10px", height: "inherit" }}>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😀")}
            >
              😀
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😃")}
            >
              😃
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😄")}
            >
              😄
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😁")}
            >
              😁
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😆")}
            >
              😆
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😅")}
            >
              😅
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "😂")}
            >
              😂
            </div>
            <div
              style={{ marginBottom: "5px", height: "20px" }}
              onClick={() => this.insertItem(items[19], "🤣")}
            >
              🤣
            </div>
          </div>
        </Wrapper>
      </Portal>
    );
  }
}

export const Wrapper = styled.div<{
  active: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  isAbove: boolean;
}>`
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};
  position: absolute;
  z-index: ${(props) => {
    return props.theme.zIndex + 100;
  }};
  ${(props) => props.top !== undefined && `top: ${props.top}px`};
  ${(props) => props.bottom !== undefined && `bottom: ${props.bottom}px`};
  left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.blockToolbarBackground};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.08) 0px 4px 8px, rgba(0, 0, 0, 0.08) 0px 2px 4px;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 150ms;
  line-height: 0;
  box-sizing: border-box;
  pointer-events: none;
  white-space: nowrap;
  width: 300px;
  max-height: 224px;
  overflow: hidden;
  overflow-y: auto;

  * {
    box-sizing: border-box;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid ${(props) => props.theme.blockToolbarDivider};
  }

  ${({ active, isAbove }) =>
    active &&
    `
    transform: translateY(${isAbove ? "6px" : "-6px"}) scale(1);
    pointer-events: all;
    opacity: 1;
    min-height: 100px
  `};

  @media print {
    display: none;
  }
`;

export default EmojiPopup;
