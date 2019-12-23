import React from "react";

const Controls = ({ refresh }) => {
  return (
    <div className="controls">
      <button className="btn-action" onClick={refresh}>
        Refresh
      </button>
    </div>
  );
};

export default Controls;
