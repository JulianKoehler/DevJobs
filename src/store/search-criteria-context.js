import React from "react";

const UserFormInputContext = React.createContext({
  filter: "",
  locationFilter: "",
  fullTimeOnly: false,
  setFilter: userInput => {},
  setLocationFilter: locationFilter => {},
  setFullTimeOnly: () => {},
});

export default UserFormInputContext;
