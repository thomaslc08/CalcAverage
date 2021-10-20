// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {

    margin: 0 7rem;
    padding: 0;
    font-family: "Inter";
    height: 100%;
    /* transition:  color ease-in-out 3s; */
    background-color: ${(props) => (props.isDark ? "#272c36" : "#fff")};
    overflow-x: hidden;
    
    * > * {
      color: ${(props) => props.isDark && "white"};
  transition:  background 3s ease-out;

    };
    



    @media screen and (max-width: 1070px) {
    margin: 0 3rem;
  }
    @media screen and (max-width: 700PX) {
    margin: 0 1rem;
  }

  }
`;

export default GlobalStyle;
