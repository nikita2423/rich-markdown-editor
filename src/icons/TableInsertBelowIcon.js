/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const TableInsertBelowIcon = ({
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
      fill={fill}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.875,7.25 L10.875,4.5 C10.875,3.94771525 11.3227153,3.5 11.875,3.5 L12.125,3.5 C12.6772847,3.5 13.125,3.94771525 13.125,4.5 L13.125,7.25 L15.5,7.25 C16.0522847,7.25 16.5,7.69771525 16.5,8.25 L16.5,8.75 C16.5,9.30228475 16.0522847,9.75 15.5,9.75 L13.125,9.75 L13.125,12.5 C13.125,13.0522847 12.6772847,13.5 12.125,13.5 L11.875,13.5 C11.3227153,13.5 10.875,13.0522847 10.875,12.5 L10.875,9.75 L8.5,9.75 C7.94771525,9.75 7.5,9.30228475 7.5,8.75 L7.5,8.25 C7.5,7.69771525 7.94771525,7.25 8.5,7.25 L10.875,7.25 Z M16.2807612,13.8417088 C16.7884428,13.3860971 17.6115572,13.3860971 18.1192388,13.8417088 C18.6269204,14.2973204 18.6269204,15.0360129 18.1192388,15.4916246 L12.9192388,20.1582912 C12.4115572,20.6139029 11.5884428,20.6139029 11.0807612,20.1582912 L5.88076118,15.4916246 C5.37307961,15.0360129 5.37307961,14.2973204 5.88076118,13.8417088 C6.38844276,13.3860971 7.21155724,13.3860971 7.71923882,13.8417088 L12,17.6834175 L16.2807612,13.8417088 Z"></path>
    </svg>
  );
};

TableInsertBelowIcon.defaultProps = {
  fill: "#ccc",
  size: "big", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

TableInsertBelowIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default TableInsertBelowIcon;