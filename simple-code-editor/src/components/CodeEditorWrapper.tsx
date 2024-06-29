import React, { useState } from "react";

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
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("javascript");
  const [selectedTheme, setSelectedTheme] = useState<string>("vs"); // Default theme

  // Available languages and themes data
  const availableLanguages = [
    { name: "JavaScript (default)", value: "javascript" },
    { name: "Python", value: "python" },
    { name: "Java", value: "java" },
    { name: "C++", value: "cpp" },
    { name: "Ruby", value: "ruby" },
    { name: "TypeScript", value: "typescript" },
    { name: "Swift", value: "swift" },
    { name: "Go", value: "go" },
    { name: "Rust", value: "rust" },
    { name: "Kotlin", value: "kotlin" },
  ];

  const availableThemes = [
    { name: "vs (default)", value: "vs" },
    { name: "Darcula", value: "darcula" },
    { name: "AtomDark", value: "atomDark" },
  ];

  // Function to handle language change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language); // Update selectedLanguage state
  };

  // Function to handle theme change
  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme); // Update selectedTheme state
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Render Header component with props */}
      <Header
        availableLanguages={availableLanguages}
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
        availableThemes={availableThemes}
        selectedTheme={selectedTheme}
        handleThemeChange={handleThemeChange}
      />

      {/* Container for CodeEditor component */}
      <div className="fixed top-20 bottom-10 left-0 right-0 flex-grow overflow-hidden">
        <CodeEditor
          selectedLanguage={selectedLanguage}
          selectedTheme={selectedTheme}
        />
      </div>

      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default CodeEditorWrapper;
