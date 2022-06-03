import { useCallback, useRef } from "react";

import {
  Dialog,
  DialogContent as MuiDialogContent,
  styled,
  useTheme,
} from "@mui/material";

import { useMedia } from "../../hooks";

import Container from "../Container";
import DetailBlog from "./DetailBlog";
import { useScroll, useWindowScroll } from "react-use";

const PortfolioDetailDialog = ({ open, toggle, selectedPost, setParams }) => {
  const scrollRef = useRef(null);
  console.log("scrollRef", scrollRef);
  const { x, y } = useScroll(scrollRef);
  console.log("yyyyyyyyyy", y);

  const theme = useTheme();

  const { isSmUp } = useMedia();

  const closeHandler = useCallback((e) => {
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
      <DialogContent
        ref={scrollRef}
        className="asdasdasdasdasdasad"
        sx={{ backgroundColor: "red", overflowY: "scroll" }}
      >
        <Container>
          <DetailBlog
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
