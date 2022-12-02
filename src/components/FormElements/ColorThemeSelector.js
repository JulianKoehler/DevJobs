import React, { useContext } from "react";
import styled from "styled-components";
import lightModeIcon from "../../assets/desktop/icon-sun.svg";
import ColorThemeContext from "../../store/colorTheme-context";
import darkModeIcon from "../../assets/desktop/icon-moon.svg";

const ColorThemeSelector = () => {
  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Wrapper>
      <Icon icon={lightModeIcon} />
      <Toggler onClick={colorThemeCtx.changeColorTheme}>
        <Indicator theme={colorThemeCtx.colorTheme} />
      </Toggler>
      <Icon icon={darkModeIcon} />
    </Wrapper>
  );
};

export default ColorThemeSelector;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Icon = styled.div`
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => (props.icon === lightModeIcon ? "contain" : "1rem")};
  width: 1.25rem;
  height: 1.1875rem;
`;

const Indicator = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background-color: var(--violet);
  margin: 0.3rem;
  transition: float 0.7s;
  float: ${props => (props.theme === "light" ? "left" : "right")};
`;

const Toggler = styled.div`
  width: 3rem;
  background-color: var(--white);
  height: 1.5rem;
  margin-inline: 0.9rem;
  border-radius: 0.75rem;
  cursor: pointer;

  &:hover ${Indicator} {
    background-color: var(--light-violet);
  }
`;
