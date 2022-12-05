import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "./JobPreviewCard.module.css";
import ColorThemeContext from "../../store/colorTheme-context";
import Card from "../UI/Card";

const JobPreviewCard = props => {
  const { companyName, companyLogo, logoBackground, jobTitle, postedAt, workingHours, location, website } = props;
  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Link
      to={`/${props.id}`}
      style={{ textDecoration: "none" }}>
      <Card className={classes["job-preview-card"]}>
        <Logo backgroundColor={logoBackground}>
          <img
            src={companyLogo}
            alt="company-logo"
          />
        </Logo>
        <p>
          {postedAt} <Dot>&#9679;</Dot> {workingHours}
        </p>
        <Position theme={colorThemeCtx.colorTheme}>{jobTitle}</Position>
        <CompanyName>{companyName}</CompanyName>
        <JobLocation>{location}</JobLocation>
      </Card>
    </Link>
  );
};

export default JobPreviewCard;

const Logo = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.span`
  font-size: 10px;
  margin: 0 0.3rem 0;
`;

const Position = styled.h3`
  color: ${props => (props.theme === "light" ? "var(--very-dark-blue)" : "white")};
`;

const CompanyName = styled.p`
  color: var(--gray);
`;

const JobLocation = styled.h4`
  color: var(--violet);
`;
