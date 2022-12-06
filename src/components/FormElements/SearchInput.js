import React, { useContext } from "react";
import styled from "styled-components";
import lensIcon from "../../assets/desktop/icon-search.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import ColorThemeContext from "../../store/colorTheme-context";

const SearchInput = props => {
  const { placeholder, width, icon, onChange, value } = props;

  const searchIcon = icon === "location" ? locationIcon : lensIcon;

  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Input
      onChange={onChange}
      value={value}
      type="search"
      width={width}
      placeholder={placeholder}
      colorTheme={colorThemeCtx.colorTheme}
      searchIcon={searchIcon}
    />
  );
};

export default SearchInput;

const Input = styled.input`
  padding: 1rem 1rem 1rem 3.5rem;
  border-radius: 0.375rem 0 0 0.375rem;
  border: none;
  border-right: 1px solid var(--dark-grey-low-opacity);
  transition: background 0.35s;
  background-color: transparent;
  background-image: url(${props => props.searchIcon});
  background-repeat: no-repeat;
  background-position: 1.5rem 50%;
  background-size: 1.5em;
  color: ${props => (props.colorTheme === "light" ? "black" : "var(--white)")};
  width: ${props => props.width};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1rem;
  }
`;
