import React from "react";

const ShapeLabel = ({ id, x, y, w, h, sw, sh, shape, transform }) => {
  return (
    <g
      className="shape-label-group"
      transform={
        transform.type === "rotate" && transform.counter_at === "component"
          ? `rotate(-${transform.values[id]} ${x + w / 2} ${y + h / 2})`
          : ""
      }
    >
      <foreignObject
        x={x === "centre" ? sw / 2 - w / 2 : x}
        y={y === "centre" ? sh / 2 - h / 2 : y}
        width={w}
        height={h}
      >
        <div className="shape-label-wrapper">
          <div className="shape-label">{shape.locale.en.title}</div>
        </div>
      </foreignObject>
    </g>
  );
};

export default ShapeLabel;
