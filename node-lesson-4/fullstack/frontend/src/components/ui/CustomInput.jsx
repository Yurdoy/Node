import React from "react";

const CustomInput = ({ value, onChange, label, name }) => {
  return (
    <div>
      <label htmlFor="text"></label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        label={label}
        name={name}
      />
    </div>
  );
};

export default CustomInput;
