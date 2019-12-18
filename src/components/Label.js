import React from "react";

const Label = ({ x, y, w, h, shape, ...props }) => {
  return (
    <g
      className="shape-label-group"
      transform={`rotate(-${props.rotate} ${x + w / 2} ${y + h / 2})`}
    >
      <foreignObject x={x} y={y} width={w} height={h}>
        <div className="shape-label-wrapper">
          <div className="shape-label">{shape.locale.en.title}</div>
        </div>
      </foreignObject>
    </g>
  );
};

export default Label;
