import Slider from "react-slick";
import { Box } from "@mui/material";
import { forwardRef, useRef } from "react";

import { SvgIcon } from "@mui/material";

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

  const slickRef = useRef(null);

  return (
    <Box
      sx={{
        ["& .slick-dots"]: {
          bottom: "-90px",
        },
        ["& .slick-dots li button:before"]: {
          opacity: "0.75 !important",
        },
      }}
    >
      <Slider
        ref={slickRef}
        {...setting}
        appendDots={(dots) => {
          return (
            <Box>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgIcon
                  onClick={() => {
                    slickRef?.current?.slickPrev();
                  }}
                  sx={{
                    transform: "rotate(90deg)",
                    cursor: "pointer",
                    marginLeft: "-8px",
                    fontSize: 90,
                    opacity: 0.5,
                    ["&: hover"]: {
                      opacity: 1,
                    },
                  }}
                >
                  <path d="M 6 10 L 12 15 l 6 -5 L 18 11 l -6 5 l -6 -5 l 0 -1 z"></path>
                </SvgIcon>
                {dots}

                <SvgIcon
                  onClick={() => {
                    slickRef?.current?.slickNext();
                  }}
                  sx={{
                    transform: "rotate(-90deg)",
                    cursor: "pointer",
                    marginLeft: "-8px",
                    fontSize: 90,
                    opacity: 0.5,
                    ["&: hover"]: {
                      opacity: 1,
                    },
                  }}
                >
                  <path d="M 6 10 L 12 15 l 6 -5 L 18 11 l -6 5 l -6 -5 l 0 -1 z"></path>
                </SvgIcon>
              </ul>
            </Box>
          );
        }}
        {...props}
      >
        {children}
      </Slider>
    </Box>
  );
});

export default SliderWrapper;
