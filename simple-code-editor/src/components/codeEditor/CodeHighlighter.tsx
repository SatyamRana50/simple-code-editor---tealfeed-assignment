import React, { useEffect, useRef } from "react";
import { selectBackgroundColor } from "../../utils/helpers";
import { Highlighter } from "../ui-components/Highlighter";

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
      <Highlighter code={code} language={language} theme={theme} />
    </div>
  );
};

export default CustomSyntaxHighlighter;
