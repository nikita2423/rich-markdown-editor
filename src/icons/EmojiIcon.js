/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const EmojiIcon = ({
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
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.0364 0 0 4.03642 0 9C0 13.9636 4.0364 18 9 18C13.9636 18 18 13.9636 18 9C18 4.03642 13.9636 0 9 0ZM9 1.17391C13.3292 1.17391 16.8261 4.67084 16.8261 9C16.8261 13.3292 13.3292 16.8261 9 16.8261C4.67082 16.8261 1.17391 13.3292 1.17391 9C1.17391 4.67084 4.67082 1.17391 9 1.17391ZM5.86957 5.08696C5.11315 5.08696 4.5 5.70013 4.5 6.45652C4.5 7.21291 5.11315 7.82609 5.86957 7.82609C6.62595 7.82609 7.23913 7.21291 7.23913 6.45652C7.23913 5.70013 6.62595 5.08696 5.86957 5.08696ZM12.1304 5.08696C11.374 5.08696 10.7609 5.70013 10.7609 6.45652C10.7609 7.21291 11.374 7.82609 12.1304 7.82609C12.8868 7.82609 13.5 7.21291 13.5 6.45652C13.5 5.70013 12.8868 5.08696 12.1304 5.08696ZM4.63451 10.7609C4.44591 10.7718 4.27374 10.8783 4.16984 11.0666C4.07078 11.2559 4.08414 11.4967 4.20652 11.6719C5.25573 13.2413 7.01345 14.2826 9 14.2826C10.9866 14.2826 12.7443 13.2413 13.7935 11.6719C13.9648 11.4158 13.8906 11.03 13.6345 10.8587C13.3784 10.6874 12.9865 10.7616 12.8152 11.0177C11.9678 12.2853 10.5786 13.1087 9 13.1087C7.42142 13.1087 6.03219 12.2853 5.18478 11.0177C5.02587 10.8312 4.82311 10.7499 4.63451 10.7609Z"
        fill="black"
      />
    </svg>
  );
};

EmojiIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

EmojiIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default EmojiIcon;
