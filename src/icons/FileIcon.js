/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const FileIcon = ({
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
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6776 10.3841C16.3093 10.0158 15.9409 9.67043 15.5495 9.25602C15.5035 9.32509 15.4574 9.41718 15.3653 9.48625C13.1781 11.7195 10.9449 13.9297 8.73468 16.1399C7.67562 17.199 6.40935 17.6364 4.93588 17.3832C3.07101 17.0608 1.57451 15.4722 1.52847 13.3771C1.50544 12.203 1.94288 11.1669 2.79473 10.3381C5.35029 7.78254 7.88283 5.22698 10.4384 2.69445C11.083 2.0498 11.8428 1.79655 12.7637 1.93469C13.9149 2.11887 14.8818 3.247 14.9049 4.39815C14.9049 5.18094 14.6286 5.8486 14.053 6.40116C12.4184 8.05882 10.7607 9.69345 9.12607 11.3511C8.71166 11.7655 8.29724 12.1799 7.88283 12.5944C7.53748 12.9397 7.12307 12.9858 6.73168 12.7785C6.04099 12.4102 5.92587 11.6504 6.47842 11.0748C8.22818 9.32508 9.97793 7.57533 11.7277 5.82558C11.7967 5.75651 11.9119 5.71047 11.9809 5.66442C11.5435 5.22698 11.1981 4.88164 10.8298 4.51327C10.8298 4.51327 10.8068 4.53629 10.7837 4.53629C8.94189 6.37813 7.07702 8.21998 5.2582 10.0848C4.70565 10.6374 4.49844 11.3511 4.61356 12.1339C4.77472 13.193 5.37332 13.9067 6.34028 14.252C7.33028 14.5974 8.2512 14.3902 8.98794 13.6534C11.083 11.5813 13.1781 9.48625 15.2732 7.39115C15.9869 6.67743 16.4244 5.80256 16.4704 4.78954C16.5395 3.20095 15.9869 1.88864 14.6286 0.99074C13.9379 0.530279 13.1781 0.300049 12.3493 0.300049C11.1521 0.300049 10.1161 0.76051 9.26421 1.61236C6.77772 4.16792 4.24519 6.65441 1.7587 9.16392C0.239176 10.7065 -0.313377 12.5483 0.170107 14.6664C0.814753 17.4752 3.37031 19.248 6.29424 18.9717C7.67562 18.8336 8.87282 18.235 9.86281 17.245C12.073 15.0118 14.3063 12.8016 16.5165 10.5914C16.5625 10.5223 16.6316 10.4532 16.6776 10.3841Z"
        fill="#333B4F"
      />
    </svg>
  );
};

FileIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

FileIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default FileIcon;
