import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


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

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.medium};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyles;
