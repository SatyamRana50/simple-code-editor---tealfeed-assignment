import React, { useState } from "react";
import {
  availableLanguages,
  availableThemes,
  selectBackgroundColor,
} from "../../utils/helpers";

interface CodeEditorWrapperProps {
  Header: React.FC<any>; // Props for Header component
  CodeEditor: React.FC<any>; // Props for CodeEditor component
  Footer: React.FC<any>; // Props for Footer component
}

const CodeEditorWrapper: React.FC<CodeEditorWrapperProps> = ({
  Header,
  CodeEditor,
  Footer,
}) => {
  // State hooks for selected language and theme
  const [selectedLanguage, setSelectedLanguage] = useState<string>("jsx");
  const [selectedTheme, setSelectedTheme] = useState<string>("vsDark"); // Default theme
  const [bgColor, setBgColor] = useState<string>("#1E1E1E"); // Default theme
  const [codeInWrapper, setCodeInWrapper] = useState<string>(""); // access the code from codeInput

  // Function to handle language change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language); // Update selectedLanguage state
  };

  // Function to handle theme change
  const handleThemeChange = (theme: string) => {
    setBgColor(selectBackgroundColor(theme)); // Update background color
    setSelectedTheme(theme); // Update selectedTheme state
  };

  // Function to copy code to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeInWrapper)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  // Function to download code as a file
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([codeInWrapper], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "code.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen flex flex-col overflow-hidden"
    >
      {/* Render Header component with props */}
      <Header
        availableLanguages={availableLanguages}
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
        availableThemes={availableThemes}
        selectedTheme={selectedTheme}
        handleThemeChange={handleThemeChange}
        handleCopy={handleCopy}
        handleDownload={handleDownload}
      />

      {/* Container for CodeEditor component */}
      <div className="fixed top-20 bottom-10 left-0 right-0 flex-grow overflow-hidden">
        <CodeEditor
          selectedLanguage={selectedLanguage}
          selectedTheme={selectedTheme}
          setCodeInWrapper={setCodeInWrapper}
        />
      </div>

      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default CodeEditorWrapper;
