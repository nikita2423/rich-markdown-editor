/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const DividerIcon = ({
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
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7316 1.18321C16.3558 0.80742 15.7653 0.80742 15.3895 1.18321L0.268421 16.2864C-0.0894737 16.6443 -0.0894737 17.2527 0.268421 17.6106C0.447368 17.7895 0.697895 17.879 0.930526 17.879C1.18105 17.879 1.41368 17.7895 1.59263 17.6106L16.7316 2.50742C17.0895 2.14953 17.0895 1.5411 16.7316 1.18321Z"
        fill="black"
      />
    </svg>
  );
};

DividerIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

DividerIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default DividerIcon;
