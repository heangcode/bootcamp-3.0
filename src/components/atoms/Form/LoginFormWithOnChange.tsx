"use client";

import React, { useState } from "react";

interface FormDataProps {
  username: string;
  email: string;
  password: string;
}

const LoginFormWithOnChange = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          value={formData.username}
          onChange={handleChange}
        />
        <input
          placeholder="email@gmail.com"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="password123"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export { LoginFormWithOnChange };
