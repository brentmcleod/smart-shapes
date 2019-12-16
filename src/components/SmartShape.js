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
  return (
    <svg onClick={() => props.onClick(id)}>
      <g
        className={
          "shape " +
          (id < props.current
            ? "complete"
            : id === props.current
            ? "not-started active"
            : "not-started disabled")
        }
        transform={`translate(${layout.translate}) rotate(${
          layout.rotate
        } ${layout.w / 2} ${layout.w / 2})`}
      >
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
      </g>
    </svg>
  );
};

export default SmartShape;
