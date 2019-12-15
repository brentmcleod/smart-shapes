import React, { useState } from "react";
import SmartShape from "./SmartShape";

const SmartDiagram = ({ layout, shapes, shapeLayout }) => {
  const [current, setCurrent] = useState(0);
  const handleClick = () => setCurrent(current + 1);

  return (
    <svg width="100%" height="240">
      {shapes.map((shape, index) => (
        <SmartShape
          key={index}
          id={index}
          current={current}
          shape={shape}
          layout={shapeLayout}
          onClick={handleClick}
        />
      ))}
    </svg>
  );
};

export default SmartDiagram;
