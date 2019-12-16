import React from "react";

const Indicator = ({ id, x = 0, y = 0, w = 24, h = 24, rotate = 0 }) => {
  return (
    <svg x={x} y={y} width={h} height={h} viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <pattern
          id={`indicator${id}`}
          width={w}
          height={h}
          patternUnits="userSpaceOnUse"
        >
          <image href={"assets/indicator.svg"} width={w} height={h} />
        </pattern>
      </defs>
      <rect
        className="shape-indicator"
        width={w}
        height={h}
        fill={`url(#indicator${id})`}
        transform={`rotate(-${rotate} ${w / 2} ${w / 2})`}
      />
    </svg>
  );
};

export default Indicator;
