import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-1 fixed bottom-0 left-0 right-0 z-10 bg-gray-100 shadow-md text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
