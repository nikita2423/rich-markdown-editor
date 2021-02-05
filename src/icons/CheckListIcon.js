/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import PropTypes from "prop-types";

// Custom Import..
import { getSizeDimension } from "./utils";

const CheckListIcon = ({
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
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4289 5.96464L14.3925 6.92821L7.74929 13.5714L4.56 9.58143L5.61857 8.74L7.85786 11.5357L13.4289 5.96464ZM19 9.5C19 11.3789 18.4428 13.2156 17.399 14.7779C16.3551 16.3402 14.8714 17.5578 13.1355 18.2769C11.3996 18.9959 9.48946 19.184 7.64665 18.8175C5.80383 18.4509 4.11109 17.5461 2.78249 16.2175C1.45389 14.8889 0.549104 13.1962 0.182544 11.3534C-0.184015 9.51054 0.00411619 7.6004 0.723149 5.86451C1.44218 4.12861 2.65982 2.64491 4.22209 1.60104C5.78435 0.557165 7.62108 0 9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78248C17.9991 4.56408 19 6.98044 19 9.5ZM17.6429 9.5C17.6429 7.88949 17.1653 6.31516 16.2705 4.97607C15.3758 3.63698 14.104 2.59329 12.6161 1.97698C11.1282 1.36067 9.49097 1.19941 7.91141 1.51361C6.33185 1.8278 4.88093 2.60333 3.74213 3.74213C2.60334 4.88093 1.8278 6.33185 1.51361 7.91141C1.19942 9.49096 1.36067 11.1282 1.97698 12.6161C2.5933 14.104 3.63699 15.3758 4.97607 16.2705C6.31516 17.1653 7.8895 17.6429 9.5 17.6429C11.6596 17.6429 13.7308 16.7849 15.2579 15.2579C16.785 13.7308 17.6429 11.6596 17.6429 9.5Z"
        fill="black"
      />
    </svg>
  );
};

CheckListIcon.defaultProps = {
  fill: "#ff1744",
  size: "tiny", // mini | tiny | small | medium | large | big | huge | massive
  style: {},
  className: null,
  circleClassName: "",
  onClick: () => {},
  id: "",
};

CheckListIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default CheckListIcon;
