import React, { useReducer } from "react";
import FilterJobsContext from "./filter-jobs-context";

const ACTIONS = {
  SEARCH: "search",
  FILTER_BY_LOCATION: "filter-by-location",
  CHANGE_WORK_SCHEDULE: "change-work-schedule",
  ON_SEARCH: "on-search",
};

const defaultValues = {
  searchFilter: undefined,
  locationFilter: undefined,
  fullTimeOnly: false,
  timesSearchButtonClicked: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH:
      return {
        ...state,
        searchFilter: action.userInput,
      };
    case ACTIONS.FILTER_BY_LOCATION:
      return {
        ...state,
        locationFilter: action.userInput,
      };
    case ACTIONS.CHANGE_WORK_SCHEDULE:
      return {
        ...state,
        fullTimeOnly: action.userInput,
      };
    case ACTIONS.ON_SEARCH:
      return {
        ...state,
        timesSearchButtonClicked: state.timesSearchButtonClicked + 1,
      };
    default:
      return state;
  }
};

const FilterJobsProvider = props => {
  const [searchForm, dispatchSearchForm] = useReducer(reducer, defaultValues);

  const searchHandler = event => {
    dispatchSearchForm({ type: ACTIONS.SEARCH, userInput: event.target.value });
  };

  const locationFilterHandler = event => {
    dispatchSearchForm({ type: ACTIONS.FILTER_BY_LOCATION, userInput: event.target.value });
  };

  const workScheduleHandler = event => {
    dispatchSearchForm({ type: ACTIONS.CHANGE_WORK_SCHEDULE, userInput: event.target.checked });
  };

  const onClickSearchButton = () => {
    dispatchSearchForm({ type: ACTIONS.ON_SEARCH });
  };

  const filteredJobsContext = {
    searchFilter: searchForm.searchFilter,
    locationFilter: searchForm.locationFilter,
    fullTimeOnly: searchForm.fullTimeOnly,
    timesSearchButtonClicked: searchForm.timesSearchButtonClicked,
    setSearch: searchHandler,
    setLocationFilter: locationFilterHandler,
    setFullTimeOnly: workScheduleHandler,
    onSearch: onClickSearchButton,
  };

  return <FilterJobsContext.Provider value={filteredJobsContext}>{props.children}</FilterJobsContext.Provider>;
};

export default FilterJobsProvider;
