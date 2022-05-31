import { format, parseISO } from "date-fns";
import { useState, useEffect, Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useMeasure, useWindowSize, useUpdateEffect } from "react-use";

import Image from "../Image";
import SliderThumbnailInListingPage from "../Slider/SliderThumbnailInListingPage";

import { useMedia } from "../../hooks";

const CardItem = ({ ...props }) => {
  const { thumbnails, title, subtitle, meta, selectedPostHandler } = props;
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const { isMdUp, isSmUp } = useMedia();

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
              <SliderThumbnailInListingPage>
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
              </SliderThumbnailInListingPage>
            )}
          </Box>

          <Box
            sx={{
              marginTop: 1,
              cursor: "pointer",
            }}
            onClick={selectedPostHandler(props, isMdUp)}
          >
            <Typography variant="title">
              {title.length > 25 ? title.substr(0, 25) + "..." : title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems={"center"}
            >
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
