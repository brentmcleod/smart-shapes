import React from "react";

const Indicator = ({ id, x = 0, y = 0, w = 24, h = 24, rotate = 0 }) => {
  return (
    <g
      className="shape-indicator"
      transform={`rotate(-${rotate} ${x + w / 2} ${y + h / 2})`}
    >
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
        <rect width={w} height={h} fill={`url(#indicator${id})`} />
      </svg>
    </g>
  );
};

export default Indicator;
