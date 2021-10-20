import { useContext } from "react";
import GradesContext from "../store/gradesContext";
import styled from "styled-components";
import GradeCard from "./GradeCard";
import { Fragment } from "react";

const GradesContainer = styled.div`
  margin-top: 1rem;
  margin-right: 6rem;
  flex: 1;

  & > * {
    /* margin: 10rem 0%; */
    /* margin-bottom: 0; */
    /* margin-top: 0; */
  }
  /* flex: 1; */
  /* display: flex; */
  /* flex-direction: column-reverse; */
  /* margin-right: 10rem; */
  /* transition: all 3s ease-out; */

  svg {
    margin: 0rem;
    width: 100%;
    animation: 1s 1 fadeIn ease-in-out; /* Do the Fade. */
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
  }

  @media screen and (max-width: 1070px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Grades = () => {
  const gradesCtx = useContext(GradesContext);

  return (
    <GradesContainer>
      {gradesCtx.grades &&
        gradesCtx.grades.map((grade) => (
          <Fragment>
            <GradeCard
              key={grade.id}
              id={grade.id}
              subject={grade.subject}
              grade={grade.grade}
              coeff={grade.coeff}
            />
            <svg
              height="3"
              // viewBox="0 0 301 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="1000" y1="0" x2="0" y2="0" stroke="grey" />
            </svg>
          </Fragment>
        ))}
      <Bottom>
        <p>Grades : {gradesCtx.grades ? gradesCtx.grades.length : 0}</p>
        <p>Coeff : {gradesCtx.totalCoeff}</p>
      </Bottom>
    </GradesContainer>
  );
};

export default Grades;
