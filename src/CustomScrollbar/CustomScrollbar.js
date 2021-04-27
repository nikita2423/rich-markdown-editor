/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Scrollbars } from "react-custom-scrollbars";

// Custom Import

class CustomScrollbar extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    onScroll: PropTypes.func,
    style: PropTypes.object,
    hideTracksWhenNotNeeded: PropTypes.bool,
    scrollToIndexData: PropTypes.func,
    setScrollRef: PropTypes.func,
    autoHeight: PropTypes.number,
    autoHeightMax: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    id: "",
    onScroll: () => {},
    style: {},
    hideTracksWhenNotNeeded: true,
    scrollToIndexData: () => {},
    setScrollRef: () => {},
    autoHeight: null,
    autoHeightMax: null,
    className: "react-thumb-vertical",
    children: null,
  };

  render() {
    const {
      id,
      onScroll,
      style,
      hideTracksWhenNotNeeded,
      scrollToIndexData,
      setScrollRef,
      autoHeight,
      autoHeightMax,
      className,
      children,
    } = this.props;

    return (
      <Scrollbars
        // ref="customScrollBar"
        ref={(ref) => {
          setScrollRef ? setScrollRef(ref) : null;
        }}
        // ref={(ref) => { this.scrollBar = ref}}
        renderThumbVertical={(props) => (
          <div {...props} className={className} />
        )}
        renderThumbHorizontal={(props) => (
          <div {...props} className={className} />
        )}
        id={id}
        style={{ width: "100%", height: "100%", ...style }}
        universal
        onScroll={onScroll}
        // This will activate auto hide
        autoHide
        autoHeight={autoHeight}
        autoHeightMax={autoHeightMax}
        // Hide delay in ms
        autoHideTimeout={1000}
        hideTracksWhenNotNeeded={hideTracksWhenNotNeeded}
        thumbMinSize={50}
        // Duration for hide animation in ms.
        autoHideDuration={300}
      >
        {children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbar;
