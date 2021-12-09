import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main}

  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    width: 100vw;
    height: 100vh;
    font-size: 25px;
    background: #AA076B;
    background: -webkit-linear-gradient(to right, #61045F, #AA076B);
    background: linear-gradient(to right, #61045F, #AA076B);

    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.main};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
