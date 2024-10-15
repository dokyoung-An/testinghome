import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: auto;
    overflow-x: hidden;
  }

  h1, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
