import React from "react";

const Label = ({ x, y, w, h, shape }) => {
  return (
    <foreignObject
      className="shape-label-wrapper"
      x={x}
      y={y}
      width={w}
      height={h}
    >
      <div className="shape-label">{shape.locale.en.title}</div>
    </foreignObject>
  );
};

export default Label;
