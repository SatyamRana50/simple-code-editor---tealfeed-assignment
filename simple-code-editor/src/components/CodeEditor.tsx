import React, { useState } from "react";
import Input from "./Input";
import CustomSyntaxHighlighter from "./CustomSyntaxHighlighter";
import DropdownField from "./DropdownField";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("javascript");

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

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className="container mx-auto px-2 py-1 h-screen flex flex-col">
      {/* <div className="flex justify-between items-center mb-4">
        <DropdownField
          name="language"
          data={availableLanguages}
          onChange={(e) => handleLanguageChange(e.target.value)}
          labelKey="name"
          valueKey="value"
          placeholder="Select a language"
          className="w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div> */}
      <Input value={code} onChange={handleChange} />
      <CustomSyntaxHighlighter code={code} language={selectedLanguage} />
    </div>
  );
};

export default CodeEditor;
