/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const QuoteIcon = ({
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
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.625 9.31269C2.625 7.95317 0 7.72659 0 4.35045C0 1.85801 1.64583 0 3.9375 0C6.39583 0 8 2.37915 8 4.89426C8 9.24471 4.25 15 1.91667 15C1.33333 15 0.270833 14.5468 0.270833 13.7764C0.270833 13.006 2.625 11.6692 2.625 9.31269Z"
        fill="black"
      />
      <path
        d="M13.9608 9.32127C13.9608 7.94118 11 7.73756 11 4.34389C11 1.8552 12.8564 0 15.4413 0C18.1906 0.0226244 20 2.39819 20 4.9095C20 9.25339 15.7702 15 13.1384 15C12.4804 15 11.282 14.5475 11.282 13.7783C11.3055 13.009 13.9608 11.6742 13.9608 9.32127Z"
        fill="black"
      />
    </svg>
  );
};

QuoteIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

QuoteIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default QuoteIcon;
