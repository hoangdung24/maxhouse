import { useMemo, Fragment } from "react";
import Slider from "react-slick";
import { Button, Typography, Box, useTheme } from "@mui/material";

import { Image } from "../../components";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Home({ initData }) {
  const theme = useTheme();
  const { items } = initData?.[0];
  const data = items?.[0];

  const renderCarousel = useMemo(() => {
    if (!data?.banners) {
      return null;
    }

    return data.banners.map((el, index) => {
      return (
        <Fragment key={index}>
          <Image
            src={el.value}
            layout="fill"
            objectFit="cover"
            width="100vw"
            height="100vh"
          />
        </Fragment>
      );
    });
  }, [data]);

  if (!data) {
    return null;
  }

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
      <Slider {...settings}>{renderCarousel}</Slider>

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
          {data.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {data.subtitle}
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
