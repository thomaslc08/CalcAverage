import { useContext } from "react";
import GradesContext from "../store/gradesContext";
import { useEffect } from "react";

const Grades = () => {
  const gradesCtx = useContext(GradesContext);

  return (
    <div>
      <ul>
        {gradesCtx.grades.map((grade) => (
          <li>{grade.subject + grade.grade + grade.coeff}</li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
