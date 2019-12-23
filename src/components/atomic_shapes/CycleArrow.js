import React from "react";

const CycleArrow = ({
  x = 0,
  y = 0,
  degrees = 350,
  offset = 17,
  scale = 1
}) => {
  const centrePointX = 50,
    centrePointY = 50,
    startAngle = 0 - 90 - offset,
    endAngle = degrees - 90 - offset,
    radius = 40,
    longArc = endAngle - startAngle > 180 ? "1" : "0";

  const x1 = centrePointX + radius * Math.cos((Math.PI * startAngle) / 180);
  const y1 = centrePointY + radius * Math.sin((Math.PI * startAngle) / 180);
  const x2 = centrePointX + radius * Math.cos((Math.PI * endAngle) / 180);
  const y2 = centrePointY + radius * Math.sin((Math.PI * endAngle) / 180);

  return (
    <svg
      x={x}
      y={y}
      width={`${100 * scale}`}
      height={`${100 * scale}`}
      viewBox={`0 0 ${100} ${100}`}
    >
      <g className="cycle-arrow-group">
        <defs>
          <marker
            id="arrowhead"
            viewBox="0 0 4 6"
            refX="2"
            refY="3"
            markerWidth={2}
            markerHeight={2}
            orient="auto-start-reverse"
            strokeWidth="0"
          >
            <path d="M 0 0 L 4 3 L 0 6 z" />
          </marker>
        </defs>
        <path
          className="cycle-arrow"
          d={`M${x1},${y1} A${radius},${radius} 0 ${longArc},1 ${x2},${y2}`}
          markerEnd="url(#arrowhead)"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
};

export default CycleArrow;
