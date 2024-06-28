import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import Header from "./Header";
import Footer from "./Footer";

const CodeEditorWrapper: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("javascript");
  const [selectedTheme, setSelectedTheme] = useState<string>("vs"); // Default theme

  const availableLanguages = [
    { name: "JavaScript", value: "javascript" },
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

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Header
        availableLanguages={availableLanguages}
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
        selectedTheme={selectedTheme}
        handleThemeChange={handleThemeChange}
      />
      <div className="fixed top-20 bottom-10 left-0 right-0 flex-grow overflow-hidden">
        <CodeEditor
          selectedLanguage={selectedLanguage}
          selectedTheme={selectedTheme}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CodeEditorWrapper;
