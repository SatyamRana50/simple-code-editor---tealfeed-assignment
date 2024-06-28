import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CustomSyntaxHighlighterProps {
  code: string;
}

const CustomSyntaxHighlighter: React.FC<CustomSyntaxHighlighterProps> = ({
  code,
}) => {
  return (
    <SyntaxHighlighter language="javascript" style={vs}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CustomSyntaxHighlighter;
