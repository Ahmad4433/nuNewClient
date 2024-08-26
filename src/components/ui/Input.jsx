import React from "react";
import "./input.css";
const Input = ({ type, onChange, value, placeholder, required }) => {
  return (
    <input
      required={required}
      className="ui_input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoComplete="off"
    />
  );
};

export default Input;
