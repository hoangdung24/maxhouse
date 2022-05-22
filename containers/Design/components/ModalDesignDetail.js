import { useCallback } from "react";

import {
  Dialog,
  DialogContent as MuiDialogContent,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { Container } from "../../../components";

import DesignDetailRendering from "./DesignDetailRendering";

const PortfolioDetailDialog = ({ open, toggle, selectedPost, setParams }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const closeHandler = useCallback(({ data }) => {
    setParams({
      id: null,
    });
    toggle(false);
  }, []);

  if (!selectedPost) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      PaperProps={{
        sx: [
          isSmUp && {
            width: "calc(100vw - 5rem)",
            maxWidth: `calc(${theme.breakpoints.values["xl"]}px)`,
            height: "calc(100vh - 5rem)",
            padding: "1rem 0",
          },
        ],
      }}
    >
      <DialogContent>
        <Container>
          <DesignDetailRendering
            {...{
              data: selectedPost,
              closeHandler,
            }}
          />
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
