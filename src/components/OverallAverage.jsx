import styled from "styled-components";
import { useContext } from "react";
import GradesContext from "../store/gradesContext";

const Wrapper = styled.div`
  * {
    margin: 0;
    width: fit-content;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 4rem;
  border-radius: 1rem;
  /* border-top: 1px grey solid;
  border-bottom: 1px grey solid; */
  width: 7rem;
  height: fit-content;
  /* background: #f2f4f8;
  */
  /* background: rgba(96, 73, 220, 1); */
  background: ${(props) =>
    props.isDark
      ? "radial-gradient(1294.94% 9003.21% at -500.11% -170.24%, #12beca 0%, #fb00ff 100%)"
      : "#f2f4f8"};
  background-size: contain;
  /* transition: all 7s ease-in-out; */
  div {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > * {
      color: ${(props) => (props.isDark ? "white" : "black")};
    }
  }
  svg {
    margin: auto;
    width: 3rem;
    height: 0.05rem;
    opacity: ${(props) => (props.isDark ? "0.5" : "1")};
    stroke: ${(props) => (props.isDark ? "white" : "black")};
  }
  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 4rem;
    opacity: 0.9;
  }
  h2 {
    color: gray;
    text-align: center;
    font-weight: 400;
    font-size: 1.4rem;
  }
  h3 {
    text-align: center;
    font-weight: 200;
    font-size: 3rem;
    opacity: 0.5;
  }
  @media screen and (max-width: 1070px) {
    display: flex;
    margin: auto;
    width: 100%;
    padding: 1rem 0;
  }
`;

const OverallAverage = (props) => {
  const gradesCtx = useContext(GradesContext);

  const checkAverage = () => {
    // if (isNaN(gradesCtx.overallAverage)) return <h1>-</h1>;
    return (
      <div>
        <h1>
          {!isNaN(gradesCtx.overallAverage) ? gradesCtx.overallAverage : 0}
        </h1>
        <svg height="1" fill="none">
          <line x1="0" x2="200" y1="1" y2="1" strokeWidth="10" />
        </svg>

        <h3>20</h3>
      </div>
    );
  };

  return (
    <Wrapper isDark={props.isDark}>
      {/* <h2>Your average is</h2> */}

      {checkAverage()}
    </Wrapper>
  );
};

export default OverallAverage;
