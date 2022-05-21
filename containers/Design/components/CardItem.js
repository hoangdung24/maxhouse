import { useMeasure } from "react-use";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Image } from "../../../components";

const CardItem = ({ ...props }) => {
  const { banner, title, subtitle } = props;
  const [ref, { width, height }] = useMeasure();
  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (width > 0 && !isLoading) {
      setImageSize({
        width: width,
        height: (width * 3) / 4,
      });

      setIsLoading(true);
    }
  }, [width, height, isLoading]);

  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Box
        ref={ref}
        sx={{
          borderRadius: "0.25rem",
          background:
            "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
          backdropFilter: "blur(4px)",
        }}
      >
        <Box
          sx={{
            padding: 1,
          }}
        >
          <Box
            sx={{
              height: "12rem",
              overflow: "hidden",
            }}
          >
            {isLoading && (
              <Image src={banner} width={imageSize.width} height={imageSize.height} />
            )}
          </Box>
          <Box>
            <Typography variant="body_large">{title}</Typography>

            <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
              <Typography variant="body_small">{subtitle}</Typography>
              <Typography variant="body_small">{"21/05/2022"}</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
