import React, { useState } from "react";
import { plotTransform } from "../utils/utils";
import AtomicShape from "./AtomicShape";
import DiagramLabel from "./DiagramLabel";
import Icon from "./Icon";
import Indicator from "./Indicator";
import ShapeLabel from "./ShapeLabel";

const assets = {
  AtomicShape,
  DiagramLabel,
  Icon,
  Indicator,
  ShapeLabel
};

const SmartDiagram = ({ screen, layout }) => {
  const [current, setCurrent] = useState(0);
  const shapes = screen.sub_screens.slice(0, layout.max_shapes);
  const transform = plotTransform(
    layout.transform,
    layout.shape.w,
    layout.shape.h,
    shapes.length,
    layout.shape.margin
  );

  const handleClick = id => id === current && setCurrent(current + 1);

  return (
    <svg viewBox={`0 0 ${layout.canvas.w} ${layout.canvas.h}`}>
      <g className="background-assets">
        {layout.other_assets.map((asset, id) => {
          const AssetWrapper = assets[asset.type];
          return <AssetWrapper key={"bg-asset" + id} {...asset.props} />;
        })}
      </g>
      {shapes.map((shape, id) => (
        <g
          key={"shape" + id}
          className={
            "shape " +
            screen.screen_display_type +
            (id < current
              ? " complete"
              : id === current
              ? " not-started active"
              : " not-started disabled")
          }
          transform={`${transform.type}(${transform.values[id]}${
            transform.type === "rotate" ? " " + transform.pivot : ""
          })`}
        >
          <g
            transform={
              transform.type === "rotate" && transform.counter_at === "shape"
                ? `rotate(-${transform.values[id]} ${transform.counter_pivot})`
                : ""
            }
          >
            <svg
              x={layout.shape.x}
              y={layout.shape.y}
              onClick={() => handleClick(id)}
            >
              {layout.shape.assets.map((asset, index) => {
                const AssetWrapper = assets[asset.type];
                return (
                  <AssetWrapper
                    key={"shape" + id + "-asset" + index}
                    {...{
                      id,
                      shape,
                      sw: layout.shape.w,
                      sh: layout.shape.h,
                      transform,
                      degrees: 360 / shapes.length,
                      ...asset.props
                    }}
                  />
                );
              })}
            </svg>
          </g>
        </g>
      ))}
    </svg>
  );
};

export default SmartDiagram;
