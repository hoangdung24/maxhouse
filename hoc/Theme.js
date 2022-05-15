import { createTheme, ThemeProvider, alpha } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const fontFamily = [
  "Mulish",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#EE4F2D",
      light: "#ff8259",
      dark: "#b41100",
    },
    secondary: {
      main: "#1074BA",
      light: "#5ba2ed",
      dark: "#00498a",
    },

    error: {
      main: "#b41100",
      light: "#ee4f2d",
      dark: "#7d0000",
    },

    text: {
      primary: "#2b2b2b",
    },
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.75rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    button: {
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
    overline: {
      fontSize: "0.75rem",
    },
  },
  palette: {
    primary: {
      main: "#1074BA",
      light: "#5ba2ed",
      dark: "#00498a",
    },
    secondary: {
      main: "#EE4F2D",
      light: "#ff8259",
      dark: "#b41100",
    },
    text: {
      primary: "#2b2b2b",
    },
  },
});

const theme = createTheme({
  ...defaultTheme,

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        "&:active": {
          backgroundColor: alpha(
            defaultTheme.palette.primary.main,
            defaultTheme.palette.action.activatedOpacity
          ),
        },
        "&:focus": {
          backgroundColor: alpha(
            defaultTheme.palette.primary.main,
            defaultTheme.palette.action.focusOpacity
          ),
        },

        text: {
          transition: `color ${defaultTheme.transitions.duration.standard}ms ${defaultTheme.transitions.easing.easeOut}`,
          "&:hover": {
            backgroundColor: "unset",
            color: defaultTheme.palette.primary.dark,
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "0.25rem",
          transition: `opacity ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,

          "&:active": {
            backgroundColor: "unset",
            opacity: 0.8,
          },
          "&:focus": {
            backgroundColor: "unset",
            opacity: 0.8,
          },
          "&:hover": {
            backgroundColor: "unset",
            opacity: 0.8,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: "0.25rem",
          marginRight: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          marginTop: "0.5rem !important",
          borderWidth: "0.0625rem",
          borderColor: defaultTheme.palette.primary.light,
          borderStyle: "solid",
          borderRadius: "0.25rem",

          ["& input"]: {
            padding: "0.5rem 0.75rem",
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.subtitle2,
          color: defaultTheme.palette.text.primary,
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
        },
      },
    },
  },
});

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
