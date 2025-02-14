
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <ThemeProvider theme={theme("light")}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
