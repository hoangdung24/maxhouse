import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/system";
import { Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const carousel = [
  "/img/background 3.jpg",
  "/img/Rectangle 2.jpg",
  "/img/background 3.jpg",
];

export default function Home() {
  const theme = useTheme();
  const renderCarousel = () => {
    return carousel.map((img, index) => {
      return (
        <Box
          key={index}
          sx={{ height: "100vh", width: "100vw", position: "relative" }}
        >
          <Image src={img} layout="fill" objectFit="cover" />
        </Box>
      );
    });
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{ height: "100vh", p: 0, textAlign: "center" }}>
      <Slider {...settings} className="slickHome" style={{ height: "100vh" }}>
        {renderCarousel()}
      </Slider>

      <Box
        sx={{
          p: "30px 50px",
          position: "fixed",
          bottom: "50px",
          textAlign: "right",
          right: "70px",
          "&::before": {
            content: '""',
            backgroundColor: "#F4F5F6",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.2,
          },
        }}
      >
        <Typography variant="h2" sx={{ color: "#CB0101", mb: "20px" }}>
          THIẾT KẾ NỘI THẤT
        </Typography>
        <Typography variant="body1" sx={{ mb: "20px" }}>
          Quyền lựa chọn của chúng ta là không có khuôn mẫu và khi không có gì
          ngăn cản
          <br /> chúng ta có thể làm những gì chúng ta thích nhất
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "0",
            fontWeight: "400",
            color: theme.palette.common.black,
            border: "1px solid #131313",
          }}
        >
          CHI TIẾT
        </Button>
      </Box>
    </Box>
  );
}
