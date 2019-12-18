import React from "react";
import Arrow from "./atomic_shapes/Arrow";
import Hexagon from "./atomic_shapes/Hexagon";
import Wedge from "./atomic_shapes/Wedge";

const atomicShapes = {
  Arrow,
  Wedge,
  Hexagon
};

const AtomicShape = props => {
  const ShapeWrapper = atomicShapes[props.type];
  return (
    <g className="atomic-shape">
      <ShapeWrapper {...props} />
    </g>
  );
};

export default AtomicShape;
