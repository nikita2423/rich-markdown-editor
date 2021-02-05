/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const ImageIcon = ({
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
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33333 16H14.6667C15.0203 16 15.3594 15.8595 15.6095 15.6095C15.8595 15.3594 16 15.0203 16 14.6667V1.33333C16 0.979711 15.8595 0.640573 15.6095 0.390524C15.3594 0.140476 15.0203 0 14.6667 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V14.6667C0 15.0203 0.140476 15.3594 0.390524 15.6095C0.640573 15.8595 0.979711 16 1.33333 16ZM14.6667 1.33333V8.66667L13.6067 7.60667C13.3569 7.35833 13.0189 7.21894 12.6667 7.21894C12.3144 7.21894 11.9765 7.35833 11.7267 7.60667L10.6067 8.72667L14.6667 12.7867V14.6667L6.27333 6.27333C6.1495 6.14936 6.00245 6.05102 5.84059 5.98392C5.67872 5.91682 5.50522 5.88228 5.33 5.88228C5.15478 5.88228 4.98128 5.91682 4.81941 5.98392C4.65755 6.05102 4.5105 6.14936 4.38667 6.27333L1.33333 9.33333V1.33333H14.6667Z"
        fill="#333B4F"
      />
    </svg>
  );
};

ImageIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

ImageIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default ImageIcon;
