import { useState } from "react";

import { Box, Typography, styled, useTheme } from "@mui/material";

import Image from "../Image";
import { useMedia } from "../../hooks";

const AnimationMouse = styled(Box)(({ theme }) => {
  return {
    "@keyframes mouseMove": {
      "0%": {
        top: "5%",
      },

      "100%": {
        top: "80%",
      },
    },

    transition: "all 150ms ease-in-out 100ms",
    width: "28px",
    height: "45px",
    border: `2px solid ${theme.palette.common.black}`,
    borderRadius: "15px",
    position: "absolute",
    left: "3%",
    display: "none",
    bottom: "5%",
    zIndex: 2,
    "::before": {
      content: '""',
      width: "6px",
      height: "6px",
      top: "5%",
      left: "50%",
      transform: "translateX(-50%)",
      position: "absolute",
      borderRadius: "50%",
      backgroundColor: theme.palette.common.black,
      animation: `mouseMove ${theme.transitions.easing.easeInOut} 1500ms infinite`,
    },
  };
});

const BannerTop = ({ src, content = "" }) => {
  const theme = useTheme();
  const { isMdUp } = useMedia();
  const [size, setSize] = useState({
    width: 1,
    height: 1,
  });

  if (!src) {
    return null;
  }

  const imageHeight = size.height / size.width;

  return (
    <Box
      sx={[
        {
          height: "100%",
          width: "100vw",
          overflow: "hidden",
          position: "relative",
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 1,
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(1px)",
          },
        },
        isMdUp && {
          height: "100vh",
        },
      ]}
    >
      <Image
        src={src}
        layout="fill"
        width={"100%"}
        height={`calc(${imageHeight} * 100vw)`}
        objectFit={isMdUp ? "cover" : "cover"}
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          setSize({
            width: naturalWidth,
            height: naturalHeight,
          });
        }}
      />

      <Typography
        variant="h5"
        sx={[
          {
            position: "absolute",
            left: "50%",
            bottom: "4%",
            textAlign: "center",
            transform: "translateX(-50%)",
            width: "50%",
            zIndex: 2,
            display: "none",
          },
          isMdUp && {
            display: "block",
          },
        ]}
      >
        {content}
      </Typography>
      <AnimationMouse
        sx={
          isMdUp && {
            display: "block",
          }
        }
      />
    </Box>
  );
};

export default BannerTop;
