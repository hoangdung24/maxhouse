import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import { Box, useTheme, Slide } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const BackToTop = () => {
  const theme = useTheme();
  const { y } = useWindowScroll();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (y > 500 && !shouldAnimate) {
      setShouldAnimate(true);
    }

    if (y < 500 && shouldAnimate) {
      setShouldAnimate(false);
    }
  }, [y, shouldAnimate]);

  return (
    <Slide direction="up" in={shouldAnimate} mountOnEnter>
      <Box
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          cursor: "pointer",
          backgroundColor: theme.palette.primary.main,
          width: "2.5rem",
          height: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.25rem",
          transition: `${theme.transitions.duration.standard}ms`,
          ["&:hover"]: {
            opacity: 0.8,
          },
        }}
        onClick={() => {
          if (typeof window !== undefined) {
            window.scrollTo({
              top: 0,
              left: 0,
            });
          }
        }}
      >
        <ArrowUpwardIcon
          sx={{
            color: `${theme.palette.common.white} !important`,
          }}
        />
      </Box>
    </Slide>
  );
};

export default BackToTop;
