import React, { useState } from "react";
import Input from "./Input";
import CustomSyntaxHighlighter from "./CustomSyntaxHighlighter"; // Assuming CustomSyntaxHighlighter component is in the same directory

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className="container mx-auto p-8 h-screen flex flex-col">
      <Input value={code} onChange={handleChange} />
      <div className="bg-gray-100 p-4 rounded shadow-lg overflow-auto max-h-[calc(100vh-300px)]">
        <CustomSyntaxHighlighter code={code} />
      </div>
    </div>
  );
};

export default CodeEditor;
