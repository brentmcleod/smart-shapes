import React from "react";

const Indicator = ({
  id,
  x = 0,
  y = 0,
  w = 24,
  h = 24,
  sw,
  sh,
  scale = 1,
  transform
}) => {
  return (
    <g
      className="shape-indicator"
      transform={
        transform.type === "rotate" && transform.counter_at === "component"
          ? `rotate(-${transform.values[id]} ${x + w / 2} ${y + h / 2})`
          : ""
      }
    >
      <svg
        x={x === "centre" ? sw / 2 - (w * scale) / 2 : x}
        y={y === "centre" ? sh / 2 - (h * scale) / 2 : y}
        width={w * scale}
        height={h * scale}
        viewBox={`0 0 ${w} ${h}`}
      >
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
