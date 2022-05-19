import Slider from "react-slick";
import { Button, Typography, Box, useTheme } from "@mui/material";

import { Image } from "../../components";

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
        <Image
          key={index}
          src={img}
          layout="fill"
          objectFit="cover"
          width="100vw"
          height="100vh"
        />
      );
    });
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
        ["& .slick-dots"]: {
          textAlign: "left",
          bottom: "1rem",
          marginLeft: "1rem",
        },
      }}
    >
      <Slider {...settings}>{renderCarousel()}</Slider>

      <Box
        sx={{
          padding: "2.5rem 3rem",
          position: "fixed",
          bottom: "3rem",
          textAlign: "right",
          right: "4rem",
          "&::before": {
            content: '""',
            backgroundColor: "#F4F5F6",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.4,
          },
          pointerEvent: "none",
          userSelect: "none",
        }}
      >
        <Typography variant="h2" sx={{ color: theme.palette.primary.main, mb: 3 }}>
          THIẾT KẾ NỘI THẤT
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Quyền lựa chọn của chúng ta là không có khuôn mẫu và khi không có gì ngăn cản
          <br /> chúng ta có thể làm những gì chúng ta thích nhất
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0,
            borderColor: theme.palette.common.black,
            color: theme.palette.common.black,
            fontWeight: 300,
          }}
        >
          CHI TIẾT
        </Button>
      </Box>
    </Box>
  );
}
