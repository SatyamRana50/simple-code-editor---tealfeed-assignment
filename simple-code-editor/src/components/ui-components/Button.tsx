interface ButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  label: string;
  bgColor?: string;
  hoverColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled = false,
  label,
  bgColor = "bg-green-600",
  hoverColor = "hover:bg-green-700",
}) => {
  return (
    <button
      type={type ? type : "button"}
      disabled={disabled}
      onClick={onClick}
      className={`${bgColor} text-white ${hoverColor} focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-1`}
    >
      {label}
    </button>
  );
};
