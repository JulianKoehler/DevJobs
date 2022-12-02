import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classes from "./JobPreviewList.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import JobPreviewCard from "./JobPreviewCard";

/** Usually the filter criteria filled in by the user would be sent to the backend which would then handle the logic,
 * build the respective array and send it to the front end. But since this is a front-end-only project I will handle
 * the logic within this code base using the context API for better state management and avoiding prop chains.
 */

const JobPreviewList = () => {
  const [jobData, setJobData] = useState(undefined);
  const [loadedData, setLoadedData] = useState(9);
  const [errorOccured, setErrorOccured] = useState(false);

  const errorMessage = "Upps! Hier steckt irgendwo der Wurm drin. Versuch's am besten später nochmal.";

  const getData = async () => {
    try {
      const response = await fetch("data.json");
      const result = await response.json();

      setJobData(result);
      setErrorOccured(false);
    } catch (err) {
      console.log(err);

      setJobData(undefined);
      setErrorOccured(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const loadMoreData = () => {
    setLoadedData(prevAmount => prevAmount + 3);
  };

  const filteredJobData = jobData;

  return (
    <ListWrapper>
      <List>
        {errorOccured && (
          <Card className={classes["error-message"]}>
            <h3>{errorMessage}</h3>
          </Card>
        )}
        {jobData &&
          filteredJobData.slice(0, loadedData).map(job => (
            <JobPreviewCard
              key={job.id}
              companyName={job.company}
              companyLogo={job.logo}
              logoBackground={job.logoBackground}
              jobTitle={job.position}
              postedAt={job.postedAt}
              workingHours={job.contract}
              location={job.location}
              expertise={job.requirements}
              website={job.website}
            />
          ))}
      </List>
      {!errorOccured && (
        <Button
          onClick={loadMoreData}
          type={"btn-type-1"}>
          Load More
        </Button>
      )}
    </ListWrapper>
  );
};

export default JobPreviewList;

const ListWrapper = styled.main`
  width: 100%;
  padding-top: 7rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 21.875em 21.875em 21.875em;
  column-gap: 1.875em;
  row-gap: 4.0625em;
  width: 69.375em;
  margin: 0 auto 3.5rem;

  & + button {
    display: block;
    width: fit-content;
    margin-inline: auto;
  }
`;
