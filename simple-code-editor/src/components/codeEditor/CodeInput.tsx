import React, { ChangeEvent, useState } from "react";
import { FiEye } from "react-icons/fi";
import { Button } from "../ui-components/Button";
import { TextArea } from "../ui-components/TextArea";

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
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleDownload = () => {
    alert("Download functionality to be implemented.");
  };

  const handleCopy = () => {
    alert("Copy functionality to be implemented.");
  };

  const toggleButtonsVisibility = () => {
    setButtonsVisible((prev) => !prev);
  };

  return (
    <div className="relative">

      <TextArea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
