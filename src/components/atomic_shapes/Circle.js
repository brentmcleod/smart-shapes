import React from "react";

const Circle = ({ x, y, scale = 1 }) => {
  return (
    <svg
      x={x}
      y={y}
      width={`${100 * scale}`}
      height={`${100 * scale}`}
      viewBox={`0 0 ${100} ${100}`}
    >
      <circle className="circle" cx="50" cy="50" r="50" />
    </svg>
  );
};

export default Circle;
