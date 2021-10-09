import React, { useEffect, useState } from "react";

const GradesContext = React.createContext({
  grades: [
    {
      subject: "",
      grade: 0,
      coeff: 0,
    },
  ],
  totalCoeff: 0,
  overallAverage: 0,
  addGrade: (enteredValues) => {},
  updateOverallAverage: (enteredValues) => {},
});

export const GradesContextProvider = (props) => {
  const [grades, setGrades] = useState([
    {
      subject: "",
      grade: 0,
      coeff: 0,
    },
  ]);

  const [overallAverage, setOverallAverage] = useState(0);

  const addGrade = (inputs) => {
    let newGrade;

    switch (inputs.length) {
      case 0:
        console.log("object");
        break;

      case 1:
        if (isNaN(inputs[0])) {
          newGrade = {
            subject: inputs[0],
            grade: 0,
            coeff: 0,
          };
        }
        if (!isNaN(inputs[0])) {
          if (inputs[1] > 20) {
            newGrade = {
              subject: "",
              grade: null,
              coeff: null,
            };
            return;
          }
          newGrade = {
            subject: "Subject " + grades.length,
            grade: Number(inputs[0]),
            coeff: 1,
          };
        }
        break;

      case 2:
        if (inputs[1] > 20) {
          newGrade = {
            subject: "",
            grade: null,
            coeff: null,
          };
        }
        newGrade = {
          subject: inputs[0],
          grade: Number(inputs[1]),
          coeff: 1,
        };
        break;

      case 3:
        if (inputs[1] > 20) {
          newGrade = {
            subject: "",
            grade: null,
            coeff: null,
          };
        }
        newGrade = {
          subject: inputs[0],
          grade: Number(inputs[1]),
          coeff: Number(inputs[2]),
        };
        break;

      default:
        newGrade = {
          subject: inputs[0],
          grade: Number(inputs[0]),
          coeff: Number(inputs[2]),
        };
        break;
    }
    setGrades([...grades, newGrade]);
  };

  const updateOverallAverage = (params) => {
    const averageGrades = grades
      .map((grade) => grade.grade * grade.coeff)
      .reduce(function (acc, cur) {
        return acc + cur;
      });

    const coeffSum = grades
      .map((grade) => grade.coeff)
      .reduce(function (acc, cur) {
        return acc + cur;
      });

    const average = averageGrades / coeffSum;

    setOverallAverage(average);
  };

  useEffect(() => {
    updateOverallAverage();
  }, [grades]);

  return (
    <GradesContext.Provider
      value={{
        addGrade: addGrade,
        overallAverage: overallAverage,
        grades: grades,
      }}
    >
      {props.children}
    </GradesContext.Provider>
  );
};

export default GradesContext;
