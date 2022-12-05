import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import classes from "./JobContent.module.css";
import Button from "../UI/Button";

const JobContent = props => {
  const {
    tasks,
    requirements,
    companyName,
    companyLogo,
    logoBackground,
    jobTitle,
    postedAt,
    workingHours,
    location,
    website,
    introText,
  } = props;

  return (
    <main>
      <Card className={classes["job-details"]}>
        <ContentHeader>
          <LeftSide>
            <p>
              {postedAt} <Dot>&#9679;</Dot> {workingHours}
            </p>
            <h1>{jobTitle}</h1>
            <JobLocation>{location}</JobLocation>
          </LeftSide>
          <Button
            className={classes.btn}
            btnType={"btn-type-1"}>
            Apply Now
          </Button>
        </ContentHeader>
        <p>{introText}</p>
        <h3>Requirements</h3>
        <p>{requirements.content}</p>
        <ul>
          {requirements.items.map(item => (
            <li key={item}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <h3>What you will do</h3>
        <p>{tasks.content}</p>
        <ul>
          {tasks.items.map(item => (
            <li
              key={item}
              className={classes["tasks-items"]}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );
};

export default JobContent;

const ContentHeader = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dot = styled.span`
  font-size: 10px;
  margin: 0 0.3rem 0;
`;

const LeftSide = styled.div``;

const JobLocation = styled.h4`
  margin-top: 0.8rem;
  color: var(--violet);
`;
