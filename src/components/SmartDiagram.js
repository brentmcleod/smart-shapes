import React, { useState } from "react";
import { plotTranslate, plotRotate } from "../utils/utils";
import SmartShape from "./SmartShape";

const SmartDiagram = ({ layout, shapes, shapeLayout }) => {
  const [current, setCurrent] = useState(0);
  const plotPoints = plotTranslate(
    shapeLayout.w,
    shapeLayout.h,
    layout.transforms.translate
  );
  const rotations = plotRotate(
    360 / shapes.length,
    360 / shapes.length / 2,
    layout.transforms.rotate
  );

  const handleClick = id => id === current && setCurrent(current + 1);

  return (
    <svg width="524" height="524" viewBox={`0 0 ${layout.w} ${layout.h}`}>
      {shapes.map((shape, index) => (
        <SmartShape
          key={index}
          id={index}
          current={current}
          shapesCount={shapes.length}
          shape={shape}
          layout={{
            ...shapeLayout,
            degrees: 360 / shapes.length,
            translate: plotPoints[index],
            rotate: rotations[index]
          }}
          onClick={handleClick}
        />
      ))}
    </svg>
  );
};

export default SmartDiagram;
