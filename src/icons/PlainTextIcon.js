/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const PlainTextIcon = ({
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
      width="19"
      height="25"
      viewBox="0 0 19 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M3.38522 13H7.0242L7.94821 17H10.0002L7.00021 4H3.4082L0.408203 17H2.46121L3.38522 13ZM5.4082 6L6.56223 11H3.84521L4.99921 6H5.4082Z"
          fill="black"
        />
        <path
          d="M18 9V10.38C17.267 9.541 16.201 9 15 9C12.791 9 11 10.791 11 13C11 15.209 12.791 17 15 17C16.201 17 17.267 16.459 18 15.62V17H19V9H18ZM15 15C13.896 15 13 14.104 13 13C13 11.896 13.896 11 15 11C16.103 11 17 11.896 17 13C17 14.104 16.103 15 15 15Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="19" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

PlainTextIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

PlainTextIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default PlainTextIcon;
