import React, { useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { selectBackgroundColor, selectTheme } from "../../utils/helpers";

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

  // Automatically scroll to bottom when code changes
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [code]);

  return (
    <div
      ref={ref}
      className="w-full h-80 mt-4 px-2 rounded-lg shadow-lg overflow-auto custom-scrollbar"
      style={{
        backgroundColor: selectBackgroundColor(theme), // Dynamically select background color based on theme
        border: "none", // Remove border
        outline: "none", // Remove outline
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Enhanced shadow effect
        overflowX: "auto", // Allow horizontal scrolling
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={selectTheme(theme)} // Dynamically select theme style
        className="bg-transparent text-gray-900 font-mono text-sm resize-none"
        customStyle={{ border: "none", boxShadow: "none", outline: "none" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CustomSyntaxHighlighter;
