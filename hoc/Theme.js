import { createTheme, ThemeProvider, alpha } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const fontFamily = [
  "Oswald",
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
      fontSize: "3.583rem",
      lineHeight: "5.309rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.986rem",
      lineHeight: "4.425rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2.488rem",
      lineHeight: "3.688rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2.074rem",
      lineHeight: "3.073rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.728rem",
      lineHeight: "2.561rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.44rem",
      lineHeight: "2.134rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1rem",
    },
    body_large: {
      fontSize: "1.2rem",
      lineHeight: "1.778rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.482rem",
      fontWeight: 300,
    },
    body_small: {
      fontSize: "0.833rem",
      lineHeight: "1.235rem",
      fontWeight: 200,
    },
    body_small_bold: {
      fontSize: "0.694rem",
      lineHeight: "1.029rem",
      fontWeight: 600,
    },
    button: {
      fontSize: "0.875rem",
    },
  },
  palette: {
    primary: {
      main: "#cb0101",
      light: "#ff4f30",
      dark: "#920000",
    },

    text: {
      primary: "#2b2b2b",
    },
    common: {
      black: "#131313",
      neutral1: "#777E90",
      neutral2: "#B1B5C3",
      neutral3: "#E6E8EC",
      neutral4: "#F4F5F6",
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
          borderWidth: "0.125rem",
          borderColor: defaultTheme.palette.common.neutral2,
          borderStyle: "solid",
          borderRadius: "0.75rem",
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
          ["& input"]: {
            padding: "0.75rem 1rem",
          },
          ["&.Mui-focused"]: {
            borderColor: defaultTheme.palette.common.neutral1,
          },

          ["& input::placeholder"]: {
            ...defaultTheme.typography.body1,
            color: defaultTheme.palette.common.neutral3,
            opacity: 1,
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
          ...defaultTheme.typography.body_small_bold,
          fontWeight: 600,
          textTransform: "uppercase",
          color: defaultTheme.palette.common.neutral2,
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
          "&.Mui-focused": {
            color: defaultTheme.palette.common.neutral1,
          },
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
