import { Container as MuiContainer, styled } from "@mui/material";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled(MuiContainer)(({ theme }) => {
  return {
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  };
});
