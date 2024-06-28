import React from "react";

import CodeEditorWrapper from "./components/CodeEditorWrapper";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CodeEditorWrapper />
    </div>
  );
};

export default App;
