import { Fragment, useRef } from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import { Typography, Stack, IconButton, Grid } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useMedia } from "../../hooks";

import RenderHTML from "../RenderHTML";
import { useScroll, useWindowScroll } from "react-use";

const DesignDetail = ({ data, closeHandler = () => {} }) => {
  const router = useRouter();
  const { isMdUp } = useMedia();
  const { title, subtitle, youtube_link } = data;
  // console.log("youTuBeStickyyouTuBeSticky", scrollSticky);
  let videoId;

  if (youtube_link) {
    const parsedUrl = new URL(youtube_link);
    videoId = parsedUrl.pathname.replaceAll("/", "");
    console.log("videoId", videoId);
  }
  return (
    <Fragment>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Typography variant="h1" sx={[{ marginBottom: 4 }]}>
          {title}
        </Typography>

        {isMdUp && !router.pathname.includes("[id]") && (
          <IconButton onClick={closeHandler}>
            <CloseIcon />
          </IconButton>
        )}
      </Stack>

      <Typography variant="h5" sx={[{ marginBottom: 7 }]}>
        {subtitle}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={youtube_link ? 8 : 12}>
          <RenderHTML data={data} />
        </Grid>

        {videoId && (
          <Grid item xs={12} md={4}>
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                height: "200",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default DesignDetail;
