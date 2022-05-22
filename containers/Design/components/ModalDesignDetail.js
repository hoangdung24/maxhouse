import { useCallback } from "react";
import DOMPurify from "isomorphic-dompurify";

import {
  Dialog,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  Box,
  Typography,
  styled,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

import { Container } from "../../../components";

import CloseIcon from "@mui/icons-material/Close";

const PortfolioDetailDialog = ({ open, toggle, selectedPost, setParams }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const closeHandler = useCallback(() => {
    setParams({
      id: null,
    });
    toggle(false);
  }, []);

  if (!selectedPost) {
    return null;
  }

  const { title, body, subtitle, text_alignment, youtube_link } = selectedPost;

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      // fullScreen={isMobile}
      PaperProps={{
        sx: [
          isSmUp && {
            width: "calc(100vw - 5rem)",
            // minWidth: "calc(100vw - 5rem)",
            maxWidth: `calc(${theme.breakpoints.values["xl"]}px)`,
            height: "calc(100vh - 5rem)",
            padding: "1rem 0",
          },
        ],
      }}
    >
      <DialogContent>
        <Container>
          <Stack direction="row" justifyContent={"space-between"} alignItems="center">
            <Typography variant="h1" sx={[{ marginBottom: 4 }]}>
              {title}
            </Typography>

            <IconButton onClick={closeHandler}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Typography variant="h5" sx={[{ marginBottom: 7 }]}>
            {subtitle}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={youtube_link ? 9 : 12}>
              <Box
                sx={{
                  textAlign: text_alignment,
                  wordWrap: "break-word",
                  ["& ol"]: {
                    marginLeft: "1rem",
                  },
                  ["& ul"]: {
                    marginLeft: "1.25rem",
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(body),
                }}
              ></Box>
            </Grid>

            {youtube_link && (
              <Grid item xs={3}>
                <iframe
                  src={`${youtube_link}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetailDialog;

const DialogContent = styled(MuiDialogContent)(({ theme }) => {
  return {
    padding: "4rem 0",
  };
});
