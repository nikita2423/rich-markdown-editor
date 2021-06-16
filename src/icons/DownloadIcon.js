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
      xmlns="http://www.w3.org/2000/svg"
      width="16.193"
      height="16.185"
      viewBox="0 0 16.193 16.185"
    >
      <g id="noun_Download_2176275" transform="translate(.002)">
        <path
          id="Path_827"
          d="M8.086 0a.578.578 0 0 0-.569.578v10.168L3.881 7.11a.578.578 0 1 0-.817.818l4.622 4.622.007.006.018.017.024.021.015.011.027.019.021.013.024.013.021.01.023.011.026.009.02.007.026.007.024.005H8.164l.039-.007.027.008.026-.007.038-.012.025-.009.034-.015.047-.023.035-.022.024-.017.038-.03.027-.024 4.622-4.622a.578.578 0 0 0-.4-.992h-.017a.577.577 0 0 0-.4.174l-3.656 3.647V.58A.578.578 0 0 0 8.095 0h-.009zM.584 15.029H.576a.578.578 0 1 0 0 1.156h15.037a.578.578 0 0 0 0-1.156H.584z"
          fill={fill}
          data-name="Path 827"
        />
      </g>
    </svg>
  );
};

DividerIcon.defaultProps = {
  fill: "#fff",
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
