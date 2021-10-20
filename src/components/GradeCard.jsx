import styled from "styled-components";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import GradesContext from "../store/gradesContext";
import InputTextBar from "./InputTextBar";
import DarkModeContext from "../store/darkModeContext";

const Card = styled.div`
  animation: 1s 1 fadeIn;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  * {
    margin: 0;
  }

  padding-top: 1rem;

  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  /* transition: all 3ms ease-in-out; */

  span {
    font-weight: 400;
    font-size: 1.1rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h2 {
    font-weight: 400;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  h3 {
    font-weight: 400;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #8b8b8b;
  }

  form {
    width: 100%;

    /* transition: 3ms ease-in-out; */
  }
`;

const GradeCard = (props) => {
  const node = useRef();
  const gradesCtx = useContext(GradesContext);
  const darkModeCtx = useContext(DarkModeContext);
  const [gradeEdit, setGradeEdit] = useState(false);
  const [input, setInput] = useState(
    `${props.subject}, ${props.grade}, ${props.coeff}`
  );

  useEffect(() => {
    setInput(`${props.subject}, ${props.grade}, ${props.coeff}`);
  }, [props.subject, props.grade, props.coeff]);

  const toggleEdit = () => {
    setGradeEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gradesCtx.updateGrade(input, props.id);
    setGradeEdit(false);
    setInput(`${props.subject}, ${props.grade}, ${props.coeff}`);
  };

  const handleChange = (e) => {
    setInput(e);
  };

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setGradeEdit(false);
  };

  useEffect(() => {
    if (gradeEdit) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [gradeEdit]);

  return (
    <Card tabIndex="0" onClick={toggleEdit}>
      {gradeEdit ? (
        <form ref={node} onSubmit={handleSubmit}>
          <InputTextBar
            handleChange={handleChange}
            value={input}
            onSubmit={toggleEdit}
            isDark={darkModeCtx.isDark}
            autoFocus="false"
          />
        </form>
      ) : (
        <Fragment>
          <div>
            <h1>{props.subject}</h1>
            <h3>Coeff. {props.coeff}</h3>
          </div>
          <h2>
            {props.grade}
            <span>/20</span>
          </h2>
        </Fragment>
      )}
    </Card>
  );
};
export default GradeCard;
