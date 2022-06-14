import { format, parseISO } from "date-fns";
import { useState, useEffect, Fragment, useRef } from "react";
import { Box, Stack, Typography, Skeleton, Fade, useTheme } from "@mui/material";
import { useMeasure, useWindowSize, useUpdateEffect } from "react-use";

import truncate from "lodash/truncate";

import Image from "../Image";
import SliderThumbnailInListingPage from "../Slider/SliderThumbnailInListingPage";

import { useMedia } from "../../hooks";

const SkeletonCard = ({ size, imageSize }) => {
  return (
    <Stack
      spacing={1}
      sx={{
        maxHeight: size.height,
      }}
    >
      <Skeleton variant="rectangular" height={imageSize.height} />
      <Skeleton variant="rectangular" height={24} />
      <Skeleton variant="rectangular" height={16} />
    </Stack>
  );
};

const CardItem = ({ ...props }) => {
  const theme = useTheme();
  const { isMdUp, isSmUp } = useMedia();
  const [isCompleteLoaded, setIsCompleteLoaded] = useState(false);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const {
    thumbnails,
    title,
    subtitle,
    meta,
    selectedPostHandler,
    isPlaceholder,
    minWrapperHeight,
    setMinWrapperHeight,
  } = props;

  const [ref, { width, height }] = useMeasure();

  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const contentRef = useRef(null);

  const [contentHeight, setContentHeight] = useState(48);

  useEffect(() => {
    if (contentRef.current) {
      setMinWrapperHeight((prev) => {
        let offsetHeight = contentRef.current.offsetHeight;

        if (offsetHeight > 100) {
          return prev;
        }

        return Math.max(prev, offsetHeight);
      });
    }
  }, []);

  useEffect(() => {
    setContentHeight((prev) => {
      return Math.max(prev, minWrapperHeight);
    });
  }, [minWrapperHeight]);

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
      className="slider-wrapper"
      sx={[
        {
          padding: 1,
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
          {isPlaceholder ? (
            <SkeletonCard
              size={{
                height,
              }}
              imageSize={imageSize}
            />
          ) : (
            <Fragment>
              <Box
                sx={{
                  overflow: "hidden",
                }}
              >
                {isLoading && (
                  <SliderThumbnailInListingPage>
                    {thumbnails.map((el, i) => {
                      return (
                        <Fade
                          key={i}
                          in={isCompleteLoaded}
                          timeout={{
                            enter: 300,
                          }}
                        >
                          <Box>
                            <Image
                              src={el.value}
                              width={imageSize.width}
                              height={imageSize.height}
                              objectFit="cover"
                              onLoadingComplete={() => {
                                setIsCompleteLoaded(true);
                              }}
                            />
                          </Box>
                        </Fade>
                      );
                    })}
                  </SliderThumbnailInListingPage>
                )}
              </Box>

              <Box
                sx={{
                  marginTop: 1,
                  cursor: "pointer",
                  minHeight: contentHeight,
                  display: "flex",
                  flexDirection: "column",

                  "&:hover .card--title": {
                    color: theme.palette.primary.main,
                  },
                }}
                onClick={selectedPostHandler(props, isMdUp)}
                ref={contentRef}
              >
                <Typography
                  variant="title"
                  className="card--title"
                  sx={{
                    flexGrow: 1,
                    transition: `${theme.transitions.duration.standard}ms`,
                  }}
                >
                  {truncate(title, {
                    separator: " ",
                    length: 45,
                    omission: "...",
                  })}
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
            </Fragment>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
