import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Card from "../UI/Card";
import SearchInput from "./SearchInput";
import Button from "../UI/Button";
import Checkbox from "./Checkbox";
import FilterJobsContext from "../../store/filter-jobs-context";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = props => {
  const filterCtx = useContext(FilterJobsContext);

  const filterJobs = () => {
    filterCtx.onSearch();
    props.closeModal();
  };

  return (
    <Card className={classes["search-modal"]}>
      <SearchInput
        className={classes["location-filter"]}
        onChange={filterCtx.setLocationFilter}
        value={filterCtx.locationFilter}
        icon={"location"}
        placeholder={"Filter by location..."}
        width={"30%"}
      />
      <Checkbox
        checked={filterCtx.fullTimeOnly}
        onChange={filterCtx.setFullTimeOnly}
        className={classes["full-time"]}
        label={"Full Time Only"}
      />
      <Button
        className={classes.btn}
        type="submit"
        onClick={filterJobs}
        btnType={"btn-type-1"}>
        Search
      </Button>
    </Card>
  );
};

const Modal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeModal={props.closeModal} />, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default Modal;
