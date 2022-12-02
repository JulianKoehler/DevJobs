import React, { useContext } from "react";
import styled from "styled-components";
import ColorThemeContext from "../../store/colorTheme-context";

const Card = props => {
  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Div
      className={props.className}
      theme={colorThemeCtx.colorTheme}>
      {props.children}
    </Div>
  );
};

export default Card;

const Div = styled.div`
  border-radius: 0.3125rem;
  transition: background 0.5s;
  background: ${props => (props.theme === "light" ? "white" : "var(--very-dark-blue)")};
  color: ${props => (props.theme === "light" ? "var(--very-dark-blue)" : "white")};
`;
