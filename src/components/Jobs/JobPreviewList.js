import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import classes from "./JobPreviewList.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import JobPreviewCard from "./JobPreviewCard";
import FilterJobsContext from "../../store/filter-jobs-context";

/** Usually the filter criteria filled in by the user would be sent to the backend which would then handle the logic,
 * build the respective array and send it to the front end. But since this is a front-end-only project I will handle
 * the logic within this code base using the context API and reducers for better state management and avoiding prop chains.
 * The start and end of the filter logic is clearly marked to help the readability.
 *
 * Also: The filter function is case sensitive which is of course not optimal. I was externally provided with the
 * JSON file with the job data. Unfortunately it had no property such as "Tags" or "Filter Tags" which could unify
 * the results when searching for Frontend or front end or front-end. The backend would be able to convert the
 * strings into a unified version like lower kebab case.
 */

const JobPreviewList = () => {
  const filterCtx = useContext(FilterJobsContext);
  const { searchFilter, locationFilter, fullTimeOnly, timesSearchButtonClicked } = filterCtx;

  const [jobsData, setJobsData] = useState(undefined);
  const [loadedData, setLoadedData] = useState(undefined);
  const [errorOccured, setErrorOccured] = useState(false);

  const errorMessage = "Houston, we have a problem. Please try again later!";

  const getData = async () => {
    try {
      const response = await fetch("data.json");
      const result = await response.json();

      /** Start of Filter Logic */
      const filteredJobsData = await result.filter(job => {
        if (searchFilter && locationFilter && fullTimeOnly) {
          return (
            (job.position.includes(searchFilter) ||
              job.company.includes(searchFilter) ||
              job.requirements.items.some(item => item.includes(searchFilter))) &&
            job.location.some(loc => loc === locationFilter) &&
            job.contract === "Full Time"
          );
        }

        if (searchFilter && locationFilter) {
          return (
            (job.position.includes(searchFilter) ||
              job.company.includes(searchFilter) ||
              job.requirements.items.some(item => item.includes(searchFilter))) &&
            job.location.some(loc => loc === locationFilter)
          );
        }

        if (searchFilter && fullTimeOnly) {
          return (
            (job.position.includes(searchFilter) ||
              job.company.includes(searchFilter) ||
              job.requirements.items.some(item => item.includes(searchFilter))) &&
            job.contract === "Full Time"
          );
        }

        if (locationFilter && fullTimeOnly) {
          return job.location.some(loc => loc === locationFilter) && job.contract === "Full Time";
        }

        if (searchFilter) {
          return (
            job.position.includes(searchFilter) ||
            job.company.includes(searchFilter) ||
            job.requirements.items.some(item => item.includes(searchFilter))
          );
        }

        if (locationFilter) {
          return job.location.some(loc => loc === locationFilter);
        }

        if (fullTimeOnly) {
          return job.contract === "Full Time";
        }

        return job;
      });
      /** End of Filter Logic */

      setJobsData(filteredJobsData);
      setLoadedData(filteredJobsData.length > 12 ? 12 : filteredJobsData.length);
      setErrorOccured(false);
    } catch (err) {
      console.error(err);

      setJobsData(undefined);
      setErrorOccured(true);
    }
  };

  useEffect(() => {
    getData();
  }, [timesSearchButtonClicked]);

  const loadMoreData = () => {
    setLoadedData(prevAmount => prevAmount + 3);
  };

  return (
    <ListWrapper>
      <List>
        {errorOccured && (
          <Card className={classes["error-message"]}>
            <h3>{errorMessage}</h3>
          </Card>
        )}
        {jobsData &&
          jobsData.slice(0, loadedData).map(job => (
            <JobPreviewCard
              key={job.id}
              id={job.id}
              companyName={job.company}
              companyLogo={job.logo}
              logoBackground={job.logoBackground}
              jobTitle={job.position}
              postedAt={job.postedAt}
              workingHours={job.contract}
              location={job.location[0]}
              expertise={job.requirements}
              website={job.website}
            />
          ))}
        {!errorOccured && jobsData && jobsData.length === 0 && (
          <Card className={classes["no-results-found"]}>
            <h3>No Results for your Search</h3>
          </Card>
        )}
      </List>

      {!errorOccured && jobsData && loadedData !== jobsData.length && (
        <Button
          onClick={loadMoreData}
          btnType={"btn-type-1"}>
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
  padding-bottom: 5rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.875em;
  row-gap: 4.0625em;
  width: var(--content-width);
  max-width: var(--home-max-width);
  margin: 0 auto 3.5rem;

  @media (max-width: 834px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 428px) {
    grid-template-columns: 1fr;
  }

  & + button {
    display: block;
    width: fit-content;
    margin-inline: auto;
  }
`;
