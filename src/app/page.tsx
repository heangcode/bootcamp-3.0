import { Button, ButtonIcon, InputSearch, Typography } from "@/components";
import React from "react";
import { HiOutlineArrowRight, HiOutlineUser } from "react-icons/hi2";

const Homepages = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex w-full flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <Typography variant="bold" className="text-4xl  text-gray-800 mb-2">
          Welcome to Our Platform
        </Typography>
        <Typography variant="normal" className="text-lg text-gray-600">
          Find everything you need in one place
        </Typography>
      </div>

      <div className="space-y-4 w-full max-w-md px-4">
        <div className="flex items-center justify-center gap-2">
          <InputSearch
            className="w-full"
            placeholder="Search..."
          />
          <Button
            size="large"
            colorScheme="primary"
            leftIcon={<HiOutlineArrowRight className="w-6 h-6" />}
            className="w-[100px]"
          >
            Login
          </Button>
        </div>
        <div className="flex justify-between">
          <ButtonIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
            className="bg-gray-200 hover:bg-gray-300"
          />
          <ButtonIcon
            icon={<HiOutlineUser className="w-6 h-6" />}
            className="bg-gray-200 hover:bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepages;
