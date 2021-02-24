/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const H1Icon = ({
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
      height="13"
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.08594 1.75781V5.03906H8.09375V1.75781C8.09375 1.28906 8.19792 0.9375 8.40625 0.703125C8.61979 0.46875 8.89844 0.351562 9.24219 0.351562C9.59115 0.351562 9.8724 0.46875 10.0859 0.703125C10.3047 0.932292 10.4141 1.28385 10.4141 1.75781V10.7812C10.4141 11.2552 10.3047 11.6094 10.0859 11.8438C9.86719 12.0781 9.58594 12.1953 9.24219 12.1953C8.89323 12.1953 8.61458 12.0781 8.40625 11.8438C8.19792 11.6042 8.09375 11.25 8.09375 10.7812V6.92969H3.08594V10.7812C3.08594 11.2552 2.97656 11.6094 2.75781 11.8438C2.53906 12.0781 2.25781 12.1953 1.91406 12.1953C1.5651 12.1953 1.28646 12.0781 1.07812 11.8438C0.869792 11.6042 0.765625 11.25 0.765625 10.7812V1.75781C0.765625 1.28906 0.867188 0.9375 1.07031 0.703125C1.27865 0.46875 1.5599 0.351562 1.91406 0.351562C2.26302 0.351562 2.54427 0.46875 2.75781 0.703125C2.97656 0.932292 3.08594 1.28385 3.08594 1.75781ZM16.1719 10.9297V3.82031C14.849 4.83594 13.9583 5.34375 13.5 5.34375C13.2812 5.34375 13.0859 5.25781 12.9141 5.08594C12.7474 4.90885 12.6641 4.70573 12.6641 4.47656C12.6641 4.21094 12.7474 4.01562 12.9141 3.89062C13.0807 3.76562 13.375 3.60417 13.7969 3.40625C14.4271 3.10938 14.9297 2.79688 15.3047 2.46875C15.6849 2.14062 16.0208 1.77344 16.3125 1.36719C16.6042 0.960938 16.7943 0.710938 16.8828 0.617188C16.9714 0.523438 17.138 0.476562 17.3828 0.476562C17.6589 0.476562 17.8802 0.583333 18.0469 0.796875C18.2135 1.01042 18.2969 1.30469 18.2969 1.67969V10.625C18.2969 11.6719 17.9401 12.1953 17.2266 12.1953C16.9089 12.1953 16.6536 12.0885 16.4609 11.875C16.2682 11.6615 16.1719 11.3464 16.1719 10.9297Z"
        fill={fill}
      />
    </svg>
  );
};

H1Icon.defaultProps = {
  fill: "#333B4F",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

H1Icon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default H1Icon;
