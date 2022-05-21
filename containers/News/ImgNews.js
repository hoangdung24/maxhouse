import { useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Box } from "@mui/system";

//\///Biến của slick
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <NavigateBeforeIcon
      onClick={onClick}
      className="slick-prevs"
      sx={{
        fontSize: "20px",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 5,
        left: 0,
      }}
    />
  );
};
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <NavigateNextIcon
      onClick={onClick}
      className="slick-nexts"
      sx={{
        fontSize: "20px",
        color: "white",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 5,
        right: 0,
      }}
    />
  );
};
const settings = {
  draggable: false,
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function ImgNews(props) {
  const theme = useTheme();
  const { item } = props;
  console.log("item", item);

  const renderImg = () => {
    return item.img.map((img, index) => {
      return (
        <Box
          className="contentIMG"
          sx={{ height: "100%", position: "relative", height: "100%" }}
        >
          <Image key={index} className="imgnho" src={img} layout="fill" />
        </Box>
      );
    });
  };

  return (
    <Slider className="slideImg" {...settings}>
      {renderImg()}
    </Slider>
  );
}
