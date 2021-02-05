/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const CodeBlockIcon = ({
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
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.60955 7.90708L3.46501 4.76254L6.60955 1.61801L4.99154 0L1.038 3.95354C0.931685 4.05974 0.847344 4.18585 0.7898 4.32466C0.732256 4.46348 0.702637 4.61227 0.702637 4.76254C0.702637 4.91281 0.732256 5.06161 0.7898 5.20042C0.847344 5.33924 0.931685 5.46535 1.038 5.57155L4.99154 9.52508L6.60955 7.90708Z"
        fill="#333B4F"
      />
      <path
        d="M18.6648 12.2436L14.7113 8.29004L13.0933 9.90805L16.2378 13.0526L13.0933 16.1971L14.7113 17.8151L18.6648 13.8616C18.7711 13.7554 18.8555 13.6293 18.913 13.4905C18.9706 13.3516 19.0002 13.2029 19.0002 13.0526C19.0002 12.9023 18.9706 12.7535 18.913 12.6147C18.8555 12.4759 18.7711 12.3498 18.6648 12.2436Z"
        fill="#333B4F"
      />
      <path
        d="M15.9951 1.0015L2.08594 14.9106L3.70304 16.5278L17.6122 2.61861L15.9951 1.0015Z"
        fill="#333B4F"
      />
    </svg>
  );
};

CodeBlockIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

CodeBlockIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default CodeBlockIcon;
