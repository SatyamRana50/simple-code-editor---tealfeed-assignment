import React from "react";
import CodeEditorWrapper from "../components/CodeEditorWrapper";
import Header from "../components/Header";
import CodeEditor from "../components/CodeEditor";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <CodeEditorWrapper
      Header={Header}
      CodeEditor={CodeEditor}
      Footer={Footer}
    />
  );
};

export default HomePage;
