import styled from "styled-components";
import { useContext } from "react";
import GradesContext from "../store/gradesContext";

const Wrapper = styled.div`
  padding: 2rem 0;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
  width: fit-content;
  h2 {
    margin: auto;
    text-align: center;
    font-family: "Inter";
    font-weight: 400;
    font-size: 1.4rem;
  }
  h1 {
    margin: auto 1rem;
    text-align: center;
    font-weight: 500;
    font-family: "Inter";
    font-size: 5rem;
  }
`;

const OverallAverage = (props: any) => {
  const gradesCtx = useContext(GradesContext);

  return (
    <Wrapper>
      <h2>Your average is</h2>
      <h1>{gradesCtx.overallAverage}</h1>
    </Wrapper>
  );
};

export default OverallAverage;
