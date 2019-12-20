import React from "react";

const Rectangle = ({ x, y, w, h, rx = 0, scale = 1 }) => {
  return (
    <svg
      x={x}
      y={y}
      width={`${w * scale}`}
      height={`${h * scale}`}
      viewBox={`0 0 ${w} ${h}`}
    >
      <rect className="rectangle" width={w} height={h} rx={rx} />
    </svg>
  );
};

export default Rectangle;
