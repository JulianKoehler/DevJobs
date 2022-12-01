import React from "react";

const ColorThemeContext = React.createContext({
  colorTheme: "light",
  changeColorTheme: () => {},
});

export default ColorThemeContext;
