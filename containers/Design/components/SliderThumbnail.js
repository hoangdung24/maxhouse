import Slider from "react-slick";
import { useRef } from "react";
import { useHoverDirty } from "react-use";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CustomPreviousArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        left: "8px !important",
        zIndex: 1,

        ["&:before"]: {
          display: "none",
        },
      }}
      onClick={onClick}
    >
      <KeyboardArrowDownIcon
        sx={{
          color: "#FFF !important",
          transform: "rotate(90deg)",
        }}
      />
    </Box>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        right: "8px !important",
        ["&:before"]: {
          display: "none",
        },
      }}
      onClick={onClick}
    >
      <KeyboardArrowDownIcon
        sx={{
          color: "#FFF !important",
          transform: "rotate(-90deg)",
        }}
      />
    </Box>
  );
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  dots: false,
  arrows: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPreviousArrow />,
  draggable: false,
};

const SliderWrapper = ({ children }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
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
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

export default SliderWrapper;
