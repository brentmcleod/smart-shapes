import React from "react";

const DiagramLabel = ({ x, y, w, h, rx = 0, ax = 0, rotate = 0, ...props }) => {
  return (
    <g
      className="diagram-label-group"
      transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}
    >
      {props.background === "rectangle" && (
        <rect x={x} y={y} width={w} height={h} rx={rx} />
      )}
      {props.background === "axis" && (
        <path
          d={`M ${x},${y} h ${w} l ${ax},${h / 2} l -${ax},${h / 2} h -${w} z`}
        />
      )}
      <foreignObject x={x} y={y} width={w} height={h}>
        <div className="diagram-label-wrapper">
          <div className="diagram-label">{props.label}</div>
        </div>
      </foreignObject>
    </g>
  );
};

export default DiagramLabel;
