import React from "react";

const Rectangle = ({ x, y, w, h, rx = 0 }) => {
  return (
    <svg x={x} y={y} width={`${w}`} height={`${h}`} viewBox={`0 0 ${w} ${h}`}>
      <rect className="rectangle" width={w} height={h} rx={rx} />
    </svg>
  );
};

export default Rectangle;
