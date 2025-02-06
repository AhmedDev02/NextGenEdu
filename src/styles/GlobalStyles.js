import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

/* Font colors  */
--font-black:#000000;
--font-dark-blue:#2A3248;

  /* Active Color */
  --color-active: #D9F3E8;


/* Primary Colors */
  --color-primary-green:  linear-gradient(180deg, #30BD58 0%, #399F63 100%);  

  --color-danger-red:  linear-gradient(180deg, #FF3D60 0%, #B82D42 100%);


  --color-secondary-darkblue: #2A3248 ;  

 /* shadows */
 --shadow-primary: 0px 1px 16px 1px #11231626; 

/* border-radius */
    --border-radius-sm: 5px;
    --border-radius-md: 15px;
    --border-radius-lg: 25px;
    
/* font-weight */
  --font-weight-light: 300;      /* Thin */
  --font-weight-regular: 400;    /* Default */
  --font-weight-medium: 500;     /* Semi-Bold */
  --font-weight-semibold: 600;   /* Slightly Bolder */
  --font-weight-bold: 700;       /* Bold */
  --font-weight-extra-bold: 900; /* Strongest */
}
 *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

html {
  font-size: 62.5%; /* 1 rem = 10 px */ 


} 
body {

  font-family: "Changa", sans-serif;
  color: var(--color-grey-700);
  background-color:#F1F1F1 ;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem; 
    direction: rtl;
  }
  
  button {
    cursor: pointer;
  }
  *:disabled {
    cursor: not-allowed;
  }
  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-secondary-darkblue);
    outline-offset: -1px;
  }
  button:has(svg) {
    line-height: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
    
  button, a {
  transition: background-color 0.2s ease-in, color 0.2s ease-in, transform 0.2s ease-in-out;
}
  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img{
    max-width: 100%;
  }
  .none-display{
    display: none;
  }
  .full-width{
    width: 100%!important;
  }
`;
export default GlobalStyles;
