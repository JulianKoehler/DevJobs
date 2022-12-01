import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./components/UI/Button";
import Searchbar from "./components/UI/Searchbar";
import ColorThemeSelector from "./components/FormElements/ColorThemeSelector";
import ColorThemeContext from "./store/colorTheme-context";
import Checkbox from "./components/FormElements/Checkbox";
import JobHeader from "./components/Jobs/JobHeader";

function App() {
  const colorThemeCtx = useContext(ColorThemeContext);

  console.log(colorThemeCtx.colorTheme);

  return (
    <Wrapper theme={colorThemeCtx.colorTheme}>
      <JobHeader>
        <Searchbar />
      </JobHeader>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  transition: background 0.35s;
  background: ${props => (props.theme === "light" ? "var(--light-grey)" : "var(--midnight)")};
`;
