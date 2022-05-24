import { Box } from "@mui/material";

import { useMedia } from "../hooks";

import Image from "./Image";

const BackgroundListingPage = ({ src }) => {
  const { isSmUp } = useMedia();

  // if (!src) {
  //   return null;
  // }

  if (isSmUp) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-4rem",
          width: "calc(100% + 8rem)",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Image
          src="/img/imgNews/Component 6.png"
          layout="fill"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    );
  } else {
    return null;
  }
};

export default BackgroundListingPage;
