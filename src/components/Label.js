import React from "react";

const Label = ({ x, y, w, h, shape, ...props }) => {
  return (
    <svg x={x} y={y} width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <g
        className="shape-label-wrapper"
        transform={`rotate(-${props.rotate} ${w / 2} ${w / 2})`}
      >
        <foreignObject width="100%" height="100%">
          <div className="shape-label">{shape.locale.en.title}</div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default Label;
