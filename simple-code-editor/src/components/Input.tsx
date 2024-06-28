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
      className="flex-1 w-full h-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm font-mono text-sm resize-none"
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
