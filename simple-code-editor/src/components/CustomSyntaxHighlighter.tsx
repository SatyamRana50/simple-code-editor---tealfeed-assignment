import React, { useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  darcula,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism"; // Import available themes

interface CustomSyntaxHighlighterProps {
  code: string;
  language: string;
  theme: string;
}

const CustomSyntaxHighlighter: React.FC<CustomSyntaxHighlighterProps> = ({
  code,
  language,
  theme,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [code]);

  // Function to select the appropriate theme based on the prop
  const selectTheme = () => {
    switch (theme) {
      case "vs":
        return vs;
      case "darcula":
        return darcula;
      case "atomDark":
        return atomDark;
      default:
        return vs; // Default theme
    }
  };

  return (
    <div
      ref={ref}
      className="w-full h-80 mt-2 px-2 bg-white rounded-lg shadow-lg overflow-auto custom-scrollbar"
      style={{ border: "none", outline: "none" }}
    >
      <SyntaxHighlighter
        language={language}
        style={selectTheme()}
        className="bg-transparent text-gray-900 font-mono text-sm resize-none"
        customStyle={{ border: "none", boxShadow: "none", outline: "none" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CustomSyntaxHighlighter;
