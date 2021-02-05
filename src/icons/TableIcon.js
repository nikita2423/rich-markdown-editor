/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const TableIcon = ({
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
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3333 0H1.66667C1.02337 0 0.5 0.523367 0.5 1.16667V14.7C0.5 15.3433 1.02337 15.8667 1.66667 15.8667H20.3333C20.9766 15.8667 21.5 15.3433 21.5 14.7V1.16667C21.5 0.523367 20.9766 0 20.3333 0ZM1.66667 0.933333H20.3333C20.4621 0.933333 20.5667 1.0381 20.5667 1.16667V3.73333H1.43333V1.16667C1.43333 1.0381 1.53787 0.933333 1.66667 0.933333ZM7.73333 11.2V8.4H14.2667V11.2H7.73333ZM14.2667 12.1333V14.9333H7.73333V12.1333H14.2667ZM14.2667 4.66667V7.46667H7.73333V4.66667H14.2667ZM6.8 7.46667H1.43333V4.66667H6.8V7.46667ZM6.8 8.4V11.2H1.43333V8.4H6.8ZM15.2 8.4H20.5667V11.2H15.2V8.4ZM15.2 7.46667V4.66667H20.5667V7.46667H15.2ZM1.43333 14.7V12.1333H6.8V14.9333H1.66667C1.53787 14.9333 1.43333 14.8286 1.43333 14.7ZM20.3333 14.9333H15.2V12.1333H20.5667V14.7C20.5667 14.8286 20.4621 14.9333 20.3333 14.9333Z"
        fill="black"
      />
    </svg>
  );
};

TableIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

TableIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default TableIcon;
