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

const SearchComponent = () => {
  const gradesCtx = useContext(GradesContext);

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e);
    console.log(inputText);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    gradesCtx.addGrade(inputText);
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

export default SearchComponent;
