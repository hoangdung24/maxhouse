import Slider from "react-slick";
import { useRef } from "react";
import { Box } from "@mui/material";
import { useHoverDirty } from "react-use";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useMedia } from "../../hooks";

import PreviousArrow from "./PreviousArrow";
import NextArrow from "./NextArrow";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  dots: false,
  arrows: true,
  prevArrow: <PreviousArrow />,
  nextArrow: <NextArrow />,
  draggable: false,
  infinite: true,
};

const SliderWrapper = ({ children, ...props }) => {
  const { isMdUp } = useMedia();

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  return (
    <Box
      ref={ref}
      sx={{
        ["& .slick-arrow"]: {
          ...(isMdUp
            ? {
                opacity: isHovering ? 1 : 0,
                visibility: isHovering ? "visible" : "hidden",
              }
            : {
                opacity: 1,
              }),
          transition: "250ms",
          ["&.slick-disabled"]: {
            opacity: 0,
            visibility: "hidden",
          },
        },
      }}
    >
      <Slider {...settings} {...props}>
        {children}
      </Slider>
    </Box>
  );
};

export default SliderWrapper;
