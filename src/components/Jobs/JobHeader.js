import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "./JobHeader.module.css";
import headerImg from "../../assets/desktop/bg-pattern-header.svg";
import devjobsLogo from "../../assets/desktop/logo.svg";
import Card from "../UI/Card";
import ColorThemeSelector from "../FormElements/ColorThemeSelector";

const JobHeader = props => {
  console.log("JobHeader rendered");
  return (
    <Header>
      <TopContent>
        <Link to="/">
          <img
            src={devjobsLogo}
            alt="devjobs-logo"
          />
        </Link>
        <ColorThemeSelector />
      </TopContent>
      <Card className={props.children.key === "Home" ? classes["search-bar"] : classes["company-info"]}>
        {props.children}
      </Card>
    </Header>
  );
};

export default JobHeader;

const Header = styled.header`
  width: 100%;
  height: 10.125em;
  background-color: var(--violet);
  border-radius: 0 0 0 6.25rem;
  background-image: url(${headerImg});
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-1em);
  justify-content: space-between;
  height: 100%;
  width: var(--content-width);
  max-width: 1110px;
  margin-inline: auto;
`;
