import React, { useState } from "react";
import Input from "./Input";
import CustomSyntaxHighlighter from "./CustomSyntaxHighlighter";

interface CodeEditorProps {
  selectedLanguage: string;
  selectedTheme: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ selectedLanguage, selectedTheme}) => {
  const [code, setCode] = useState<string>("");

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className="container mx-auto px-2 py-1 h-screen flex flex-col">
      <Input value={code} onChange={handleChange} />
      <CustomSyntaxHighlighter code={code} language={selectedLanguage} theme={selectedTheme} />
    </div>
  );
};

export default CodeEditor;
