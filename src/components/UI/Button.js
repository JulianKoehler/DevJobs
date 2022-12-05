import React, { useContext } from "react";
import classes from "./Button.module.css";
import ColorThemeContext from "../../store/colorTheme-context";

const Button = props => {
  const { btnType } = props;
  const themeCtx = useContext(ColorThemeContext);

  const darkModeBtn = themeCtx.colorTheme === "dark" && btnType === "btn-type-2";

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`
      ${classes.btn} 
      ${classes[btnType]} 
      ${darkModeBtn && classes["btn-type-2-dark"]}
      ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
