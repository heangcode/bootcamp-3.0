"use client";

import { userSchema } from "@/validations/userSchema";
import React, { useState } from "react";
import * as yup from "yup";

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const LoginForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({}); // Reset any previous errors

    const form = event.currentTarget;
    const formData: FormData = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };

    try {
      await userSchema.validate(formData, { abortEarly: false });
      console.log("result data submit : ", formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errorMessages: FormErrors = {};
        error.inner.forEach((e) => {
          if (e.path && typeof e.path === "string") {
            errorMessages[e.path] = e.message;
          }
        });
        setErrors(errorMessages);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-start justify-start gap-4 flex-col">
          <input
            className="border border-gray-800"
            name="username"
            type="text"
            placeholder="Name..."
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

          <input
            className="border border-gray-800"
            name="email"
            type="text"
            placeholder="email@gmail.com"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <input
            className="border border-gray-800"
            name="password"
            type="password"
            placeholder="password123"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
