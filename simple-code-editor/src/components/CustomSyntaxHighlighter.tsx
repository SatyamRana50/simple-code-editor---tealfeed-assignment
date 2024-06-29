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

  // Automatically scroll to bottom when code changes
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

  // Function to select the background color based on the theme
  const selectBackgroundColor = () => {
    switch (theme) {
      case "vs":
        return "#ffffff"; // White background for VS theme
      case "darcula":
        return "#2b2b2b"; // Dark background for Darcula theme
      case "atomDark":
        return "#1e1e1e"; // Slightly lighter black background for Atom Dark theme
      default:
        return "#ffffff"; // Default to white background
    }
  };

  return (
    <div
      ref={ref}
      className="w-full h-80 mt-4 px-2 rounded-lg shadow-lg overflow-auto custom-scrollbar"
      style={{
        backgroundColor: selectBackgroundColor(), // Dynamically select background color based on theme
        border: "none", // Remove border
        outline: "none", // Remove outline
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Enhanced shadow effect
        overflowX: "auto", // Allow horizontal scrolling
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={selectTheme()} // Dynamically select theme style
        className="bg-transparent text-gray-900 font-mono text-sm resize-none"
        customStyle={{ border: "none", boxShadow: "none", outline: "none" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CustomSyntaxHighlighter;
