import React from "react";

const Wedge = ({ x, y, degrees, scale }) => {
  const startPointX = 50,
    startPointY = 50,
    startAngle = 0 - (90 + degrees / 2),
    endAngle = degrees - (90 + degrees / 2),
    radius = 50,
    longArc = endAngle - startAngle > 180 ? "1" : "0";

  const x1 = startPointX + radius * Math.cos((Math.PI * startAngle) / 180);
  const y1 = startPointY + radius * Math.sin((Math.PI * startAngle) / 180);
  const x2 = startPointX + radius * Math.cos((Math.PI * endAngle) / 180);
  const y2 = startPointY + radius * Math.sin((Math.PI * endAngle) / 180);

  return (
    <svg
      x={x}
      y={y}
      width={`${100 * scale}`}
      height={`${100 * scale}`}
      viewBox={`0 0 ${100} ${100}`}
    >
      <path
        className="wedge"
        d={`M${startPointX},${startPointY} L${x1},${y1} A${radius},${radius} 0 ${longArc},1 ${x2},${y2} z`}
      />
    </svg>
  );
};

export default Wedge;
