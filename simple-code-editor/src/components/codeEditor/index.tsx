import React, { useState, useRef } from "react";
import CustomInput from "./CodeInput";
import CustomSyntaxHighlighter from "./CodeHighlighter";

interface CodeEditorProps {
  selectedLanguage: string;
  selectedTheme: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  selectedLanguage,
  selectedTheme,
}) => {
  const [code, setCode] = useState<string>("");
  const scrollRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className="relative w-full h-80 mt-4 rounded-lg shadow-lg">
      {/* Highlighted code */}
      <CustomSyntaxHighlighter
        code={code}
        language={selectedLanguage}
        theme={selectedTheme}
        scrollRef={scrollRef}
      />

      {/* Text input area */}
      <CustomInput value={code} onChange={handleChange} scrollRef={scrollRef} />
    </div>
  );
};

export default CodeEditor;
