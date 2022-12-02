import React from "react";
import styled from "styled-components";
import classes from "./JobHeader.module.css";
import headerImg from "../../assets/desktop/bg-pattern-header.svg";
import devjobsLogo from "../../assets/desktop/logo.svg";
import Card from "../UI/Card";
import ColorThemeSelector from "../FormElements/ColorThemeSelector";

const JobHeader = props => {
  return (
    <Header>
      <TopContent>
        <div>
          <img
            src={devjobsLogo}
            alt="devjobs-logo"
          />
        </div>
        <ColorThemeSelector />
      </TopContent>
      <Card className={classes["search-bar"]}>{props.children}</Card>
    </Header>
  );
};

export default JobHeader;

const Header = styled.header`
  width: 100vw;
  height: 10.125em;
  background-color: var(--violet);
  border-radius: 0 0 0 6.25rem;
  background-image: url(${headerImg});
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 920px;
  margin-inline: auto;
`;