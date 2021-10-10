import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  background: ${(props) => (props.isDark ? "#12161a" : "#19191b")};
  border-radius: 12px;
  color: white;
  /* margin: 1px 16px; */
  padding: 24px;
  margin: 0;
  border: none;
  font-weight: 500;
  font-family: inherit;
  transition: 0.3ms ease-out;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: #374151;
  }
  &:focus {
    box-shadow: none;
    outline: 2px solid white;
    outline-offset: 2px;
  }
  @media screen and (max-width: 1070px) {
    padding: 1rem 0;
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
