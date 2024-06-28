import React from "react";
import DropdownField from "./DropdownField";

interface HeaderProps {
  availableLanguages: { name: string; value: string }[];
  selectedLanguage: string;
  handleLanguageChange: (language: string) => void;
  selectedTheme: string;
  handleThemeChange: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  availableLanguages,
  selectedLanguage,
  handleLanguageChange,
  selectedTheme,
  handleThemeChange,
}) => {
  const availableThemes = [
    { name: "vs", value: "vs" },
    { name: "Darcula", value: "darcula" },
    { name: "AtomDark", value: "atomDark" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-100 shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="w-48">
          <DropdownField
            name="language"
            data={availableLanguages}
            onChange={(e) => handleLanguageChange(e.target.value)}
            labelKey="name"
            valueKey="value"
            placeholder="Select a language"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            // value={selectedLanguage}
          />
        </div>
        <div className="text-center flex-grow">
          <h2 className="text-2xl font-extrabold text-gray-900">Code Editor</h2>
          <p className="mt-1 text-lg text-gray-500">
            Write and highlight your code in various programming languages.
          </p>
        </div>
        <div className="w-48">
          <DropdownField
            name="theme"
            data={availableThemes}
            onChange={(e) => handleThemeChange(e.target.value)}
            labelKey="name"
            valueKey="value"
            placeholder="Select a theme"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            // value={selectedTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
