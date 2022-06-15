import YouTube from "react-youtube";
import { useMeasure } from "react-use";
import { useRouter } from "next/router";
import { Fragment, forwardRef } from "react";
import queryString from "query-string";

import { Typography, Stack, IconButton, Grid, Box } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useMedia } from "../../hooks";
import RenderHTML from "../RenderHTML";

const DetailBlog = forwardRef(
  ({ data, closeHandler = () => {}, isSticky, adjustSize }, ref) => {
    const router = useRouter();
    const { isMdUp } = useMedia();
    const { title, subtitle, youtube_link } = data;
    const [stickyRef, { width }] = useMeasure();
    const [containerRef, { width: contentWidth }] = useMeasure();

    let videoId;

    if (youtube_link) {
      const { url, query } = queryString.parseUrl(youtube_link);

      const { pathname } = new URL(url);

      if (query.v) {
        videoId = query.v;
      } else {
        videoId = pathname.replace("/", "");
      }
    }

    return (
      <Fragment>
        <Stack direction="row" justifyContent={"space-between"} alignItems="center">
          <Typography variant="h1" sx={[{ marginBottom: 4 }]}>
            {title}
          </Typography>

          {isMdUp &&
            !router.pathname.includes("[id]") &&
            !router.pathname.includes("preview") && (
              <IconButton onClick={closeHandler}>
                <CloseIcon />
              </IconButton>
            )}
        </Stack>

        <Typography variant="h5" sx={[{ marginBottom: 7 }]}>
          {subtitle}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={youtube_link ? 8 : 12} ref={containerRef}>
            <RenderHTML data={data} containerWidth={contentWidth} />
          </Grid>

          {videoId && (
            <Grid
              item
              xs={12}
              md={4}
              ref={ref}
              sx={{
                position: "relative",
              }}
            >
              <Box
                ref={stickyRef}
                sx={[
                  isSticky && {
                    position: "fixed",
                    top: `${adjustSize + 1}rem`,
                    width,
                  },
                ]}
              >
                <YouTube
                  videoId={videoId}
                  opts={{
                    width: "100%",
                    height: (width * 9) / 16,
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Fragment>
    );
  }
);

export default DetailBlog;
