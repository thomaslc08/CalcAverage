import React, { useEffect, useState } from "react";

const GradesContext = React.createContext({
  grades: [
    {
      subject: "",
      grade: 0,
      coeff: 0,
    },
  ],
  overallAverage: 0,
  totalCoeff: 0,
  addGrade: (enteredValues) => {},
  updateOverallAverage: (enteredValues) => {},
});

export const GradesContextProvider = (props) => {
  // Setting up states
  const [grades, setGrades] = useState([]);
  const [overallAverage, setOverallAverage] = useState(0);
  const [totalCoeff, setTotalCoeff] = useState(0);

  // Add grade to array

  const addGrade = (inputs) => {
    const checkGrade = () => {
      const defaultSubject = "Subject " + (grades.length + 1);

      if (inputs === "") return;
      if (inputs.length === 1 && isNaN(inputs[0])) return;
      if (inputs[0] > 20) return;

      // Inputs = 1

      if (inputs.length === 1)
        return {
          subject: defaultSubject,
          grade: Number(inputs[0]),
          coeff: 1,
        };

      // Inputs = 2

      // If input[0] = string => subject + grade
      // if input[0] = number => grade + coeff

      if (inputs.length === 2 && isNaN(inputs[0])) {
        return {
          subject: inputs[0],
          grade: Number(inputs[1]),
          coeff: 1,
        };
      }
      if (inputs.length === 2 && !isNaN(inputs[0])) {
        return {
          subject: defaultSubject,
          grade: Number(inputs[0]),
          coeff: Number(inputs[1]),
        };
      }

      // Inputs = 3

      if (inputs.length === 3) {
        return {
          subject: inputs[0],
          grade: Number(inputs[1]),
          coeff: Number(inputs[2]),
        };
      }
    };

    const newGrade = checkGrade();

    // Add grade only if there's a new grade
    if (newGrade) setGrades([...grades, newGrade]);
  };

  // Update the overall average
  const updateOverallAverage = (params) => {
    if (grades.length === 0) return;

    const average =
      grades
        .map((grade) => grade.grade * grade.coeff)
        .reduce(function (acc, cur) {
          return acc + cur;
        }) /
      grades
        .map((grade) => grade.coeff)
        .reduce(function (acc, cur) {
          return acc + cur;
        });

    const roundedAverage = Math.round(average * 100) / 100;

    console.log(totalCoeff);

    setOverallAverage(roundedAverage);
    setTotalCoeff(
      grades
        .map((grade) => grade.coeff)
        .reduce(function (acc, cur) {
          return acc + cur;
        })
    );
  };

  // Update the overall average as soon as grades are updated
  useEffect(() => {
    updateOverallAverage();
  }, [grades]);

  return (
    <GradesContext.Provider
      value={{
        addGrade: addGrade,
        overallAverage: overallAverage,
        grades: grades,
        totalCoeff: totalCoeff,
      }}
    >
      {props.children}
    </GradesContext.Provider>
  );
};

export default GradesContext;
