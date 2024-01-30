import React, { ReactNode } from "react";

interface ButtonIconProps {
  icon: ReactNode;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, className }) => {
  return (
    <button
      className={`w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 cursor-pointer ${className}`}
    >
      {icon}
    </button>
  );
};

export { ButtonIcon };
