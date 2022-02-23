import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
}

h1, h2 {
    font-family: 'Bitter', serif;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
