import React from "react";

const icon = ({ id, x = 0, y = 0, w = 10, h = 10, icon }) => {
  return (
    <>
      <defs>
        <pattern
          id={id}
          x={x}
          y={y}
          width={w}
          height={h}
          patternUnits="userSpaceOnUse"
        >
          <image href={icon} width={w} height={h} />
        </pattern>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id})`} />
    </>
  );
};

export default icon;
