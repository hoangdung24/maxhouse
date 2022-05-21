import { Box, Modal, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import ImgNews from "./ImgNews";
import Category from "../../components/Category/Category";

const arrNews = [
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
];
const style = {
  position: "absolute",
  top: "5%",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "90%",
  height: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 8,
  py: 10,
};

export default function News() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    rows: 2,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rednerNews = () => {
    return arrNews.map((iem, index) => (
      <Box key={index} sx={{ width: "23%", p: "8px" }}>
        <Box
          sx={{
            borderRadius: "5px",
            p: "8px",
            backgroundImage:
              "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
            border:
              " 2px solid linear-gradient(rgba(244, 244, 244, 0.6), rgba(244, 244, 244, 0.4))",
            backdropFilter: "blur(4px)",
          }}
        >
          <Box>
            <Box sx={{}}>
              <Box
                sx={{
                  mb: "10px",
                  position: "relative",
                  height: "170px",
                }}
              >
                <ImgNews item={iem} />
              </Box>
              <Box>
                <Typography variant="body_large" onClick={handleOpen}>
                  {iem.name}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body_small" sx={{ textAlign: "left" }}>
                    {iem.addr}
                  </Typography>
                  <Typography variant="body_small" sx={{ textAlign: "right" }}>
                    {iem.date}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    ));
  };

  return (
    <Fragment>
      <Box sx={{ mb: "54px", position: "relative" }}>
        <Box sx={{ pt: "130px", zIndex: "3" }}>
          <Typography
            variant="h1"
            sx={{ mb: "60px", textAlign: "center", zIndex: "3" }}
          >
            TIN TỨC
          </Typography>
        </Box>

        <Category />

        <Box
          sx={{
            width: "100%",
            zIndex: -1,
            position: "absolute",
            top: 0,
            bottom: 0,
            height: "86%",
            mt: "95px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              margin: "0 auto",
              width: "75%",
            }}
          >
            <Image src="/img/imgNews/Group 33 1.jpg" layout="fill" />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
