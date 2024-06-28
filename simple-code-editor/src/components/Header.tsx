import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-100 shadow-md py-1 text-center">
      <h2 className="text-2xl font-extrabold text-gray-900">Code Editor</h2>
      <p className="mt-0.5 text-sm text-gray-500">
        Write and highlight your code in various programming languages.
      </p>
    </header>
  );
};

export default Header;
