/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const CenterImageIcon = ({
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
      width="24.69"
      height="18"
      viewBox="0 0 24.69 18"
      fill={fill}
    >
      <g id="middle_image" transform="translate(-6 -6)">
        <rect
          id="Rectangle_17325"
          data-name="Rectangle 17325"
          width="5"
          height="1.543"
          rx="0.771"
          transform="translate(6 18.344)"
        />
        <rect
          id="Rectangle_17326"
          data-name="Rectangle 17326"
          width="10"
          height="10"
          rx="1"
          transform="translate(13.114 10)"
        />
        <rect
          id="Rectangle_17327"
          data-name="Rectangle 17327"
          width="5"
          height="1.543"
          rx="0.771"
          transform="translate(6 14.229)"
        />
        <rect
          id="Rectangle_17330"
          data-name="Rectangle 17330"
          width="5"
          height="1.543"
          rx="0.771"
          transform="translate(6 10.115)"
        />
        <rect
          id="Rectangle_17331"
          data-name="Rectangle 17331"
          width="24.69"
          height="1.543"
          rx="0.771"
          transform="translate(6 6)"
        />
        <rect
          id="Rectangle_17332"
          data-name="Rectangle 17332"
          width="24.69"
          height="1.543"
          rx="0.771"
          transform="translate(6 22.457)"
        />
        <rect
          id="Rectangle_17354"
          data-name="Rectangle 17354"
          width="5"
          height="1.543"
          rx="0.771"
          transform="translate(25.515 18.344)"
        />
        <rect
          id="Rectangle_17355"
          data-name="Rectangle 17355"
          width="5"
          height="1.543"
          rx="0.771"
          transform="translate(25.515 14.229)"
        />
        <rect
          id="Rectangle_17356"
          data-name="Rectangle 17356"
          width="5"
          height="1.543"
          rx="0.771"
          transform="translate(25.515 10.115)"
        />
      </g>
    </svg>
  );
};

CenterImageIcon.defaultProps = {
  fill: "#ccc",
  size: "medium", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

CenterImageIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default CenterImageIcon;
