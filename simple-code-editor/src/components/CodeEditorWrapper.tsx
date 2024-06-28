import React from "react";
import CodeEditor from "./CodeEditor";
import Header from "./Header";
import Footer from "./Footer";

const CodeEditorWrapper: React.FC = () => {
  return (
    <div className="w-full flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-grow overflow-y-auto">
        <CodeEditor />
      </div>
      <Footer />
    </div>
  );
};

export default CodeEditorWrapper;
