/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const PlusIcon = ({
  fill,
  size,
  style,
  className,

  onClick,
  id,
}) => {
  const sizeStyle = getSizeDimension(size);
  return (
    <svg
      id={id}
      onClick={onClick}
      className={className}
      style={{ ...sizeStyle, ...style }}
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.87988 0C6.49178 0 6.17718 0.309777 6.17718 0.691892V5.70813H1.08259C0.6945 5.70813 0.379883 6.01789 0.379883 6.40002C0.379883 6.78215 0.6945 7.09191 1.08259 7.09191H6.17718V12.1081C6.17718 12.4902 6.49178 12.8 6.87988 12.8C7.26799 12.8 7.58259 12.4902 7.58259 12.1081V7.09191H12.6772C13.0653 7.09191 13.3799 6.78215 13.3799 6.40002C13.3799 6.01789 13.0653 5.70813 12.6772 5.70813H7.58259V0.691892C7.58259 0.309777 7.26799 0 6.87988 0Z"
        fill="#AAAAAA"
      />
    </svg>
  );
};

PlusIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

PlusIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default PlusIcon;
