import React from "react";
import DropdownField from "./DropdownField";
import { Button } from "./Button";

interface HeaderProps {
  availableLanguages: { name: string; value: string }[]; // Array of available languages with name and value
  selectedLanguage: string; // Currently selected language
  handleLanguageChange: (language: string) => void; // Function to handle language change
  availableThemes: { name: string; value: string }[]; // Array of available themes with name and value
  selectedTheme: string; // Currently selected theme
  handleThemeChange: (theme: string) => void; // Function to handle theme change
  handleCopy: () => void; // Function to copy code to clipboard
  handleDownload: () => void; // Function to download code as a file
}

const Header: React.FC<HeaderProps> = ({
  availableLanguages,
  selectedLanguage,
  handleLanguageChange,
  availableThemes,
  selectedTheme,
  handleThemeChange,
  handleCopy,
  handleDownload,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-200 shadow-lg py-1 px-4 h-16 border border-gray-400">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left section: Select a Language */}
        <div className="w-48">
          <div className="mb-1">
            <h3 className="shadow-lg pb-1 text-center text-xs font-bold text-gray-900">
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
              className="w-full bg-white hover:bg-gray-200 hover:cursor-pointer mb-4 h-8 border border-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={selectedLanguage} // Currently selected language value
            />
          </div>
        </div>

        {/* Center section: Title and description */}
        <div className="text-center flex-grow">
          <h2 className="text-2xl font-extrabold text-gray-900">Code Editor</h2>
        </div>

        {/* Right section: Select a Theme */}
        <div className="flex items-center space-x-2">
          <div className="w-48">
            <div className="mb-1">
              <h3 className="pb-1 text-center text-xs font-bold text-gray-900">
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
                className="bg-white hover:bg-gray-200 hover:border-gray-500 hover:cursor-pointer w-full mb-4 h-8 border border-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={selectedTheme} // Currently selected theme value
              />
            </div>
          </div>
          <div className="pl-6 pb-1">
            {/* Copy Button */}
            <Button
              onClick={() => {
                handleCopy();
              }}
              label="Copy Code"
              bgColor="bg-blue-500"
              hoverColor="hover:bg-blue-600"
              // className="text-sm py-1 px-2"
            />

            {/* Download Button */}
            <Button
              onClick={() => handleDownload()}
              label="Download"
              bgColor="bg-green-500"
              hoverColor="hover:bg-green-600"
              // className="text-sm py-1 px-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
