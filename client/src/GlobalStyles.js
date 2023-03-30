import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --color-main-background: #fff;
    --color-secondary: #edf0f2;
    --color-accent: powderblue;
    --font-heading: 'Ubuntu', Arial, Helvetica, sans-serif;
    --font-body: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  }

  /* Reset styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set default font family, size, and line height */
  body {
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.5;
  }

  /* Set background color for entire page */
  body {
    background-color: var(--color-main-background);
    margin: 25px auto;
  }

  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    font-weight: bold;
    line-height: 1.2;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  /* Links */
  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #444444;
  }

  p {
    font-size: 14px;
  }

  /* Buttons */
  button {
    background-color: var(--color-accent);
    border-radius: 15px;
    color: black;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 40px;
    transition: all 0.3s ease;
    border: 1px lightgray solid;
  }

  button:hover {
    background-color: #d4ff8a;
  }

  /* Navigation */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    margin-right: 24px;
  }

  nav a {
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }

  .calendar {
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    line-height: 1.125em;
  }

  .calendar button {
    background-color: white;
    border: none

  }

  .calendar p {
    background-color: #444444;
  }
`;

export default GlobalStyles;
