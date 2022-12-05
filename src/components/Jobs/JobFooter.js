import React from "react";
import Card from "../UI/Card";
import classes from "./JobFooter.module.css";
import Button from "../UI/Button";

const JobFooter = props => {
  return (
    <footer>
      <Card className={classes["job-footer"]}>
        <div className={classes.content}>
          <div className={classes["content-left"]}>
            <h3>{props.jobTitle}</h3>
            <p>So Digital Inc.</p>
          </div>
          <Button
            className={classes.btn}
            btnType={"btn-type-1"}>
            Apply Now
          </Button>
        </div>
      </Card>
    </footer>
  );
};

export default JobFooter;
