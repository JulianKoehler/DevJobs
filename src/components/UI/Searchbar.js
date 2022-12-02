import React from "react";
import styled from "styled-components";
import classes from "./Searchbar.module.css";
import Checkbox from "../FormElements/Checkbox";
import SearchInput from "../FormElements/SearchInput";
import Button from "./Button";

const Searchbar = () => {
  return (
    <React.Fragment>
      <SearchInput
        icon={"lens"}
        placeholder={"Filter by title, companies, expertise..."}
        width={"40%"}
      />
      <SearchInput
        icon={"location"}
        placeholder={"Filter by location..."}
        width={"30%"}
      />
      <SearchBarRightSide>
        <Checkbox
          className={classes["checkbox-label"]}
          label={"Full Time Only"}
        />
        <Button type={"btn-type-1"}>Search</Button>
      </SearchBarRightSide>
    </React.Fragment>
  );
};

export default Searchbar;

const SearchBarRightSide = styled.div`
  width: 30%;
  display: flex;
`;
