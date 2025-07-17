import React from "react";

const CustomInput = (props) => {
  const { value, onHandleChange, id, label, name } = props;

  return (
    <div className="inputField">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onHandleChange}
        name={name}
        type="text"
      />
    </div>
  );
};

export default CustomInput;
