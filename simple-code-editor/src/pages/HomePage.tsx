import React from "react";
import CodeEditorWrapper from "../components/wrapper-components/CodeEditorWrapper";
import Header from "../components/ui-components/Header";
import CodeEditor from "../components/codeEditor";
import Footer from "../components/ui-components/Footer";

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
