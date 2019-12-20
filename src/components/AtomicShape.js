import React from "react";
import Arrow from "./atomic_shapes/Arrow";
import Circle from "./atomic_shapes/Circle";
import CycleArrow from "./atomic_shapes/CycleArrow";
import Hexagon from "./atomic_shapes/Hexagon";
import Rectangle from "./atomic_shapes/Rectangle";
import Triangle from "./atomic_shapes/Triangle";
import Wedge from "./atomic_shapes/Wedge";

const atomicShapes = {
  Arrow,
  Circle,
  CycleArrow,
  Hexagon,
  Rectangle,
  Triangle,
  Wedge
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
