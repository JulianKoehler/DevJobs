import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  const buttonTheme =
    props.btnType === "Button 1"
      ? classes["btn-type-1"]
      : props.btnType === "Button 2"
      ? classes["btn-type-2"]
      : classes["btn-type-2-dark"];

  return <button className={`${classes.btn} ${buttonTheme}`}>{props.children}</button>;
};

export default Button;
