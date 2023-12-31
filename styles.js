import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: #ffffff;
  font-size: 20px;
}

section, article{
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

label{
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}
`;
