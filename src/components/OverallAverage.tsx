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
  background: rgba(96, 73, 220, 1);
  background: -webkit-radial-gradient(
    bottom right,
    rgba(96, 73, 220, 1),
    rgba(88, 85, 194, 1)
  );
  background: -moz-radial-gradient(
    bottom right,
    rgba(96, 73, 220, 1),
    rgba(88, 85, 194, 1)
  );
  background: radial-gradient(
    to top left,
    rgba(96, 73, 220, 1),
    rgba(88, 85, 194, 1)
  );

  div {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > * {
      color: white;
    }
  }
  svg {
    margin: auto;
    width: 3rem;
    height: 0.05rem;
    opacity: 0.7;
    background: white;
  }
  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 4rem;
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

const OverallAverage = (props: any) => {
  const gradesCtx = useContext(GradesContext);

  const checkAverage = () => {
    // if (isNaN(gradesCtx.overallAverage)) return <h1>-</h1>;
    if (!isNaN(gradesCtx.overallAverage))
      return (
        <div>
          <h1>{`${gradesCtx.overallAverage}`}</h1>
          <svg height="1" fill="none">
            <line x1="0" x2="200" stroke-width="10" />
          </svg>

          <h3>20</h3>
        </div>
      );
  };

  return (
    <Wrapper>
      {/* <h2>Your average is</h2> */}

      {checkAverage()}
    </Wrapper>
  );
};

export default OverallAverage;
