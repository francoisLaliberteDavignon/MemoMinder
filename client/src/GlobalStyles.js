import { createGlobalStyle } from "styled-components";
import "@fontsource/lexend-mega"

const GlobalStyles = createGlobalStyle`

  :root {
    --color-sand: #FFF0B1;
    --color-border: #00F0B1;
    --color-green: #1E9E6C;
    --color-gray: #C1CCCC;
    --color-orange: #E27A21;
    --color-pink: #FFE1F0;

    --font-heading: "Lexend Mega", sans-serif;
    --font-body: 'PublicSansRegular';
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
    background-color: var(--color-green);
    display: flex;
    justify-content: center;
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.5;
    scrollbar-width: thin;
    scrollbar-color:  var(--color-border) var(--color-green); 
  }

  .wrapper {
    background-color: var(--color-sand);
    border: 6px solid var(--color-gray);
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
    text-align: center;
    margin-top: 10px
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
    margin: 8px
  }

  /* Buttons */
  button {
    background-color: var(--color-pink);
    border-radius: 15px;
    cursor: pointer;
    color: black;
    font-size: 13px;
    font-family: var(--font-heading);
    padding: 10px 40px;
    transition: all 0.3s ease;
    border: 1px lightgray solid;
    &:hover {
      box-shadow:16px -16px var(--color-orange);
    }
  }

  /* Navigation */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }

  .navigation {
    border: 1px lightgray solid;
    border-radius: 15px;
    padding: 10px;
    background-color: var(--color-pink);
    font-family: var(--font-heading);
    font-size: 13px;
    transition: all 0.3s ease;
    text-align: center;
      &:hover{
      overflow: hidden;
      box-shadow:   16px -16px var(--color-orange);
    }
  &.active{
      box-shadow:   16px -16px var(--color-orange);
      outline: 3px solid goldenrod ;
    }
  }

  .title-hovered {
    text-decoration: line-through;
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

  // Forms and submissions

  label {
    font-family: var(--font-heading);
    padding-right: 20px;
  }

  input {
    &:focus{
    outline: none;
    }
  }

  input[type=checkbox] {
    width: 45px;
    height: 15px;
    background: #555;
    position: relative;
    border-radius: 5px;
    
  }

  textarea {
    font-family: var(--font-body);
    &:focus{
    outline: none;
    }
  }

  .icon {
    font-size: 20px;
    margin-left: 10px;
  }

  .icon :hover {
    border-radius: 50%;
  }

  // calendar
  .calendar {
    max-width: 100%;
    font-size: 25px;
    background-color: var(--color-pink);
    color: #222;
    border-radius: 8px;
    line-height: 1.125em;
    border: none;

  }

  .calendar .styledDate {
    background-color: red;
  }

  .calendar button {
    box-shadow: none;
    &:hover{
      background-color: var(--color-green);
    }
  }

  .calendar p {
    background-color: #444444;
  }
`;

export default GlobalStyles;
