import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function ImgNews(props) {
  const { item } = props;
  //\///Biến của slick
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <NavigateBeforeIcon
        onClick={onClick}
        className="slick-prevs"
        sx={{ color: "white", top: "50%", zIndex: 5, left: 0 }}
      />
    );
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <NavigateNextIcon
        onClick={onClick}
        className="slick-nexts"
        sx={{ color: "white", top: "50%", zIndex: 5, right: 0 }}
      />
    );
  };
  const settings = {
    draggable: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider
      className="slideImg"
      {...settings}
      style={{ height: "170px", position: "relative" }}
    >
      <Image className="slideImwwwwwwg" src={item.img[0]} layout="fill" />

      <Image src={item.img[0]} width="100%" height="100%" />
    </Slider>
  );
}
