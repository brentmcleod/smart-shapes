import React from "react";

const Arrow = ({
  x,
  y,
  shaftLength,
  shaftWidth,
  headLength,
  headWidth,
  scale = 1
}) => {
  const bBoxWidth = shaftLength + headLength;
  const bBoxHeight = headWidth;
  const overhang = (headWidth - shaftWidth) / 2;

  return (
    <svg
      x={x}
      y={y}
      width={`${bBoxWidth * scale}`}
      height={`${bBoxHeight * scale}`}
      viewBox={`0 0 ${bBoxWidth} ${bBoxHeight}`}
    >
      <path
        d={`M 0,${overhang} h ${shaftLength} v -${overhang} l ${headLength},${headWidth /
          2} l -${headLength},${headWidth /
          2} v -${overhang} h -${shaftLength} z`}
      />
    </svg>
  );
};

export default Arrow;
