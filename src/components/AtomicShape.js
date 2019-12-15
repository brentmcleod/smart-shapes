import React from "react";
import Arrow from "./atomic_shapes/Arrow";

const atomicShapes = {
  Arrow
};

const AtomicShape = props => {
  const ShapeWrapper = atomicShapes[props.type];
  return <ShapeWrapper {...props} />;
};

export default AtomicShape;
