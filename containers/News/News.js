import { Box, Modal, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import NewsPaper from "../Service/NewsPaper";
import Image from "next/image";
import ImgNews from "./ImgNews";

const arrNews = [
  {
    img: ["/img/imgNews/Rectangle 5.jpg", "/img/background 3.jpg"],
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
    name: "Aqua Đồng Nai Garden",
    date: "18/03/2022",
    addr: " Đồng Nai / Việt Nam",
  },
  {
    img: "/img/imgNews/Rectangle 5.jpg",
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
      <Box sx={{ width: "23%", p: "8px" }}>
        <Box
          sx={{
            borderRadius: "5px",
            p: "8px",
            backgroundImage:
              "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
            border:
              " 2px solid linear-gradient(rgba(244, 244, 244, 0.6), rgba(244, 244, 244, 0.4))",
          }}
        >
          <Box>
            <Box sx={{}}>
              <Box
                className="25px"
                sx={{ mb: "10px", position: "relative", height: "170px" }}
              >
                {/* <Image src={iem.img[0]} layout="fill" /> */}
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
      <Box>
        {/* backgroundIMG */}
        <Box
          sx={{
            zIndex: "-1",
            height: "600px",
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
        <Box sx={{ pt: "130px" }}>
          <Typography variant="h3" sx={{ mb: "60px", textAlign: "center" }}>
            TIN TỨC
          </Typography>
        </Box>

        {/* slideNew */}
        <Box sx={{}}>
          <Slider
            className="slick"
            {...settings}
            style={{ width: "65vw", margin: "0 auto", backgroundColor: "red" }}
          >
            {rednerNews()}
          </Slider>
        </Box>

        {/* backgroundIMG */}
        <Box
          sx={{ zIndex: "-1", height: "50vh", position: "absolute", top: 0 }}
        >
          <Box sx={{ position: "relative", height: "50vh" }}>
            <Image src="/img/imgNews/Group 33 1.jpg" layout="fill" />
          </Box>
        </Box>

        {/* modal */}
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Box>
                <Typography variant="h3">Aqua Đồng Nai Sài Gòn</Typography>
                <Typography variant="h6">Đồng Nai / Việt Nam</Typography>
              </Box>
              <CloseIcon onClick={handleClose} sx={{ fontSize: "45px" }} />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%", gap: "20px" }}
            >
              <Box sx={{ width: "70%" }}>
                <NewsPaper />
              </Box>
              <Box sx={{ width: "30%" }}>
                <iframe
                  width="100%"
                  height={315}
                  src="https://www.youtube.com/embed/uzQNR1moRlo"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            </Stack>
          </Box>
        </Modal>
      </Box>
    </Fragment>
  );
}
