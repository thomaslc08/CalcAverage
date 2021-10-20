import React, { useEffect, useState } from "react";

const GradesContext = React.createContext({
  grades: [
    {
      id: 0,
      subject: "",
      grade: 0,
      coeff: 0,
    },
  ],
  overallAverage: 0,
  totalCoeff: 0,
  addGrade: (input) => {},
  updateGrade: (input, id) => {},
  updateOverallAverage: (input) => {},
  resetGrades: () => {},
});

export const GradesContextProvider = (props) => {
  // Setting up states
  const [grades, setGrades] = useState([]);
  const [totalGrades, setTotalGrades] = useState(0);
  const [overallAverage, setOverallAverage] = useState(0);
  const [totalCoeff, setTotalCoeff] = useState(0);

  const multipleInputsToArray = (input) => {
    return input.split(";").map((input) => input.replace(/\s*$/, ""));
  };

  const inputToArray = (input) => {
    return input.split(",").map((input) => input.replace(/\s*$/, ""));
  };

  const checkGrade = (input, key) => {
    try {
      const defaultSubject = "Subject " + key;

      if (input[0] === "") throw new Error("Please enter a value");
      if (Number(input[0] > 20)) return;
      if (Number(input[1] > 20)) return;
      // input = 1

      if (input.length === 1) {
        if (isNaN(input[0])) return;

        return {
          id: key,
          subject: defaultSubject,
          grade: Number(input[0]),
          coeff: 1,
        };
      }

      // input = 2

      // If input [1] = string => return
      // If input[0] = string => subject + grade
      // if input[0] = number => grade + coeff

      if (input.length === 2) {
        if (isNaN(input[1])) return;
        if (isNaN(input[0])) {
          return {
            id: key,
            subject: input[0],
            grade: Number(input[1]),
            coeff: 1,
          };
        }
        if (!isNaN(input[0])) {
          return {
            id: key,
            subject: defaultSubject,
            grade: Number(input[0]),
            coeff: Number(input[1]),
          };
        }
      }

      // input = 3

      if (input.length === 3) {
        console.log(input);
        if (isNaN(input[2]) || isNaN(input[1])) return;

        return {
          id: key,
          subject: input[0],
          grade: Number(input[1]),
          coeff: Number(input[2]),
        };
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // ADD GRADE

  const addGrade = (input) => {
    const newGrades = multipleInputsToArray(input).map((arrayEl, i) => {
      const gradeToCheck = inputToArray(arrayEl);
      const newGrade = checkGrade(gradeToCheck, totalGrades + i + 1);
      return newGrade;
    });

    if (newGrades[0]) {
      setGrades(grades.concat(newGrades));
      setTotalGrades(totalGrades + 1);
    } else console.log("error");
  };

  // UPDATE GRADE

  const updateGrade = (input, id) => {
    console.log(input);
    if (input === "") {
      setGrades([...grades]);
      return;
    }

    const index = grades.findIndex((el) => el.id === id);
    grades.splice(index, 1);

    const gradeArray = inputToArray(input);

    const updatedGrade = checkGrade(gradeArray, id);

    if (!updatedGrade) return;

    const sortedGrades = grades
      .concat(updatedGrade)
      .sort((a, b) => Number(a.id) - Number(b.id));
    setGrades(sortedGrades);
  };

  // Update the overall average

  const resetGrades = () => {
    setTotalGrades(0);
    setGrades([]);
    setTotalCoeff(0);
    setOverallAverage(0);
  };

  // Update the overall average as soon as grades are updated
  useEffect(() => {
    setTotalGrades(grades.length);

    if (grades.length === 0) {
      setOverallAverage(0);
      return;
    }

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
    if (roundedAverage === "NaN") return;

    setOverallAverage(roundedAverage);

    if (grades.length > 0) {
      setTotalCoeff(
        grades
          .map((grade) => grade.coeff)
          .reduce(function (acc, cur) {
            return acc + cur;
          })
      );
    } else setTotalCoeff(0);
  }, [grades]);

  return (
    <GradesContext.Provider
      value={{
        addGrade: addGrade,
        updateGrade: updateGrade,
        overallAverage: overallAverage,
        grades: grades,
        resetGrades: resetGrades,
        totalCoeff: totalCoeff,
      }}
    >
      {props.children}
    </GradesContext.Provider>
  );
};

export default GradesContext;
