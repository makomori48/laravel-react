import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://cdn.stocksnap.io/img-thumbs/960w/green-field_POIHJNTKDB.jpg')
  }
`;
 
export default GlobalStyle;