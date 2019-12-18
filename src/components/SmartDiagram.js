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
    layout.transforms.use_rotate ? 360 / shapes.length : 0,
    layout.transforms.use_rotate ? 360 / shapes.length / 2 : 0,
    layout.transforms.rotate
  );

  const handleClick = id => id === current && setCurrent(current + 1);

  return (
    <svg viewBox={`0 0 ${layout.w} ${layout.h}`}>
      {shapes.map((shape, index) => (
        <SmartShape
          key={index}
          id={index}
          current={current}
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
