import styled from "styled-components";
import { useState } from "react";

import InputTextBar from "./InputTextBar";

const Wrapper = styled.div`
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  /* transition: all 3ms ease-in-out; */

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

const GlobalInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(inputText);
    setInputText("");
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <InputTextBar
          autoFocus="true"
          value={inputText}
          isDark={props.darkMode}
          handleChange={handleChange}
          placeholder={"Subject, grade, coefficient"}
        />
        {/* <Button>Add</Button> */}
      </Form>
      {/* <p>
        For each subject, enter the title, your grade and coefficient separated
        by a comma
      </p> */}
    </Wrapper>
  );
};

export default GlobalInput;
