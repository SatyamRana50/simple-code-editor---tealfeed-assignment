import React, { ChangeEvent } from "react";

interface CustomInputProps {
  value: string; // Current value of the input
  onChange: (value: string) => void; // Function to handle value change
  placeholder?: string; // Optional placeholder text
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "Type your code here...", // Default placeholder text
}) => {
  // Function to handle input changes
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value); // Call onChange function with updated value
  };

  return (
    <textarea
      value={value} // Bind input value to the provided value prop
      onChange={handleChange} // Call handleChange function on input change
      className="w-full h-60 p-6 bg-white text-gray-900 placeholder-gray-500 border focus:outline-none focus:ring-2 font-mono text-sm resize-none rounded-lg custom-scrollbar shadow-lg" // Styling classes for textarea
      placeholder={placeholder} // Placeholder text displayed when textarea is empty
      style={{ caretColor: "#007ACC" }} // Custom caret color style
    />
  );
};

export default CustomInput;
