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

const SmartShape = ({ id, shape, layout, ...props }) => {
  const { x, y, w, h } = layout;
  return (
    <g
      className={
        "shape " +
        (id < props.current
          ? "complete"
          : id === props.current
          ? "not-started active"
          : "not-started disabled")
      }
      transform={`translate(${layout.translate}) rotate(${layout.rotate} ${x +
        w / 2} ${y + h / 2})`}
    >
      <svg onClick={() => props.onClick(id)}>
        {layout.assets.map(asset => {
          const AssetWrapper = assets[asset.type];
          return (
            <AssetWrapper
              key={asset.type + id}
              {...{
                id,
                shape,
                degrees: layout.degrees,
                rotate: layout.rotate,
                ...asset.props
              }}
            />
          );
        })}
      </svg>
    </g>
  );
};

export default SmartShape;
