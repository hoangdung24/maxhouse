import { useTheme, useMediaQuery } from "@mui/material";

const useMedia = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    isMdUp,
    isSmUp,
    isSmDown,
  };
};

export default useMedia;
