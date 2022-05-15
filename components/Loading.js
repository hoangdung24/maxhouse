import { Fade, Box, styled } from "@mui/material";

import LoadingIcon from "./LoadingIcon";

const Loading = ({ isLoading }) => {
  return (
    <Fade
      in={isLoading}
      timeout={{
        exit: 1000,
      }}
    >
      <Wrapper>
        <LoadingIcon />
      </Wrapper>
    </Fade>
  );
};

export default Loading;

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    zIndex: 9999,
  };
});
