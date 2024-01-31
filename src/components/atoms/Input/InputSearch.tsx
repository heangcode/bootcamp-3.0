import React from "react";

interface InputSearchProps {
  placeholder?: string;
  className?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        className="text-black border border-[#828282] w-full h-[50px] pl-[20px] pr-[10px] py-[15px] rounded-full"
        type="text"
        placeholder={placeholder}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export { InputSearch };
