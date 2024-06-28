import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import the desired dark theme

interface CustomSyntaxHighlighterProps {
  code: string;
  language: string;
}

const CustomSyntaxHighlighter: React.FC<CustomSyntaxHighlighterProps> = ({
  code,
  language,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vs}
      className="w-full h-80 p-6 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 font-mono text-sm resize-none rounded-lg shadow-lg custom-scrollbar custom-scrollbar-thumb bg-gray-300 hover:bg-gray-400"
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CustomSyntaxHighlighter;
