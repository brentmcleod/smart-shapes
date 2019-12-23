import React from "react";

const icon = ({ id, x, y, w, h, src }) => {
  return (
    <g className="diagram-image">
      <defs>
        <pattern
          id={`${id}`}
          x={x}
          y={y}
          width={w}
          height={h}
          patternUnits="userSpaceOnUse"
        >
          <image href={src} width={w} height={h} />
        </pattern>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id})`} />
    </g>
  );
};

export default icon;
