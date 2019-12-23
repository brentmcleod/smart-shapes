import React, { useState } from "react";
import { useData } from "./hooks/useData";
import SmartDiagram from "./components/SmartDiagram";
import FlyoutContent from "./components/FlyoutContent";
import Controls from "./components/Controls";

function App() {
  const [id, setId] = useState(1);
  const [data, layouts, loading] = useData();
  const [content, setContent] = useState(null);

  const handleRefresh = () => setId(id + 1);
  const handleShowContent = content => setContent(content);
  const handleHideContent = () => setContent(null);

  return (
    <div className="App">
      <Controls refresh={handleRefresh} />
      {!loading && (
        <SmartDiagram
          key={id}
          screen={data.screens[0]}
          layout={layouts[data.screens[0].screen_display_type]}
          showContent={handleShowContent}
        />
      )}
      <FlyoutContent content={content} hideContent={handleHideContent} />
    </div>
  );
}

export default App;
