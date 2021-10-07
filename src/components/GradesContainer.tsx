import { useContext } from "react";
import GradesContext from "../store/gradesContext";

const Grades = () => {
  const gradesCtx = useContext(GradesContext);
  return (
    <div>
      <ul>
        {gradesCtx.grades.map((grade) => (
          <li>{grade.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;
