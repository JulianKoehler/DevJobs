import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const CompanyInfo = props => {
  const beautifiedWebsite = `${props.companyName.toLowerCase().split(" ").join("-")}.com`;
  return (
    <React.Fragment>
      <Logo backgroundColor={props.logoBackground}>
        <img
          src={props.companyLogo}
          alt="company-logo"
        />
      </Logo>
      <Content>
        <LeftBlock>
          <h2>{props.companyName}</h2>
          <p>{beautifiedWebsite}</p>
        </LeftBlock>
        <Button btnType={"btn-type-2"}>Company Site</Button>
      </Content>
    </React.Fragment>
  );
};

export default CompanyInfo;

const Logo = styled.div`
  width: 140px;
  height: 140px;
  background: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0 6px;

  & img {
    width: 58%;
  }
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

const LeftBlock = styled.div``;
