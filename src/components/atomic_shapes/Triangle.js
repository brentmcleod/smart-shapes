import React from "react";

const Triangle = ({ x, y, scale = 1 }) => {
  return (
    <svg
      x={x}
      y={y}
      width={`${100 * scale}`}
      height={`${100 * scale}`}
      viewBox={`0 0 ${100} ${100}`}
    >
      <path className="triangle" d={`M 50,0 l 50,100 l -100,0 z`} />
    </svg>
  );
};

export default Triangle;
