import React from "react";
import JobHeader from "../components/Jobs/JobHeader";
import Searchbar from "../components/UI/Searchbar";
import JobPreviewList from "../components/Jobs/JobPreviewList";
import Wrapper from "../components/Helpers/Wrapper";

const Home = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <JobHeader>
          <Searchbar key={"Home"} />
        </JobHeader>
        <JobPreviewList />
      </Wrapper>
    </React.Fragment>
  );
};

export default Home;
