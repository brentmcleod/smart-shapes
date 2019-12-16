import React from "react";

const icon = ({ id, x, y, w, h, ...props }) => {
  const iconW = w * props.scaleIcon,
    iconH = h * props.scaleIcon,
    iconX = 0 + (w - iconW) / 2,
    iconY = 0 + (h - iconH) / 2;

  return (
    <svg
      x={x}
      y={y}
      width={`${w * props.scale}`}
      height={`${(h + props.stemLength) * props.scale}`}
      viewBox={`0 0 ${w} ${h + props.stemLength}`}
    >
      <defs>
        <pattern
          id={`icon${id}`}
          x={iconX}
          y={iconY}
          width={iconW}
          height={iconH}
          patternUnits="userSpaceOnUse"
        >
          <image
            href={props.shape.assets.icon.src}
            width={iconW}
            height={iconH}
          />
        </pattern>
      </defs>
      <g className="shape-icon">
        {props.stemLength > 0 && (
          <rect
            x={w / 2 - props.stemWidth}
            y={h}
            width={props.stemWidth}
            height={props.stemLength}
          />
        )}
        {props.background === "rectangle" ? (
          <rect width={w} height={h} />
        ) : props.background === "circle" ? (
          <circle cx={w / 2} cy={w / 2} r={w / 2} />
        ) : null}
        <rect
          x={iconX}
          y={iconY}
          width={iconW}
          height={iconH}
          fill={`url(#icon${id})`}
        />
      </g>
    </svg>
  );
};

export default icon;
