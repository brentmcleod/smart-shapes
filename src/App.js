import React, { useState } from "react";
import { useData } from "./hooks/useData";
import SmartDiagram from "./components/SmartDiagram";
import FlyoutContent from "./components/FlyoutContent";
import Controls from "./components/Controls";

function App() {
  const [id, setId] = useState(1);
  const [data, layouts, loading] = useData();
  const [displayType, setDisplayType] = useState("arrows");
  const [shapeCount, setShapeCount] = useState(7);
  const [content, setContent] = useState(null);

  const handleRefresh = () => setId(id + 1);

  const handleShowContent = content => {
    document.body.classList.toggle("modal-open");
    setContent(content);
  };
  const handleHideContent = () => {
    document.body.classList.toggle("modal-open");
    setContent(null);
  };

  const handleChangeType = e => {
    setDisplayType(e.target.value);
    e.target.value === "matrix" ? setShapeCount(4) : setShapeCount(7);
    handleRefresh();
  };

  const handleChangeCount = e => {
    setShapeCount(e.target.value);
    handleRefresh();
  };

  return (
    <div className="App">
      <Controls
        refresh={handleRefresh}
        currentType={displayType}
        currentCount={shapeCount}
        changeType={handleChangeType}
        changeCount={handleChangeCount}
      />
      {!loading && (
        <SmartDiagram
          key={id}
          displayType={displayType}
          shapeCount={shapeCount}
          screen={data.screens[0]}
          layout={layouts[displayType]} //data.screens[0].screen_display_type
          showContent={handleShowContent}
        />
      )}
      <FlyoutContent content={content} hideContent={handleHideContent} />
    </div>
  );
}

export default App;
