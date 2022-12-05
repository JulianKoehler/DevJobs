import React, { useContext } from "react";
import styled from "styled-components";
import ColorThemeContext from "../../store/colorTheme-context";

const Wrapper = props => {
  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Div
      className={props.className}
      theme={colorThemeCtx.colorTheme}>
      {props.children}
    </Div>
  );
};

export default Wrapper;

const Div = styled.div`
  width: 100%;
  min-height: 100%;
  transition: background 0.5s;
  background: ${props => (props.theme === "light" ? "var(--light-grey)" : "var(--midnight)")};
  /* overflow-x: hidden; */
`;
