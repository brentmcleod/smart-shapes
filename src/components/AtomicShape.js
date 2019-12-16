import React from "react";
import Arrow from "./atomic_shapes/Arrow";
import Wedge from "./atomic_shapes/Wedge";

const atomicShapes = {
  Arrow,
  Wedge
};

const AtomicShape = props => {
  const ShapeWrapper = atomicShapes[props.type];
  return <ShapeWrapper {...props} />;
};

export default AtomicShape;
