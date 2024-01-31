import React, { FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  fontSize?: "base" | "sm" | "md" | "lg" | "xl";
  variant?: "normal" | "semibold" | "bold";
}

const Typography: FC<TypographyProps> = ({
  children,
  className = "",
  align = "center",
  fontSize = "base",
  variant = "normal",
}) => {
  const alignClass = `text-${align}`;
  const fontSizeClass = `text-${fontSize}`;
  const variantClass = `font-${variant}`;

  return (
    <p
      className={`${alignClass} ${fontSizeClass} ${variantClass} ${className}`}
    >
      {children}
    </p>
  );
};

export { Typography };
