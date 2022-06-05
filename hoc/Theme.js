import { createTheme, ThemeProvider, alpha } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
      display: "inline-block",
    },
    body_regular_bold: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 500,
      display: "inline-block",
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
    title: {
      fontWeight: 500,
      fontSize: "1.2rem",
      lineHeight: "1.75rem",
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
      primary: "#1b1b1b",
      error: "#cb0101",
      success: "#22bb33",
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
        root: {
          whiteSpace: "nowrap",
        },
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
        outlined: {
          "&:hover": {
            color: defaultTheme.palette.common.white,
            backgroundColor: defaultTheme.palette.primary.main,
          },
        },
        text: {
          transition: `color ${defaultTheme.transitions.duration.standard}ms ${defaultTheme.transitions.easing.easeOut}`,
          "&:hover": {
            backgroundColor: "unset",
            color: defaultTheme.palette.primary.main,
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
          overflow: "hidden",
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
        inputMultiline: {
          padding: "0.75rem 1rem",
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
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: defaultTheme.palette.common.black,
      },
      styleOverrides: {
        root: {
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
          ["&:hover"]: {
            color: defaultTheme.palette.primary.main,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: defaultTheme.palette.common.neutral3,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette.primary.main,
          [defaultTheme.breakpoints.up("md")]: {
            color: defaultTheme.palette.common.black,
            ["&:hover"]: {
              color: defaultTheme.palette.primary.main,
            },
          },
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette.common.black,
          "& .MuiTabs-flexContainer": { justifyContent: "center" },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette.common.black,
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
          ...defaultTheme.typography.body_regular_bold,
          padding: "8px 12px",
          minHeight: "unset",
          lineHeight: "2rem",
          [defaultTheme.breakpoints.up("md")]: {
            ...defaultTheme.typography.h6,
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          border: `2px solid ${defaultTheme.palette.primary.main}`,
          transition: `all ${defaultTheme.transitions.duration.short}ms ${defaultTheme.transitions.easing.easeOut}`,
          ["&.Mui-disabled"]: {
            borderColor: "transparent",
          },
          ["&.Mui-disabled .MuiSvgIcon-root"]: {
            color: defaultTheme.palette.common.neutral2,
          },
        },
      },
      defaultProps: {
        components: {
          next: ArrowRightAltIcon,
          previous: (props) => {
            return (
              <ArrowRightAltIcon
                {...props}
                sx={{
                  transform: "rotate(180deg)",
                }}
              />
            );
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
