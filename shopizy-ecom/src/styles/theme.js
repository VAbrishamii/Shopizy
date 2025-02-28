export const theme = (mode) => ({
    colors: {
      primary: "#6A0DAD",
      secondary: "#512D6D",
      black: "#000000",
      white: "#FFFFFF",
      lightGrey: "#EDEDED",
      darkGrey: "#B3B3B3",
      background: mode === "dark" ? "#121212" : "#F5F5F5",
      card: mode === "dark" ? "#292828" : "#FFFFFF",
      textPrimary: mode === "dark" ? "#EDEDED" : "#222222",
      textSecondary: mode === "dark" ? "#B3B3B3" : "#4A4A4A",
      success: mode === "dark" ? "#03DAC6" : "#4CAF50",
      error: mode === "dark" ? "#CF6679" : "#D32F2F",
    },
    boxShadow: mode === "dark" 
    ? "0px 4px 10px rgba(255, 255, 255, 0.1)" 
    : "0px 4px 6px rgba(0, 0, 0, 0.1)",

    fonts: {
      main: "'Poppins', sans-serif",
      body: "'Roboto', sans-serif",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
  });
  