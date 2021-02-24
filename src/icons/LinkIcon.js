/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const LinkIcon = ({
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
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8288 1.17142C12.2665 -0.390473 9.73376 -0.390473 8.1719 1.17142L5.93988 3.40256C6.11658 3.38334 6.29512 3.37508 6.47457 3.37508C7.03943 3.37508 7.5887 3.46482 8.10871 3.63782L9.37349 2.37348C9.80789 1.93861 10.3856 1.69966 10.9999 1.69966C11.6143 1.69966 12.192 1.93861 12.6264 2.37348C13.0608 2.80743 13.2996 3.38422 13.2996 3.99944C13.2996 4.61376 13.0608 5.19145 12.6264 5.62541L10.1517 8.10007C9.71736 8.53497 9.13963 8.77386 8.52532 8.77386C7.91007 8.77386 7.33331 8.53497 6.89847 8.10007C6.68697 7.88948 6.5222 7.64411 6.40867 7.37677C6.12668 7.39232 5.86303 7.50952 5.66161 7.71091L5.00244 8.37096C5.1828 8.7051 5.41443 9.02005 5.69642 9.30301C7.25828 10.865 9.79148 10.865 11.3538 9.30301L13.8289 6.82744C15.3902 5.26563 15.3902 2.73331 13.8288 1.17142Z"
        fill={fill}
      />
      <path
        d="M8.55194 11.624C7.98615 11.624 7.43136 11.5325 6.89949 11.3521L5.62601 12.6256C5.19205 13.0605 4.61439 13.2995 4.00007 13.2995C3.38576 13.2995 2.809 13.0605 2.37411 12.6256C1.93924 12.1916 1.70029 11.614 1.70029 10.9997C1.70029 10.3853 1.93924 9.8076 2.37411 9.3728L4.84874 6.89816C5.28361 6.46421 5.86039 6.22525 6.4747 6.22525C7.08993 6.22525 7.66671 6.46421 8.10108 6.89816C8.31261 7.10963 8.47776 7.355 8.59182 7.62232C8.87472 7.60767 9.13884 7.48957 9.34026 7.28818L9.99852 6.629C9.81816 6.2939 9.58607 5.97898 9.30364 5.69608C7.74177 4.13419 5.20857 4.13419 3.64671 5.69608L1.17208 8.17165C-0.390693 9.7336 -0.390693 12.2658 1.17208 13.8286C2.73394 15.3906 5.26626 15.3906 6.82809 13.8286L9.05642 11.6003C8.89027 11.6158 8.72228 11.6241 8.55288 11.6241L8.55194 11.624Z"
        fill={fill}
      />
    </svg>
  );
};

LinkIcon.defaultProps = {
  fill: "black",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

LinkIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default LinkIcon;
