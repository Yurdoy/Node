import React from "react";
import CustomInput from "./ui/CustomInput";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: " ",
    password: " ",
  });

  const onHandleChange = (e) => {
    const { email, value } = e.target;
    setFormValue((prev) => ({ ...prev, [email]: value }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formValue
      );
      console.log("You are logged in", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CustomInput
        value={formValue.email}
        onHandleChange={onHandleChange}
        id="email"
        label="email"
      />

      <CustomInput
        value={formValue.password}
        onHandleChange={onHandleChange}
        id="password"
        name="password"
        label="password"
      />
      <button onClick={onSubmit}>Sign In</button>
    </div>
  );
};

export default Login;
