import React from "react";

import CodeEditorWrapper from "./components/CodeEditorWrapper";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <HomePage />
    </div>
  );
};

export default App;
