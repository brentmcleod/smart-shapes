import React from "react";
import { useData } from "./hooks/useData";
import SmartDiagram from "./components/SmartDiagram";

function App() {
  const [data, layouts, loading] = useData();
  return (
    <div className="App">
      {!loading && (
        <SmartDiagram
          layout={layouts.diagramLayout[data.screens[0].screen_display_type]}
          shapes={data.screens[0].sub_screens}
          shapeLayout={layouts.shapeLayout[data.screens[0].screen_display_type]}
        />
      )}
    </div>
  );
}

export default App;
