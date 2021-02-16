/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const WarningIcon = ({
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
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6722 14.1771L10.584 1.5962C10.1859 0.889352 9.62328 0.5 9.00004 0.5C8.37679 0.5 7.81413 0.889352 7.41609 1.5962L0.328147 14.1771C-0.0626137 14.8708 -0.106527 15.5715 0.207913 16.1093C0.522354 16.6471 1.15898 16.9495 1.95507 16.9495H16.045C16.8411 16.9495 17.478 16.6471 17.7922 16.1093C18.1064 15.5715 18.0627 14.8708 17.6722 14.1771ZM16.9376 15.6349C16.8054 15.8609 16.4802 16.0102 16.045 16.0102H1.95507C1.51992 16.0102 1.19468 15.8609 1.06247 15.6349C0.930492 15.4088 0.976989 15.0521 1.19045 14.6726L8.27863 2.08653C8.49045 1.71033 8.75323 1.49217 8.9998 1.49217C9.24638 1.49217 9.50915 1.7068 9.72097 2.08301L16.8092 14.6731C17.0231 15.0526 17.0696 15.4088 16.9376 15.6349Z"
        fill={fill}
      />
      <path
        d="M8.06055 7.07266L8.30407 10.8438H9.69569L9.96339 7.12174L9.96433 5.91235H8.06055V7.07266Z"
        fill={fill}
      />
      <path d="M9.7044 12.4878H8.29541V14.1316H9.7044V12.4878Z" fill={fill} />
    </svg>
  );
};

WarningIcon.defaultProps = {
  fill: "#000",
  size: "medium", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

WarningIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default WarningIcon;
