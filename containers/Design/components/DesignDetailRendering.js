import { Fragment } from "react";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";

import {
  Box,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const DesignDetail = ({ data, closeHandler = () => {} }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const { title, body, subtitle, text_alignment, youtube_link } = data;

  return (
    <Fragment>
      <Stack direction="row" justifyContent={"space-between"} alignItems="center">
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
        <Grid item xs={12} md={youtube_link ? 9 : 12}>
          <Box
            sx={{
              textAlign: text_alignment,
              wordWrap: "break-word",
              overflow: "hidden",
              ["& ol"]: {
                marginLeft: "1rem",
              },
              ["& ul"]: {
                marginLeft: "1.25rem",
              },
              ["& img"]: {
                width: "100%",
                height: "auto",
                objectFit: "contain",
              },
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(body),
            }}
          ></Box>
        </Grid>

        {youtube_link && (
          <Grid item xs={12} md={3}>
            <iframe
              src={`${youtube_link}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              width="100%"
            />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default DesignDetail;
