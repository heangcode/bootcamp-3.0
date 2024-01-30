"use client";

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary";
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "primary",
  isDisabled = false,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-amber-600 hover:bg-amber-400";
      case "secondary":
        return "bg-cyan-600 hover:bg-cyan-400";
      default:
        return "bg-amber-600 hover:bg-amber-400";
    }
  };

  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const disableStyle = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
  const combinedClassName = `text-center ${disableStyle} ${colorSchemeClass} ${className}`;

  return (
    <button disabled={isDisabled} className={combinedClassName}>
      {children}
    </button>
  );
};

export { Button };
