import React from "react";
import Icon from "./Icon";

const shape = props => {
  const showAlert = () => alert("Content");
  return (
    <g className="shape" onClick={showAlert}>
      <Icon
        id={`icon1`}
        x={100}
        y={150}
        w={50}
        h={50}
        icon={require("../icon.svg")}
      />
    </g>
  );
};

export default shape;
