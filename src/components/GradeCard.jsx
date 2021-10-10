import styled from "styled-components";
import { useContext } from "react";
import GradesContext from "../store/gradesContext";

const Card = styled.div`
  * {
    margin: 0;
  }
  padding: 1rem;
  /* border-radius: 12px; */
  /* background: #272c36; */
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
  span {
    font-weight: 400;
    font-size: 1.1rem;
    /* color: #a7a7a7 */
  }
  h1 {
    font-weight: 600;
  }
  h2 {
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  h3 {
    font-weight: 400;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #8b8b8b;
  }
`;

const GradeCard = (props) => {
  const gradesCtx = useContext(GradesContext);
  return (
    <Card>
      <div>
        <h1>{props.subject}</h1>
        <h3>Coeff. {props.coeff}</h3>
      </div>
      <h2>
        {props.grade}
        <span>/20</span>
      </h2>
    </Card>
  );
};

export default GradeCard;
