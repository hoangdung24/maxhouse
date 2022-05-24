import { useTheme, useMediaQuery } from "@mui/material";

const useMedia = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return {
    isMdUp,
    isSmUp,
  };
};

export default useMedia;
