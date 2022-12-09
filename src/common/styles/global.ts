import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    background-color: #FAFAFA;
  }

  h1, h2, h3, h4, menu, header, main {
    margin: 0;
    padding: 0;
  }
  
  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin: 0;
      padding: 0;
    }
  }
`;
