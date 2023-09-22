import { createGlobalStyle } from "styled-components";
import "../fonts/Font.css";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      @font-face {
      font-family: Pretendard;
      font-weight: 400;
      src: url(@assets/fonts/Pretendard-Regular.woff) format('font-woff');

      @font-face {
        font-family: "Hakgyoansim Wooju";
        src: url("../fonts/HakgyoansimWoojuR.ttf") format('truetype');
      } 
    }
  }
  body {
    width: 100vw;
    min-height: 100vh;
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
