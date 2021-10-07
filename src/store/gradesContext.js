import React, { useState } from "react";

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
});

export const GradesContextProvider = (props) => {
  const [grades, setGrades] = useState([
    {
      subject: "French",
      grade: 5,
      coeff: 24,
    },
  ]);

  const [overallAverage, setOverallAverage] = useState(5);

  const addGrade = (inputText) => {
    console.log(inputText);

    //Update the overall average
    setOverallAverage(3);

    // Update the grades with the entered values
    setGrades([
      ...grades,
      {
        subject: inputText,
        grade: 5,
        coeff: 3,
      },
    ]);
  };
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
