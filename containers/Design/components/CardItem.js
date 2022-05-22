import { format, parseISO } from "date-fns";
import { useState, useEffect, Fragment } from "react";
import { useMeasure, useWindowSize, useUpdateEffect } from "react-use";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import { Image } from "../../../components";
import SliderThumbnail from "./SliderThumbnail";

const CardItem = ({ ...props }) => {
  const { thumbnails, title, subtitle, meta, selectedPostHandler } = props;
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  // console.log(props);

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

  useUpdateEffect(() => {
    setImageSize({
      width: width,
      height: (width * 3) / 4,
    });
  }, [windowWidth, windowHeight, width, height]);

  return (
    <Box
      sx={[
        {
          padding: "10px",
        },
        !isSmUp && {
          marginBottom: 3,
        },
      ]}
    >
      <Box
        ref={ref}
        sx={{
          borderRadius: "0.25rem",
          background:
            "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Box
          sx={{
            padding: 1,
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
            }}
          >
            {isLoading && (
              <SliderThumbnail>
                {thumbnails.map((el, i) => {
                  return (
                    <Fragment key={i}>
                      <Image
                        src={el.value}
                        width={imageSize.width}
                        height={imageSize.height}
                        objectFit="cover"
                      />
                    </Fragment>
                  );
                })}
              </SliderThumbnail>
            )}
          </Box>
          <Box
            sx={{
              marginTop: 1,
              cursor: "pointer",
            }}
            onClick={selectedPostHandler(props)}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                lineHeight: "1.778rem",
                fontWeight: "500",
              }}
            >
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
              <Typography variant="body_small">{subtitle}</Typography>
              <Typography variant="body_small">
                {format(parseISO(meta.first_published_at), "dd/MM/yyyy")}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
