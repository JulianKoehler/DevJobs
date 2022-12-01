import React, { useContext } from "react";
import styled from "styled-components";
import lensIcon from "../../assets/desktop/icon-search.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import ColorThemeContext from "../../store/colorTheme-context";

const SearchInput = props => {
  const { placeholder, width, icon } = props;

  const searchIcon = icon === "location" ? locationIcon : lensIcon;

  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Input
      type="search"
      placeholder={placeholder}
      width={width}
      colorTheme={colorThemeCtx.colorTheme}
      searchIcon={searchIcon}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 0.375rem;
  border: none;
  transition: background 0.35s;
  background-color: ${props => (props.colorTheme === "light" ? "var(--white)" : "var(--very-dark-blue)")};
  background-image: url(${props => props.searchIcon});
  background-repeat: no-repeat;
  background-position: 1rem 50%;
  background-size: 1.5em;
  color: ${props => (props.colorTheme === "light" ? "black" : "var(--white)")};
  margin-left: -0.5rem;
  width: ${props => props.width};

  &:focus {
    outline: none;
  }
`;
