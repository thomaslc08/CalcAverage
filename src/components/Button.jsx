import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  background: ${(props) => (props.isDark ? "#121a13" : "#19191b")};
  border-radius: 12px;
  color: white;
  padding: 24px;
  margin: 0;
  border: none;
  font-weight: 500;
  font-family: inherit;


  &:active {
    transition: 0.1s ease-out;

    background: ${(props) => (props.isDark ? "#374350" : "#44444b")};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: 0.1s ease-out;
      background: ${(props) => (props.isDark ? "#374350" : "#44444b")};
    }
  }
`;

const Button = (props) => {
  return <StyledButton isDark={props.isDark}>{props.children}</StyledButton>;
};

export default Button;

// <!-- HTML !-->
// <button class="button-40" role="button">Button 40</button>

// /* CSS */
// .button-40 {
//   background-color: #111827;
//   border: 1px solid transparent;
//   border-radius: .75rem;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   flex: 0 0 auto;
//   font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
//   font-size: 1.125rem;
//   font-weight: 600;
//   line-height: 1.5rem;
//   padding: .75rem 1.2rem;
//   text-align: center;
//   text-decoration: none #6B7280 solid;
//   text-decoration-thickness: auto;

//   width: auto;
// }

// .button-40:hover {
//   background-color: #374151;
// }

// .button-40:focus {

// }

// @media (min-width: 768px) {
//   .button-40 {
//     padding: .75rem 1.5rem;
//   }
// }
