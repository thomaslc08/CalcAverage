import styled from "styled-components";
import { useState } from "react";

import { Fragment, useContext, useRef } from "react";
import Button from "./Button";
import InputTextBar from "./InputTextBar";
import GradesContext from "../store/gradesContext";

const Wrapper = styled.div`
  padding: 1rem;
`;
const Form = styled.form`
  display: flex;
`;

const GlobalInput = () => {
  const gradesCtx = useContext(GradesContext);

  const [inputText, setInputText] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  const handleChange = (e) => {
    setInputText(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputText === "") {
      setError({ error: true, message: "You must enter something" });
      console.log(error);
      return;
    }

    const inputs = inputText.replace(/ /g, "").split(",");

    gradesCtx.addGrade(inputs)
    setInputText("");
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <InputTextBar
          value={inputText}
          handleChange={handleChange}
          placeholder="Subject, grade, coefficient"
        />
        <Button>Add</Button>
      </Form>
      <p>
        For each subject, enter the title, your grade and coefficient separated
        by a comma
      </p>
    </Wrapper>
  );
};

export default GlobalInput;
