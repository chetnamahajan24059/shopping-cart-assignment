import React from "react";
import "./button.scss";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
