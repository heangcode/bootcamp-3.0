import {
  LoginForm,
  LoginFormWithOnChange,
  LoginFormWithoutOnChange,
} from "@/components";
import React from "react";

const Homepage = () => {
  return (
    <>
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-3xl p-8 space-y-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center text-gray-700">
              Login Form With OnChange
            </h1>
            <LoginFormWithOnChange />
          </div>

          <div className="w-full max-w-3xl mt-10 p-8 space-y-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center text-gray-700">
              Login Form Without OnChange
            </h1>
            <LoginFormWithoutOnChange />
          </div>

          <div className="w-full max-w-3xl mt-10 p-8 space-y-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center text-gray-700">
              Login Form with Validation
            </h1>
            <LoginForm />
          </div>
        </div>
      </>
    </>
  );
};

export default Homepage;
