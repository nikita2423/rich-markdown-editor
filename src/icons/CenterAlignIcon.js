/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const CenterAlignIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width="24.468"
      height="18"
      viewBox="0 0 24.468 18"
      fill={fill}
    >
      <g id="center_aligned" transform="translate(-21.04 -25.459)">
        <rect
          id="Rectangle_17341"
          data-name="Rectangle 17341"
          width="24.468"
          height="2"
          rx="1"
          transform="translate(21.04 30.391)"
        />
        <rect
          id="Rectangle_17342"
          data-name="Rectangle 17342"
          width="13.136"
          height="2"
          rx="1"
          transform="translate(26.349 25.459)"
        />
        <rect
          id="Rectangle_17343"
          data-name="Rectangle 17343"
          width="24.468"
          height="2"
          rx="1"
          transform="translate(21.04 36.091)"
        />
        <rect
          id="Rectangle_17344"
          data-name="Rectangle 17344"
          width="13.136"
          height="2"
          rx="1"
          transform="translate(26.349 41.459)"
        />
      </g>
    </svg>
  );
};

CenterAlignIcon.defaultProps = {
  fill: "#ccc",
  size: "medium", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

CenterAlignIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default CenterAlignIcon;
