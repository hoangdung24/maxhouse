import { Box, Modal, Stack, Typography } from "@mui/material";

import { Fragment, useState } from "react";
import Slider from "react-slick";
import ImgNews from "../../containers/News/ImgNews";
import NewsPaper from "../../containers/Service/NewsPaper";
import CloseIcon from "@mui/icons-material/Close";

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

//\///Biến của slick

export default function Category() {
  const [open, setOpen] = useState(false);
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
            <Box sx={{ height: "100%" }}>
              <Box
                sx={{
                  mb: "10px",
                  position: "relative",
                  height: "170px",
                }}
              >
                <ImgNews item={iem} layout="fill" />
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

  const rednerNews2 = () => {
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
            {/* <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/img/imgNews/Rectangle 5.jpg"
                alt="green iguana"
              />
              <CardContent>
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
              </CardContent>
            </Card> */}
          </Box>
        </Box>
      </Box>
    ));
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    rows: 2,
  };
  return (
    <Fragment>
      {/* slideNew */}
      <Box>
        <Slider
          className="slick"
          {...settings}
          style={{
            width: "65vw",
            margin: "0 auto",
            zIndex: "2",
          }}
        >
          {rednerNews()}
        </Slider>
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
            {/* <Box sx={{ width: "30%" }}>
              <iframe
                width="100%"
                height={315}
                src="https://www.youtube.com/embed/uzQNR1moRlo"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box> */}
          </Stack>
        </Box>
      </Modal>
    </Fragment>
  );
}
