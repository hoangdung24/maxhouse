import Slider from "react-slick";
import { useMemo, Fragment } from "react";
import { Button, Typography, Box, useTheme } from "@mui/material";

import { Image } from "../../components";

import { useMedia } from "../../hooks";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Home({ initData }) {
  const { isMdUp } = useMedia();

  const theme = useTheme();

  const { items } = initData?.[0];
  const data = items?.[0];
  console.log("first", items);

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
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        ["& .slick-dots"]: {
          textAlign: "left",
          bottom: "1rem",
          marginLeft: "1rem",
          [theme.breakpoints.up("xs")]: {
            display: "none !important",
          },
          [theme.breakpoints.up("md")]: {
            display: "block !important",
          },
        },
      }}
    >
      <Slider {...settings}>{renderCarousel}</Slider>

      <Box
        sx={{
          position: "absolute",
          userSelect: "none",
          [theme.breakpoints.up("xs")]: {
            left: "2rem",
            bottom: "2rem",
            right: "2rem",
          },
          [theme.breakpoints.up("md")]: {
            right: "4.5rem",
            bottom: "4.5rem",
            left: "unset",
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "1rem",

            backdropFilter: "blur(2px)",
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            [theme.breakpoints.up("xs")]: {
              border: "1.25px solid rgba(255, 255, 255, 0.6)",
              background:
                "linear-gradient(145.36deg, rgba(244, 244, 244, 0.6) -4.23%, rgba(244, 244, 244, 0.1) 102.57%, rgba(244, 244, 244, 0.3) 102.58%)",
            },
            [theme.breakpoints.up("md")]: {
              border: "1.25px solid rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Box
            sx={{
              [theme.breakpoints.up("xs")]: {
                padding: "1.5rem 1rem",
              },
              [theme.breakpoints.up("md")]: {
                padding: "1.5rem 3rem",
              },
            }}
          >
            <Typography
              variant={isMdUp ? "h1" : "h3"}
              sx={{
                color: theme.palette.primary.main,
                textTransform: "uppercase",
                [theme.breakpoints.up("xs")]: {
                  marginBottom: 1,
                },
                [theme.breakpoints.up("md")]: {
                  marginBottom: 3,
                  textAlign: "right",
                },
              }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                [theme.breakpoints.up("xs")]: {
                  marginBottom: 1,
                },
                [theme.breakpoints.up("md")]: {
                  marginBottom: 3,
                  textAlign: "right",
                  maxWidth: "50ch",
                },
              }}
            >
              {data.subtitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                [theme.breakpoints.up("xs")]: {
                  justifyContent: "flex-start",
                },
                [theme.breakpoints.up("md")]: {
                  justifyContent: "flex-end",
                },
              }}
            >
              <Button
                variant={"outlined"}
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
        </Box>
      </Box>
    </Box>
  );
}
