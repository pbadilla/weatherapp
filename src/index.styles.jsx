import reset from "react-style-reset/string";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    color: var(--brownish-grey);
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: normal;
  }
  
`;

export default GlobalStyle;
