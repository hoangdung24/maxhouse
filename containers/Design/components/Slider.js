import Slider from "react-slick";
import { Box } from "@mui/material";

const settings = {
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

const SliderWrapper = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        ["& .slick-dots"]: {
          bottom: "-48px",
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
