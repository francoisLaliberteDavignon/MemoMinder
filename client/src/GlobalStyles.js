import { createGlobalStyle } from "styled-components";
import "@fontsource/lexend-mega"

const GlobalStyles = createGlobalStyle`

  :root {
    --color-sand: #FFF0B1;
    --color-border: #00F0B1;
    --color-green: #1E9E6C;
    --color-gray: #E3ECEC24 ;
    --color-orange: #E27A21;
    --color-pink: #FFE1F0;

    --font-heading: "Lexend Mega", sans-serif;
    --font-body: 'PublicSansRegular';
  }

  /*****Media query *****/

@media (max-width: 1024px) { 
  .wrapper{
    flex-direction: column;
    
  }
  .after_media_query {
    margin-top: 50px;
    align-items: center;
    width: 100%;
  }
} 

  /*****Reset styles *****/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html body div#root {
    width: 100%;
  }


  /*****Default font, style and line-height *****/


  body {
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.5;
    scrollbar-width: thin ;
    scrollbar-color:  var(--color-pink) var(--color-green); 
  }

  .main {
    background-color: var(--color-green);
  }

  /******  Headings ******/
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
  }

  h1 {
    font-size: 40px;
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
    font-size: 18px;
    margin: 15px 0;
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
    font-family: var(--font-body);
  }

  /******  Buttons  ******/
  button {
    background-color: var(--color-pink);
    border-radius: 15px;
    cursor: pointer;
    color: black;
    font-size: 13px;
    font-family: var(--font-heading);
    padding: 10px 40px;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 8px 8px var(--color-orange);
    }
  }

  /****** Navigation ******/
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }

  .navigation {
    border-radius: 15px;
    padding: 10px;
    background-color: var(--color-green);
    font-family: var(--font-heading);
    font-size: min(max(1rem, 1.2vw), 13px);
    transition: all 0.3s ease;
    text-align: center;
      &:hover{
      overflow: hidden;
      box-shadow: 8px 8px var(--color-orange);
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

  /****** Forms and submissions ******/

  label {
    font-family: var(--font-heading);
    padding-right: 20px;
  }

  input {
    font-size: 15px;
    border: none;
    font-family: var(--font-body);
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
    &:checked {
    }
  }

  textarea {
    font-family: var(--font-body);
    border: none;
    &:focus{
    outline: none;
    }
  }

  .react-datepicker-wrapper {
    width: fit-content;
    height: fit-content;
    block-size: fit-content;
  }

  .icon {
    font-size: 20px;
    margin-left: 10px;
  }

  .footIcon {
    font-size: 25px;
    margin: 0 12px;
    color: var(--color-green);
    &:hover {
      transform: scale(1.3);
    }
  }

  .icon :hover {
    border-radius: 50%;
  }

  /****** calendar ******/
  
  .calendar {
    max-width: 100%;
    font-size: 25px;
    background-color: white;
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
