import React from "react";

const Hexagon = ({ x, y, margin = 0, scale = 1 }) => {
  return (
    <svg
      x={x}
      y={y}
      width={`${(90 + margin * 2) * scale}`}
      height={`${(100 + margin * 2) * scale}`}
      viewBox={`0 0 ${90 + margin * 2} ${100 + margin * 2}`}
    >
      <path
        className="hexagon"
        d={`M ${45 + margin},${0 +
          margin} l 45,25 l 0,50 l -45,25 l -45,-25 l 0,-50 l 45,-25 z`}
      />
    </svg>
  );
};

export default Hexagon;
