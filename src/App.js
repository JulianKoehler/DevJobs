import React, { useContext } from "react";
import styled from "styled-components";
// import Button from "./components/UI/Button";
import Searchbar from "./components/UI/Searchbar";
import ColorThemeContext from "./store/colorTheme-context";
import JobHeader from "./components/Jobs/JobHeader";
import JobPreviewList from "./components/Jobs/JobPreviewList";

function App() {
  const colorThemeCtx = useContext(ColorThemeContext);

  return (
    <Wrapper theme={colorThemeCtx.colorTheme}>
      <JobHeader>
        <Searchbar />
      </JobHeader>
      <JobPreviewList />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background 0.5s;
  background: ${props => (props.theme === "light" ? "var(--light-grey)" : "var(--midnight)")};
  overflow-x: hidden;
`;
