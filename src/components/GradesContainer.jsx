import { useContext } from "react";
import GradesContext from "../store/gradesContext";
import { useEffect } from "react";
import styled from "styled-components";
import GradeCard from "./GradeCard";

const GradesContainer = styled.div`
  & > * {
    margin: 1rem 0;
  }
  flex: 1;
  margin-right: 10rem;

  @media screen and (max-width: 1070px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  color: #808080;
  display: flex;
  justify-content: space-between;
`;

const Grades = () => {
  const gradesCtx = useContext(GradesContext);

  return (
    <GradesContainer>
      {gradesCtx.grades &&
        gradesCtx.grades.map((grade) => (
          <GradeCard
            subject={grade.subject}
            grade={grade.grade}
            coeff={grade.coeff}
          />
        ))}
      <Bottom>
        <p>Grades : {gradesCtx.grades.length}</p>
        <p>Coeff : {gradesCtx.totalCoeff}</p>
      </Bottom>
    </GradesContainer>
  );
};

export default Grades;
