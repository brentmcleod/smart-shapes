import React from "react";
import { useData } from "./hooks/useData";
import SmartDiagram from "./components/SmartDiagram";

function App() {
  const [data, layouts, loading] = useData();
  return (
    <div className="App">
      {!loading && (
        <SmartDiagram
          screen={data.screens[0]}
          layout={layouts[data.screens[0].screen_display_type]}
        />
      )}
    </div>
  );
}

export default App;
