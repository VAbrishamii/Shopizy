import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 0.3s, color 0.3s;
  }
  

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
  }

  .content {
    flex: 1; 
    padding-bottom: 120px;
  }
  

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  button {
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.medium};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  a {
    // font-size: 22px;
    color: ${({ theme }) => theme.colors.textPrimary}; 
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;
    }

    /* Works in Chrome, Edge, Safari */
  ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background}; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.darkGrey}; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkGrey}; 
  }

  /* Hide scrollbar for mobile */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* Smooth Scrolling Effect */
  html {
    scroll-behavior: smooth;
  }

  
`;

export default GlobalStyles;
