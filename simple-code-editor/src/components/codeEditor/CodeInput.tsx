import React, { ChangeEvent, useRef } from "react";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  scrollRef: React.RefObject<HTMLTextAreaElement>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "Type your code here...",
  scrollRef,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      ref={scrollRef}
      className="absolute font-bold top-0 left-0 w-full h-full py-2 px-6 z-10 bg-transparent border-none outline-none caret-white resize-none custom-scrollbar"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      spellCheck="false"
      style={{ color: "transparent" }} // Hide the text
    />
  );
};

export default CustomInput;
