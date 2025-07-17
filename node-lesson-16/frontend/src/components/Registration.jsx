import React from "react";
import CustomInput from "./ui/CustomInput";
import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formValue, setFormValue] = useState({
    name: " ",
    lastname: " ",
    age: " ",
    email: " ",
    password: " ",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formValue
      );
      console.log("User was registered", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CustomInput
        value={formValue.name}
        onHandleChange={onHandleChange}
        id="name"
        name="name"
        label="name"
      />

      <CustomInput
        value={formValue.lastname}
        onHandleChange={onHandleChange}
        id="lastname"
        name="lastname"
        label="lastname"
      />

      <CustomInput
        value={formValue.age}
        onHandleChange={onHandleChange}
        id="age"
        name="age"
        label="age"
      />

      <CustomInput
        value={formValue.email}
        onHandleChange={onHandleChange}
        id="email"
        name="email"
        label="email"
      />

      <CustomInput
        value={formValue.password}
        onHandleChange={onHandleChange}
        id="password"
        name="password"
        label="password"
      />
      <button onClick={onSubmit}>Sign Up</button>
    </div>
  );
};

export default Registration;
