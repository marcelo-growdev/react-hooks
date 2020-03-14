import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 50;
    padding: 50;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #999;
  }

  body, input, button {
    font: 20px 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }
`;
