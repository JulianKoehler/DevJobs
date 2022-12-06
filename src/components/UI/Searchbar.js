import React, { useContext, useState } from "react";
import styled from "styled-components";
import classes from "./Searchbar.module.css";
import Checkbox from "../FormElements/Checkbox";
import SearchInput from "../FormElements/SearchInput";
import Button from "./Button";
import FilterJobsContext from "../../store/filter-jobs-context";

/** This function is for performance purposes, we set a Timeout for the setScreenWidth function so React
 * won't rerender on every resize but only after a certain amount of time after the screen stopped resizing
 */

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Searchbar = () => {
  const filterCtx = useContext(FilterJobsContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log("Searchbar rendered");

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 500);

    window.addEventListener("resize", debouncedHandleResize);
  });

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
          label={screenWidth > 768 ? "Full Time Only" : "Full Time"}
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
  display: flex;
`;
