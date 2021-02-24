/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/**
 * Created by Robins Gupta
 * 21th Dec 2018
 */

import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const Close = ({ size, fill, style, className, onClick, id }) => {
  const sizeStyle = getSizeDimension(size);

  return (
    <svg
      onClick={onClick}
      onMouseDown={onClick}
      className={className}
      style={{ ...sizeStyle, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
    >
      <path
        id={id}
        fill={fill}
        d="M13,5.806,12.194,5,9,8.194,5.806,5,5,5.806,8.194,9,5,12.194,5.806,13,9,9.806,12.194,13,13,12.194,9.806,9Z"
        transform="translate(-5 -5)"
      />
    </svg>
  );
};

Close.defaultProps = {
  fill: "#ccc",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
};

Close.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Close;
