import React, { useState, ChangeEvent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import the desired Prism style
// import { Prism as PrismSyntax } from 'prism-react-renderer';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="container mx-auto p-8">
      <textarea
        value={code}
        onChange={handleChange}
        className="w-full h-40 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm font-mono text-sm"
        placeholder="Type your code here..."
      />
      <SyntaxHighlighter language="javascript" style={vs}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
