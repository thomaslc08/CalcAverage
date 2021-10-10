import { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import SearchComponent from "./components/GlobalInput";
import Grades from "./components/GradesContainer";
import OverallAverage from "./components/OverallAverage";
import TopBar from "./components/TopBar";

import styled from "styled-components";
import DarkModeContext from "./store/darkModeContext";
import { useContext, useEffect } from "react";

const Section = styled.section`
  display: flex;
  margin: 3rem 0;
  @media screen and (max-width: 1070px) {
    flex-direction: column-reverse;
  }
`;

function App() {
  const darkModeCtx = useContext(DarkModeContext);

  const handleKeyPress = (e) => {
    if (e.key === "b" && darkModeCtx.isDark === false) {
      darkModeCtx.setDark(true);
    } else darkModeCtx.setDark(false);
  };

  // useEffect(() => {
  //   darkModeCtx.setDark(true);
  // }, [darkModeCtx.isDark]);
  // console.log(darkModeCtx.isDark);

  return (
    <Fragment>
      <GlobalStyle isDark={darkModeCtx.isDark} />
      <TopBar />
      <SearchComponent />
      <Section>
        <Grades />
        <OverallAverage />
      </Section>
    </Fragment>
  );
}

export default App;
