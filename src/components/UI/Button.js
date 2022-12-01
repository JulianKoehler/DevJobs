import React, { useContext } from "react";
import classes from "./Button.module.css";
import ColorThemeContext from "../../store/colorTheme-context";

const Button = props => {
  const { type } = props;
  const themeCtx = useContext(ColorThemeContext);

  const darkModeBtn = themeCtx.colorTheme === "dark" && type === "btn-type-2";

  return (
    <button
      className={`
      ${classes.btn} 
      ${classes[type]} 
      ${darkModeBtn && classes["btn-type-2-dark"]}`}>
      {props.children}
    </button>
  );
};

export default Button;
