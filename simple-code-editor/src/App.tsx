import React from "react";
import CodeEditor from "./components/CodeEditor";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CodeEditor />
    </div>
  );
};

export default App;
