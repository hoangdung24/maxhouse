import { useCallback, useRef, useState } from "react";

import {
  Dialog,
  DialogContent as MuiDialogContent,
  styled,
  useTheme,
} from "@mui/material";

import { useMedia } from "../../hooks";

import Container from "../Container";
import DetailBlog from "./DetailBlog";

const ADJUST_SIZE = 2.5;

const PortfolioDetailDialog = ({ open, toggle, selectedPost, setParams }) => {
  const scrollRef = useRef(null);
  const stickryRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

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
            width: `calc(100vw - ${ADJUST_SIZE * 2}rem )`,
            maxWidth: `calc(${theme.breakpoints.values["xl"]}px)`,
            height: `calc(100vh - ${ADJUST_SIZE * 2}rem)`,
            padding: "1rem 0",
          },
        ],
      }}
    >
      <DialogContent
        onScroll={(e) => {
          if (stickryRef.current) {
            const contentOffset = e.target.scrollTop;
            const stickyOffset = stickryRef.current.offsetTop;
            if (contentOffset > stickyOffset && !isSticky) {
              setIsSticky(true);
            } else if (contentOffset < stickyOffset) {
              setIsSticky(false);
            }
          }
        }}
      >
        <Container ref={scrollRef}>
          <DetailBlog
            {...{
              data: selectedPost,
              closeHandler,
              ref: stickryRef,
              isSticky,
              adjustSize: ADJUST_SIZE,
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
