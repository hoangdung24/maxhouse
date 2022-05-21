import Slider from "react-slick";
import { Box } from "@mui/material";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 8,
};

const SliderWrapper = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderWrapper;
