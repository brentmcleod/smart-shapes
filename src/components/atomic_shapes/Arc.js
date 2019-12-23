import React from "react";

const Arc = ({ cx, cy, radius, arc }) => {
  const startAngle = 0 - arc / 2,
    endAngle = arc - arc / 2,
    longArc = endAngle - startAngle > 180 ? "1" : "0";

  const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
  const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
  const x2 = cx + radius * Math.cos((Math.PI * endAngle) / 180);
  const y2 = cy + radius * Math.sin((Math.PI * endAngle) / 180);

  return (
    <path
      className="arc"
      d={`M${x1},${y1} A${radius},${radius} 0 ${longArc},1 ${x2},${y2}`}
      fill="none"
    />
  );
};

export default Arc;
