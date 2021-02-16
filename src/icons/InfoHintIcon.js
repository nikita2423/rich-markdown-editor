/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const InfoHintIcon = ({
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
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0.5C7.21997 0.5 5.47991 1.02784 3.99987 2.01677C2.51983 3.00571 1.36628 4.41131 0.685088 6.05585C0.00389941 7.70038 -0.17433 9.50998 0.172937 11.2558C0.520203 13.0016 1.37737 14.6053 2.63604 15.864C3.89471 17.1226 5.49836 17.9798 7.24419 18.3271C8.99002 18.6743 10.7996 18.4961 12.4442 17.8149C14.0887 17.1337 15.4943 15.9802 16.4832 14.5001C17.4722 13.0201 18 11.28 18 9.5C17.9972 7.11391 17.0481 4.82635 15.3609 3.13913C13.6736 1.45191 11.3861 0.502802 9 0.5ZM9 17.4412C7.42939 17.4412 5.89404 16.9754 4.58812 16.1028C3.2822 15.2303 2.26436 13.99 1.66331 12.539C1.06226 11.0879 0.905003 9.49119 1.21141 7.95075C1.51783 6.41031 2.27415 4.99533 3.38474 3.88474C4.49534 2.77415 5.91032 2.01782 7.45076 1.71141C8.99119 1.405 10.5879 1.56226 12.039 2.16331C13.49 2.76436 14.7303 3.7822 15.6028 5.08812C16.4754 6.39404 16.9412 7.92938 16.9412 9.5C16.9393 11.6056 16.1021 13.6243 14.6132 15.1132C13.1243 16.602 11.1056 17.4393 9 17.4412ZM8.50235 6.11529C8.36979 5.98352 8.29491 5.80456 8.29412 5.61765C8.2889 5.57191 8.2889 5.52573 8.29412 5.48C8.30215 5.43402 8.31517 5.38904 8.33294 5.34588C8.35042 5.30334 8.37293 5.26306 8.4 5.22588C8.42525 5.18624 8.45485 5.14954 8.48824 5.11647C8.62343 4.99069 8.80123 4.92077 8.98588 4.92077C9.17054 4.92077 9.34834 4.99069 9.48353 5.11647C9.51692 5.14954 9.54652 5.18624 9.57177 5.22588C9.59752 5.26389 9.61995 5.30403 9.63883 5.34588C9.6566 5.38904 9.66962 5.43402 9.67765 5.48C9.69236 5.52463 9.70183 5.57083 9.70588 5.61765C9.7051 5.80456 9.63021 5.98352 9.49765 6.11529C9.46659 6.14944 9.43096 6.17913 9.39177 6.20353C9.3538 6.23134 9.31225 6.2539 9.26824 6.27059C9.22646 6.28882 9.1826 6.30185 9.13765 6.30941C9.09245 6.31935 9.04627 6.32408 9 6.32353C8.81309 6.32274 8.63413 6.24785 8.50235 6.11529ZM10.6588 13.3823C10.6588 13.5228 10.603 13.6574 10.5038 13.7567C10.4045 13.856 10.2698 13.9118 10.1294 13.9118H7.87059C7.73018 13.9118 7.59552 13.856 7.49624 13.7567C7.39696 13.6574 7.34118 13.5228 7.34118 13.3823C7.34118 13.2419 7.39696 13.1073 7.49624 13.008C7.59552 12.9087 7.73018 12.8529 7.87059 12.8529H8.47059V8.61765H7.94118C7.80077 8.61765 7.66611 8.56187 7.56683 8.46258C7.46754 8.3633 7.41177 8.22864 7.41177 8.08823C7.41177 7.94782 7.46754 7.81317 7.56683 7.71388C7.66611 7.6146 7.80077 7.55882 7.94118 7.55882H9C9.14041 7.55882 9.27507 7.6146 9.37435 7.71388C9.47364 7.81317 9.52941 7.94782 9.52941 8.08823V12.8529H10.1294C10.2698 12.8529 10.4045 12.9087 10.5038 13.008C10.603 13.1073 10.6588 13.2419 10.6588 13.3823Z"
        fill="#084298"
      />
    </svg>
  );
};

InfoHintIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

InfoHintIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default InfoHintIcon;
