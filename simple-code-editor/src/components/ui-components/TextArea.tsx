import React, { ChangeEvent } from "react";

interface TextAreaProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number | null;
  name?: string;
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows,
  name,
  label,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-1 text-normal text-gray-700 font-semibold"
      >
        {label}
      </label>
      <textarea
        value={value}
        id={name}
        onChange={onChange}
        className="w-full h-60 p-4 bg-white text-gray-900 placeholder-gray-500 border focus:outline-none focus:ring-2 font-mono text-sm resize-none rounded-lg custom-scrollbar shadow-lg"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};
