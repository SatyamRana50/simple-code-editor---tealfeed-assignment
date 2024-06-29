import React from "react";

// Footer component displaying GitHub link, developer credit, and email contact
const Footer: React.FC = () => {
  return (
    <footer className="py-1 fixed bottom-0 left-0 right-0 z-10 bg-gray-100 shadow-md text-xs text-gray-500">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left section with GitHub link */}
        <div className="text-left">
          <a
            href="https://github.com/satyamrana50"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            GitHub: satyamrana50
          </a>
        </div>

        {/* Center section with developer credit */}
        <p>&copy; {new Date().getFullYear()} Developed by Satyam Chauhan</p>

        {/* Right section with email contact */}
        <div className="text-right">
          <a
            href="mailto:satyamrana50@gmail.com"
            className="text-gray-500 hover:text-gray-700"
          >
            Email: satyamrana50@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
