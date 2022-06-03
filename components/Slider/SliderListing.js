import Slider from "react-slick";
import { Box } from "@mui/material";
import { forwardRef } from "react";

const setting1 = {
  arrows: false,
  infinite: true,
  rows: 2,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  slidesPerRow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const setting2 = {
  arrows: false,
  infinite: false,
  rows: 2,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  slidesPerRow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const SliderWrapper = forwardRef(({ children, type = 1, ...props }, ref) => {
  let setting = type === 1 ? setting1 : setting2;

  return (
    <Box
      sx={{
        ["& .slick-dots"]: {
          bottom: "-48px",
        },
      }}
    >
      <Slider ref={ref} {...props} {...setting}>
        {children}
      </Slider>
    </Box>
  );
});

export default SliderWrapper;
