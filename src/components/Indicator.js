import React from "react";

const Indicator = ({ id, x = 0, y = 0, w = 24, h = 24 }) => {
  return (
    <>
      <defs>
        <pattern
          id={`indicator${id}`}
          x={x}
          y={y}
          width={w}
          height={h}
          patternUnits="userSpaceOnUse"
        >
          <image href={"assets/indicator.svg"} width={w} height={h} />
        </pattern>
      </defs>
      <rect
        className="shape-indicator"
        x={x}
        y={y}
        width={w}
        height={h}
        fill={`url(#indicator${id})`}
      />
    </>
  );
};

export default Indicator;
