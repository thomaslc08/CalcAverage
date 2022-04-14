import { Fragment, useLayoutEffect } from "react";
import GlobalStyle from "./globalStyles";
import Grades from "./components/GradesContainer";
import OverallAverage from "./components/OverallAverage";
import TopBar from "./components/TopBar";

import styled from "styled-components";
import DarkModeContext from "./store/darkModeContext";
import { useContext } from "react";
import GlobalInput from "./components/GlobalInput";
import GradesContext from "./store/gradesContext";
// import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const Section = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 3rem;
  @media screen and (max-width: 1070px) {
    flex-direction: column-reverse;
  }
`;

function App() {
  const darkModeCtx = useContext(DarkModeContext);
  // const { isShowing, toggle } = useModal();

  useLayoutEffect(() => {
    const isDark = localStorage.getItem("darkMode");
    isDark === "true" && darkModeCtx.setDark(true);
  }, [darkModeCtx]);

  const gradesCtx = useContext(GradesContext);

  const addGrade = (inputText) => {
    gradesCtx.addGrade(inputText);
  };

  return (
    <Fragment>
      {/* <button onClick={toggle}></button> */}
      <GlobalStyle isDark={darkModeCtx.isDark} />
      {/* <Modal isShowing={isShowing} hide={toggle} /> */}
      <TopBar />
      <GlobalInput onSubmit={addGrade} darkMode={darkModeCtx.isDark} />
      <Section>
        <Grades />
        <OverallAverage isDark={darkModeCtx.isDark} />
      </Section>
    </Fragment>
  );
}

export default App;
