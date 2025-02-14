export const theme = (mode) => ({
    colors: {
      primary: "#6A0DAD",
      secondary: "#512D6D",
      background: mode === "dark" ? "#121212" : "#F5F5F5",
      card: mode === "dark" ? "#1E1E1E" : "#FFFFFF",
      textPrimary: mode === "dark" ? "#EDEDED" : "#222222",
      textSecondary: mode === "dark" ? "#B3B3B3" : "#4A4A4A",
      success: mode === "dark" ? "#03DAC6" : "#4CAF50",
      error: mode === "dark" ? "#CF6679" : "#D32F2F",
    },
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
  