import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#3154a8",
      dark: "#243d7d",
      light: "#758bd0",
    },
    secondary: {
      main: "#137b72",
      dark: "#07534c",
      light: "#52a99f",
    },
    background: {
      default: "#f7f8fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#182230",
      secondary: "#5f6b7a",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontWeight: 720,
      letterSpacing: "-0.04em",
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 680,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 680,
      letterSpacing: "-0.02em",
    },
    overline: {
      fontWeight: 800,
      fontSize: "0.6875rem",
      letterSpacing: "0.08em",
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#f7f8fb",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontWeight: 650,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.8125rem",
          fontWeight: 600,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: 8,
          fontSize: "0.9375rem",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#aeb8c8",
          },
        },
        notchedOutline: {
          borderColor: "#d7dce5",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#6d7888",
          fontSize: "0.75rem",
          lineHeight: 1.4,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, {
  factor: 2.5,
  variants: ["h1", "h2", "h3"],
});

export { theme };
