"use client";

import React from "react";

interface FormDataProps {
  username: string;
  email: string;
  password: string;
}

const LoginFormWithoutOnChange = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData: FormDataProps = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          id="username"
        />
        <input
          placeholder="email@gmail.com"
          type="email"
          name="email"
          id="email"
        />
        <input
          placeholder="password123"
          type="password"
          name="password"
          id="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export { LoginFormWithoutOnChange };
