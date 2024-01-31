import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "primary",
  size = "medium", // default size set to medium
  isDisabled = false,
  leftIcon,
  rightIcon,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-amber-600 hover:bg-amber-400 text-white";
      case "secondary":
        return "bg-cyan-600 hover:bg-cyan-400 text-white";
      default:
        return "bg-amber-600 hover:bg-amber-400 text-white";
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "text-sm px-3 py-1"; // Adjust these values as needed
      case "medium":
        return "text-md px-4 py-2"; // Adjust these values as needed
      case "large":
        return "text-lg px-5 py-3"; // Adjust these values as needed
      default:
        return "text-md px-4 py-2"; // Default to medium size
    }
  };

  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const sizeClass = getSizeClass(size);
  const disableStyle = isDisabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const combinedClassName = `flex items-center justify-center rounded-lg ${disableStyle} ${colorSchemeClass} ${sizeClass} ${className}`;

  return (
    <button disabled={isDisabled} className={combinedClassName}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
