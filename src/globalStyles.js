// globalStyles.js
import { useContext } from "react";
import DarkModeContext from "./store/darkModeContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {


    margin: 0 7rem;
    padding: 0;
    font-family: "Inter";
    height: 100vh;
    transition: background ease-in-out 0.30s;
    background: ${(props) => props.isDark && "#272c36"};
    
    * > * {
      color: ${(props) => props.isDark && "white"};
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
