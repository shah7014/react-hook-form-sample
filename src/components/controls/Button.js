import React from "react";

const Button = ({
  type = "button",
  className,
  onClick,
  label,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-cyan-500 self-center px-4 py-2 rounded-lg text-xl disabled:bg-orange-300 ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
