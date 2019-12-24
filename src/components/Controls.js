import React from "react";

const Controls = ({ refresh, changeType }) => {
  const displayTypes = {
    arrows: "Arrows",
    honeycomb: "Honeycomb",
    pyramid: "Pyramid",
    cycle: "Cycle",
    arc: "Arc",
    matrix: "Matrix",
    pie: "Pie Chart"
  };
  return (
    <div className="controls">
      <select onChange={changeType}>
        {Object.keys(displayTypes).map(key => (
          <option key={key} value={key}>
            {displayTypes[key]}
          </option>
        ))}
      </select>
      <button className="btn-refresh" onClick={refresh}>
        Refresh
      </button>
    </div>
  );
};

export default Controls;
