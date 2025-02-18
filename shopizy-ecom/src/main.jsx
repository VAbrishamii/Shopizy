
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import useThemeStore from "./store/useThemeStore";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Main = () => {
  const currentTheme = useThemeStore((state) => state.theme);
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme(currentTheme)}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
