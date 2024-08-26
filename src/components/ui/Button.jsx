import React from "react";
import "./button.css";
const Button = ({ children, varient, disabled }) => {
  return (
    <button disabled={disabled} varient={varient} className="ui_btn">
      {children}
    </button>
  );
};

export default Button;
