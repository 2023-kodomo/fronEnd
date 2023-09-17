import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      @font-face {
      font-family: Pretendard;
      font-weight: 400;
      src: url(@assets/fonts/Pretendard-Regular.woff) format('font-woff');
    }
  }
  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    margin: 0;
    background-color: #7A6CCF;
  }
  input {
    border: 0;
    outline: 0;
  }
`;

export default GlobalStyle;
