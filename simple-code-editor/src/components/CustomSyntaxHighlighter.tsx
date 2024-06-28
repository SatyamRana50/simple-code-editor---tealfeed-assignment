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
    <SyntaxHighlighter language={language} style={vs}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CustomSyntaxHighlighter;
