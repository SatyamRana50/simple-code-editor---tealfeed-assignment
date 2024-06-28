import React, { ChangeEvent } from "react";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "Type your code here...",
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      className="w-full h-60 p-6 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 font-mono text-sm resize-none rounded-lg shadow-lg custom-scrollbar"
      placeholder={placeholder}
      style={{ caretColor: "#007ACC" }}
    />
  );
};
export default CustomInput;
