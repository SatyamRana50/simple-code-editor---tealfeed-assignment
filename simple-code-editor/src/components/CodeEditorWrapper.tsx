import React from "react";
import CodeEditor from "./CodeEditor";
import Header from "./Header";
import Footer from "./Footer";

const CodeEditorWrapper: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Header />
      <div className="fixed top-20 bottom-10 left-0 right-0 flex-grow overflow-hidden">
        <CodeEditor />
      </div>
      <Footer />
    </div>
  );
};

export default CodeEditorWrapper;
