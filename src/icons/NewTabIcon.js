/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const NewTabIcon = ({
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
      width="18.227"
      height="18.201"
      viewBox="0 0 18.227 18.201"
      fill={fill}
    >
      <g id="new_tab" transform="translate(-15.7 -15.7)">
        <path
          id="Path_3515"
          data-name="Path 3515"
          d="M19.226,38.44h9.488a3.419,3.419,0,0,0,3.426-3.426v-5.8a.777.777,0,0,0-.791-.791h0a.777.777,0,0,0-.791.791v5.8a1.834,1.834,0,0,1-1.845,1.845H19.226a1.834,1.834,0,0,1-1.845-1.845V25.526a1.834,1.834,0,0,1,1.845-1.845h5.8a.791.791,0,0,0,0-1.581h-5.8A3.419,3.419,0,0,0,15.8,25.526h0v9.488A3.419,3.419,0,0,0,19.226,38.44Z"
          transform="translate(0 -4.64)"
          stroke={fill}
          strokeWidth="0.2"
        />
        <path
          id="Path_3516"
          data-name="Path 3516"
          d="M55.7,21.44V16.617a.334.334,0,0,0-.026-.158c0-.026,0-.053-.026-.053,0-.026-.026-.053-.026-.079s-.026-.053-.053-.079a.092.092,0,0,0-.026-.053.8.8,0,0,0-.211-.211l-.053-.026a.191.191,0,0,0-.158-.105l-.079-.026c-.053,0-.105-.026-.158-.026H50.059a.791.791,0,1,0,0,1.581h2.925l-7.248,7.274a.783.783,0,1,0,1.107,1.107l7.274-7.248V21.44a.777.777,0,0,0,.791.791h0A.83.83,0,0,0,55.7,21.44Z"
          transform="translate(-21.872)"
          stroke={fill}
          strokeWidth="0.2"
        />
      </g>
    </svg>
  );
};

NewTabIcon.defaultProps = {
  fill: "#ccc",
  size: "medium", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

NewTabIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default NewTabIcon;
