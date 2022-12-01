import React from "react";
import Checkbox from "../FormElements/Checkbox";
import SearchInput from "../FormElements/SearchInput";
import Button from "./Button";

const Searchbar = () => {
  return (
    <React.Fragment>
      <SearchInput
        icon={"lens"}
        placeholder={"Filter by title, companies, expertise..."}
        width={"350px"}
      />
      <SearchInput
        icon={"location"}
        placeholder={"Filter by location..."}
        width={"250px"}
      />
      <Checkbox label={"Full Time Only"} />
      <Button type={"btn-type-1"}>Search</Button>
    </React.Fragment>
  );
};

export default Searchbar;
