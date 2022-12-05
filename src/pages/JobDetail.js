import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./JobDetail.module.css";
import Wrapper from "../components/Helpers/Wrapper";
import JobHeader from "../components/Jobs/JobHeader";
import CompanyInfo from "../components/Jobs/CompanyInfo";
import JobContent from "../components/Jobs/JobContent";
import JobFooter from "../components/Jobs/JobFooter";

const JobDetail = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("data.json");
      const result = await response.json();
      const jobData = result.find(job => job.id.toString() === jobId);

      setJobDetails(jobData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      {jobDetails && (
        <Wrapper className={classes.wrapper}>
          <JobHeader>
            <CompanyInfo
              key={"JobDetails"}
              id={jobDetails.id}
              companyName={jobDetails.company}
              companyLogo={jobDetails.logo}
              logoBackground={jobDetails.logoBackground}
              website={jobDetails.website}
            />
          </JobHeader>
          <JobContent
            id={jobDetails.id}
            jobTitle={jobDetails.position}
            postedAt={jobDetails.postedAt}
            workingHours={jobDetails.contract}
            location={jobDetails.location[0]}
            applyLink={jobDetails.apply}
            introText={jobDetails.description}
            requirements={jobDetails.requirements}
            tasks={jobDetails.role}
          />
          <JobFooter
            id={jobDetails.id}
            jobTitle={jobDetails.position}
            applyLink={jobDetails.apply}
          />
        </Wrapper>
      )}
    </React.Fragment>
  );
};

export default JobDetail;
