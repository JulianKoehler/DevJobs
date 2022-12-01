import React, { useState } from "react";
import ColorThemeContext from "./colorTheme-context";

const ColorThemeProvider = props => {
  const [colorTheme, setColorTheme] = useState("light");

  const changeThemeHandler = () => {
    setColorTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  const colorThemeContext = {
    colorTheme: colorTheme,
    changeColorTheme: changeThemeHandler,
  };

  return <ColorThemeContext.Provider value={colorThemeContext}>{props.children}</ColorThemeContext.Provider>;
};

export default ColorThemeProvider;
