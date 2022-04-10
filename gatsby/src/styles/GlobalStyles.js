import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --maincolor:${({mainColor}) => mainColor};
    --red: #FF4949;
    --black: #2E2E2E;
    //--primary: #071F2E;
    --primary: ${({mode}) => mode === 'dark' ? '#071F2E' : '#fff'};
    --text: ${({mode}) => mode === 'dark' ? '#fff' : '#071F2E'};
    --yellow: #ffc600;
    --white: #fff;
    --grey: ${({mode}) => mode === 'dark' ? 'rgba(65,73,89,0.91)' : 'rgba(61,87,103,0.3)'};
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: var(--primary);
    color: var(--text);
    font-size: 1rem;
  }

  fieldset {
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--maincolor) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--maincolor);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }
  
  .mapleSyrup {
    display: none;
  }

`;

export default GlobalStyles;
