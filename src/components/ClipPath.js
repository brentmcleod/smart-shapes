import React from "react";

const ClipPath = ({ y3, cx, cy, radius, arc }) => {
  const startAngle = 0 - arc / 2,
    endAngle = arc - arc / 2,
    longArc = endAngle - startAngle > 180 ? "1" : "0";

  const x1 = cx + radius * Math.cos((Math.PI * startAngle) / 180);
  const y1 = cy + radius * Math.sin((Math.PI * startAngle) / 180);
  const x2 = cx + radius * Math.cos((Math.PI * endAngle) / 180);
  const y2 = cy + radius * Math.sin((Math.PI * endAngle) / 180);

  return (
    <clipPath id="clipping-path">
      <path
        d={`M0,0 L${x1},${y1} A${radius},${radius} 0 ${longArc},1 ${x2},${y2} L0,${y3} Z`}
      />
    </clipPath>
  );
};

export default ClipPath;
