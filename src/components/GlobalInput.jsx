import styled from "styled-components";
import { useState } from "react";

import { Fragment, useContext, useRef } from "react";
import Button from "./Button";
import InputTextBar from "./InputTextBar";
import GradesContext from "../store/gradesContext";
import DarkModeContext from "../store/darkModeContext";

const Wrapper = styled.div`
  /* padding: 1rem; */
`;
const Form = styled.form`
  display: flex;

  & > Button {
    margin-left: 1rem;
  }
  @media screen and (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    & > Button {
      margin: 0;
    }
  }
`;

const GlobalInput = () => {
  const gradesCtx = useContext(GradesContext);
  const darkModeCtx = useContext(DarkModeContext);

  const [inputText, setInputText] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  const handleChange = (e) => {
    setInputText(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const inputs = inputText.replace(/ /g, "").split(",");
    console.log(inputs);
    gradesCtx.addGrade(inputs);
    setInputText("");
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <InputTextBar
          value={inputText}
          isDark={darkModeCtx.isDark}
          handleChange={handleChange}
          placeholder="Subject, grade, coefficient"
        />
        <Button isDark={darkModeCtx.isDark}>Add</Button>
      </Form>
      {/* <p>
        For each subject, enter the title, your grade and coefficient separated
        by a comma
      </p> */}
    </Wrapper>
  );
};

export default GlobalInput;
