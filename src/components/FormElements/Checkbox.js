import React, { useContext } from "react";
import styled from "styled-components";
import classes from "./Checkbox.module.css";
import checkIcon from "../../assets/desktop/icon-check.svg";
import ColorThemeContext from "../../store/colorTheme-context";
import FilterJobsContext from "../../store/filter-jobs-context";

const Checkbox = props => {
  const colorThemeCtx = useContext(ColorThemeContext);
  const filterCtx = useContext(FilterJobsContext);

  return (
    <div className={classes["checkbox-container"]}>
      <CustomCheckBox
        onChange={props.onChange}
        checked={props.checked}
        type="checkbox"
        id="cb"
        theme={colorThemeCtx.colorTheme}
      />
      <label
        className={props.className}
        htmlFor="cb">
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;

const CustomCheckBox = styled.input`
  & + label {
    transition: color 0.7s;
    color: ${props => (props.theme === "light" ? "black" : "white")};
    font-size: 1rem;
    font-weight: 700;
  }

  & + label::before {
    content: "";
    min-width: 1.5em;
    height: 1.5em;
    transition: background-color 0.7s;
    background-color: ${props => (props.theme === "light" ? "var(--very-dark-blue)" : "white")};
    opacity: 0.1;
    margin-right: 1em;
    border-radius: 0.1875em;
  }

  &:checked + label::before {
    background-color: var(--violet);
    opacity: 1;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:checked + label:hover::before {
    background: var(--violet);
    opacity: 0.25;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:focus + label::before {
    box-shadow: 0 0 10px ${props => (props.theme === "light" ? "black" : "grey")};
  }
`;
