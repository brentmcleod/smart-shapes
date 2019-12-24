import React from "react";

const Controls = ({
  refresh,
  currentType,
  currentCount,
  changeType,
  changeCount
}) => {
  const displayTypes = {
    arrows: "Arrows",
    honeycomb: "Honeycomb",
    pyramid: "Pyramid",
    cycle: "Cycle",
    arc: "Arc",
    matrix: "Matrix",
    pie: "Pie Chart"
  };
  const countArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="controls">
      <select className="select-type" onChange={changeType}>
        {Object.keys(displayTypes).map(key => (
          <option key={key} value={key}>
            {displayTypes[key]}
          </option>
        ))}
      </select>
      <select
        className="select-count"
        value={currentCount}
        onChange={changeCount}
      >
        {currentType === "matrix" ? (
          <option value={4}>4</option>
        ) : (
          countArray.map(x => (
            <option key={x} value={x}>
              {x}
            </option>
          ))
        )}
      </select>
      <button className="btn-refresh" onClick={refresh}>
        Refresh
      </button>
    </div>
  );
};

export default Controls;
