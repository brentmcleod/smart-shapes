import React from "react";
import AtomicShape from "./AtomicShape";
import Icon from "./Icon";
import Indicator from "./Indicator";
import Label from "./Label";

const assets = {
  AtomicShape,
  Icon,
  Indicator,
  Label
};

const SmartShape = ({ id, current, shape, layout, ...props }) => {
  return (
    <svg onClick={props.onClick}>
      <g
        className={
          "shape " +
          (id < current
            ? "complete"
            : id === current
            ? "not-started active"
            : "not-started disabled")
        }
        transform={`translate(${layout.svgViewBox.w * id})`}
      >
        {layout.assets.map(asset => {
          const AssetWrapper = assets[asset.type];
          return (
            <AssetWrapper
              key={asset.type + id}
              {...{ id, shape, ...asset.props }}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default SmartShape;
