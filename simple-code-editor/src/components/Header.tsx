import React from "react";
import DropdownField from "./DropdownField";

interface HeaderProps {
  availableLanguages: { name: string; value: string }[]; // Array of available languages with name and value
  selectedLanguage: string; // Currently selected language
  handleLanguageChange: (language: string) => void; // Function to handle language change
  availableThemes: { name: string; value: string }[]; // Array of available themes with name and value
  selectedTheme: string; // Currently selected theme
  handleThemeChange: (theme: string) => void; // Function to handle theme change
}

const Header: React.FC<HeaderProps> = ({
  availableLanguages,
  selectedLanguage,
  handleLanguageChange,
  availableThemes,
  selectedTheme,
  handleThemeChange,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-slate-200 shadow-md py-1 px-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left section: Select a Language */}
        <div className="w-48">
          <div className="mb-1">
            <h3 className="mt-1 pb-1 text-center text-xs font-semibold text-gray-700">
              Select a Language
            </h3>
            {/* DropdownField component for selecting a language */}
            <DropdownField
              name="language"
              data={availableLanguages}
              onChange={(e) => handleLanguageChange(e.target.value)}
              labelKey="name"
              valueKey="value"
              placeholder="select a language"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedLanguage} // Currently selected language value
            />
          </div>
        </div>

        {/* Center section: Title and description */}
        <div className="text-center flex-grow">
          <h2 className="text-2xl font-extrabold text-gray-900">Code Editor</h2>
          <p className="mt-1 text-lg text-gray-500">
            Write and highlight your code in various programming languages.
          </p>
        </div>

        {/* Right section: Select a Theme */}
        <div className="w-48">
          <div className="mb-1">
            <h3 className="mt-1 pb-1 text-center text-xs font-semibold text-gray-700">
              Select a Theme
            </h3>
            {/* DropdownField component for selecting a theme */}
            <DropdownField
              name="theme"
              data={availableThemes}
              onChange={(e) => handleThemeChange(e.target.value)}
              labelKey="name"
              valueKey="value"
              placeholder="select a theme"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedTheme} // Currently selected theme value
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
