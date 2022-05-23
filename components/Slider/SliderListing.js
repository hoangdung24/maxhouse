import Slider from "react-slick";
import { Box } from "@mui/material";

const setting1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 8,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
      },
    },
  ],
};

const setting2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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

const SliderWrapper = ({ children, type = 1, ...props }) => {
  let setting = type === 1 ? setting1 : setting2;

  return (
    <Box
      sx={{
        ["& .slick-dots"]: {
          bottom: "-48px",
        },
      }}
    >
      <Slider {...props} {...setting}>
        {children}
      </Slider>
    </Box>
  );
};

export default SliderWrapper;
