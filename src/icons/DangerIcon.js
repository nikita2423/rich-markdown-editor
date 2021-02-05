/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const DangerIcon = ({
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
        d="M3.05154 14.9381L3.05106 14.9376C-0.217019 11.6695 -0.217019 6.31913 3.05106 3.05106C6.31913 -0.217019 11.6695 -0.217019 14.9376 3.05106C16.527 4.64044 17.4 6.76685 17.4 9.00566C17.4 11.2669 16.5271 13.3707 14.9377 14.9601C13.2807 16.5947 11.1316 17.4227 8.98301 17.4227C6.83419 17.4227 4.6856 16.5946 3.05154 14.9381ZM14.2582 13.1311L14.3389 13.2117L14.4082 13.121C15.3053 11.948 15.7879 10.4995 15.7879 9.00566C15.7879 7.18933 15.0749 5.48778 13.7879 4.20078C12.4551 2.86794 10.7304 2.20062 8.98236 2.22345C7.53435 2.22359 6.08629 2.68337 4.86814 3.60273L4.77628 3.67206L4.85776 3.75334L14.2582 13.1311ZM3.7306 4.88032L3.64997 4.79969L3.58056 4.89016C1.53428 7.55722 1.74128 11.3737 4.17812 13.8106L4.17846 13.8109C6.61524 16.2247 10.4312 16.4316 13.0981 14.4085L13.1894 14.3392L13.1084 14.2581L3.7306 4.88032Z"
        fill="#333B4F"
        stroke="#F8D7DA"
        strokeWidth="0.2"
      />
    </svg>
  );
};

DangerIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

DangerIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default DangerIcon;
