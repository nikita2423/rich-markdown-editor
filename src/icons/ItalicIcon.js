/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const ItalicIcon = ({
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
      width="14.224"
      height="18"
      viewBox="0 0 14.224 18"
    >
      <g id="italic" transform="translate(-13.65 -4)">
        <g
          id="Group_9712"
          data-name="Group 9712"
          transform="translate(13.65 4)"
        >
          <path
            id="Path_3514"
            data-name="Path 3514"
            d="M27.874,5.174A1.175,1.175,0,0,1,26.7,6.348H25.16l-6.2,13.3h1.227a1.174,1.174,0,0,1,0,2.348H14.824a1.174,1.174,0,1,1,0-2.348h1.54l6.2-13.3H21.341a1.174,1.174,0,0,1,0-2.348H26.7A1.175,1.175,0,0,1,27.874,5.174Z"
            transform="translate(-13.65 -4)"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

ItalicIcon.defaultProps = {
  fill: "#ccc",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

ItalicIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default ItalicIcon;
