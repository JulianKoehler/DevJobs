import React, { useContext, useState } from "react";
import styled from "styled-components";
import classes from "./Searchbar.module.css";
import { ReactComponent as FilterIcon } from "../../assets/mobile/icon-filter.svg";
import lensIcon from "../../assets/mobile/icon-search.svg";
import Checkbox from "../FormElements/Checkbox";
import SearchInput from "../FormElements/SearchInput";
import Button from "./Button";
import FilterJobsContext from "../../store/filter-jobs-context";
import ColorThemeContext from "../../store/colorTheme-context";
import Modal from "../FormElements/Modal";

/** The debounce function is for performance purposes, we set a Timeout for the setScreenWidth function so React
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
  const themeCtx = useContext(ColorThemeContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

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

  const filterJobsOnMobile = () => {
    setShowMobileFilter(false);
  };

  return screenWidth > 428 ? (
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
  ) : (
    <React.Fragment>
      {showMobileFilter && <Modal closeModal={filterJobsOnMobile} />}
      <SearchInput
        onChange={filterCtx.setSearch}
        value={filterCtx.searchFilter}
        icon={null}
        placeholder={"Filter by title..."}
        width={"auto"}
      />
      <FilterButton theme={themeCtx.colorTheme}>
        <FilterIcon
          onClick={() => setShowMobileFilter(true)}
          className={classes["filter-icon"]}
          fill={themeCtx.colorTheme === "light" ? "var(--dark-grey)" : "white"}
        />
      </FilterButton>
      <Button
        btnType={"btn-type-1"}
        type="submit"
        className={classes["mobile-search-btn"]}
        onClick={filterJobs}>
        <img
          className={classes["search-icon"]}
          src={lensIcon}
          alt="search"
        />
      </Button>
    </React.Fragment>
  );
};

export default Searchbar;

const SearchBarRightSide = styled.div`
  display: flex;
`;

const FilterButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 4em;
  height: 4em;
  /* color: ${props => (props.theme === "light" ? "var(--dark-grey)" : "white")}; */
  margin-left: auto;
`;
