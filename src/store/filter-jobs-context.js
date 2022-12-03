import React from "react";

const FilterJobsContext = React.createContext({
  searchFilter: "",
  locationFilter: "",
  fullTimeOnly: false,
  timesSearchButtonClicked: 0,
  setSearch: userInput => {},
  setLocationFilter: userInput => {},
  setFullTimeOnly: userInput => {},
  onSearch: () => {},
});

export default FilterJobsContext;
