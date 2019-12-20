import React from "react";

const Hexagon = ({ x, y, margin = 0, scale = 1 }) => {
  return (
    <svg
      x={x}
      y={y}
      width={`${100 * scale}`}
      height={`${114 * scale}`}
      viewBox={`0 0 ${100 + margin} ${114 + margin}`}
    >
      <path
        className="hexagon"
        d={`M 50,0 l 50,29 l 0,56 l -50,29 l -50,-29 l 0,-56 l 50,-29 z`}
      />
    </svg>
  );
};

export default Hexagon;
