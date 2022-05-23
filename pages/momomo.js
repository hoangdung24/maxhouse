import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ImgNews from "../containers/News/ImgNews";

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

export default function Momomo() {
  return null;

  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   draggable: true,
  //   rows: 2,
  // };
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const rednerNews = () => {
  //   return arrNews.map((iem, index) => (
  //     <Box sx={{ width: "23%", p: "8px" }}>
  //       <Box
  //         sx={{
  //           borderRadius: "5px",
  //           p: "8px",
  //           backgroundImage:
  //             "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
  //           border:
  //             " 2px solid linear-gradient(rgba(244, 244, 244, 0.6), rgba(244, 244, 244, 0.4))",
  //         }}
  //       >
  //         <Box>
  //           <Box sx={{}}>
  //             <Box
  //               className="25px"
  //               sx={{ mb: "10px", position: "relative", height: "200px" }}
  //             >
  //               {/* <Image src={iem.img[0]} layout="fill" /> */}
  //               <ImgNews item={iem} />
  //             </Box>
  //             <Box>
  //               <Typography variant="body_large" onClick={handleOpen}>
  //                 {iem.name}
  //               </Typography>
  //               <Stack direction="row" justifyContent="space-between">
  //                 <Typography variant="body_small" sx={{ textAlign: "left" }}>
  //                   {iem.addr}
  //                 </Typography>
  //                 <Typography variant="body_small" sx={{ textAlign: "right" }}>
  //                   {iem.date}
  //                 </Typography>
  //               </Stack>
  //             </Box>
  //           </Box>
  //         </Box>
  //       </Box>
  //     </Box>
  //   ));
  // };

  // return (
  //   <Box>
  //     <h2> Multiple items </h2>
  //     <Slider
  //       className="slick"
  //       {...settings}
  //       style={{ width: "65vw", margin: "0 auto", backgroundColor: "gray" }}
  //     >
  //       {rednerNews()}
  //     </Slider>
  //   </Box>
  // );
}
