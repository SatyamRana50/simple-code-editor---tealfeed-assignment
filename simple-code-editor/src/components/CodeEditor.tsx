import React, { useState } from "react";
import Input from "./Input";
import CustomSyntaxHighlighter from "./CustomSyntaxHighlighter";

interface CodeEditorProps {
  selectedLanguage: string; // Props received: selected programming language
  selectedTheme: string; // Props received: selected syntax highlighting theme
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  selectedLanguage,
  selectedTheme,
}) => {
  const [code, setCode] = useState<string>(""); // State to store the code entered by the user

  // Function to handle changes in the input code
  const handleChange = (value: string) => {
    setCode(value); // Update the code state with the new value entered by the user
  };

  return (
    <div className="container mx-auto px-2 py-1 h-screen flex flex-col">
      {/* Input component for users to enter code */}
      <Input value={code} onChange={handleChange} />

      {/* CustomSyntaxHighlighter component to display syntax-highlighted code */}
      <CustomSyntaxHighlighter
        code={code}
        language={selectedLanguage}
        theme={selectedTheme}
      />
    </div>
  );
};

export default CodeEditor;
