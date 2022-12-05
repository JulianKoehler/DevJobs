import React, { useContext } from "react";
import styled from "styled-components";
import classes from "./Searchbar.module.css";
import Checkbox from "../FormElements/Checkbox";
import SearchInput from "../FormElements/SearchInput";
import Button from "./Button";
import FilterJobsContext from "../../store/filter-jobs-context";

const Searchbar = () => {
  const filterCtx = useContext(FilterJobsContext);
  console.log(filterCtx);

  const filterJobs = () => {
    filterCtx.onSearch();
  };

  return (
    <React.Fragment>
      <SearchInput
        onChange={filterCtx.setSearch}
        value={filterCtx.searchFilter}
        icon={"lens"}
        placeholder={"Filter by title, companies, expertise..."}
        width={"40%"}
      />
      <SearchInput
        onChange={filterCtx.setLocationFilter}
        value={filterCtx.locationFilter}
        icon={"location"}
        placeholder={"Filter by location..."}
        width={"30%"}
      />
      <SearchBarRightSide>
        <Checkbox
          checked={filterCtx.fullTimeOnly}
          onChange={filterCtx.setFullTimeOnly}
          className={classes["checkbox-label"]}
          label={"Full Time Only"}
        />
        <Button
          type="submit"
          onClick={filterJobs}
          btnType={"btn-type-1"}>
          Search
        </Button>
      </SearchBarRightSide>
    </React.Fragment>
  );
};

export default Searchbar;

const SearchBarRightSide = styled.div`
  width: 30%;
  display: flex;
`;
