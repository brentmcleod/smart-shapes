import React from "react";

const Arrow = ({
  x,
  y,
  shaftLength,
  shaftWidth,
  headLength,
  headWidth,
  tailLength,
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
        className="arrow"
        d={`M 0,${overhang} h ${shaftLength} v -${overhang} l ${headLength},${headWidth /
          2} l -${headLength},${headWidth /
          2} v -${overhang} h -${shaftLength} l ${tailLength},${shaftWidth /
          2} z`}
      />
    </svg>
  );
};

export default Arrow;
