import { Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

import Catelory from "../../components/Catelogy/Catelory";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const tabName = ["nhà phố", "căn hộ", "biệt thự", "khác"];

export default function Design({ initData }) {
  console.log(initData);

  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const renderTab = () => {
  //   return tabName.map((tab, index) => {
  //     return (
  //       <Tab
  //         key={index}
  //         label={tab}
  //         {...a11yProps(index)}
  //         sx={{
  //           "&.MuiButtonBase-root": {
  //             ...theme.typography.h6,
  //           },
  //         }}
  //       />
  //     );
  //   });
  // };
  // const renderTabPanel = () => {
  //   return tabName.map((item, index) => {
  //     return (
  //       <TabPanel value={value} index={index} dir={theme.direction}>
  //         <Catelory />
  //       </TabPanel>
  //     );
  //   });
  // };

  return null;

  // return (
  //   <Fragment>
  //     <Box
  //       sx={{
  //         height: "100vh",
  //         p: 0,
  //         textAlign: "center",
  //         position: "relative",
  //         "&::before": {
  //           content: '""',
  //           position: "absolute",
  //           width: "100vw",
  //           top: 0,
  //           left: 0,
  //           bottom: 0,
  //           zIndex: 1,
  //           background: "rgba(255, 255, 255, 0.4)",
  //         },
  //       }}
  //     >
  //       <Image
  //         src="/img/Bản sao Rectangle 2.jpg"
  //         layout="fill"
  //         sx={{ filter: "grayscale(100%)" }}
  //       ></Image>

  //       <Typography
  //         variant="body_large"
  //         sx={{
  //           transition: "ease 3s",
  //           position: "absolute",
  //           left: "50%",
  //           bottom: "4%",
  //           textAlign: "center",
  //           transform: "translateX(-50%)",
  //           color: theme.palette.common.black,
  //           width: "57%",
  //           lineHeight: "41px",
  //           fontSize: "27.7px",
  //           fontWeight: 400,
  //           zIndex: 2,
  //         }}
  //       >
  //         Quyền lựa chọn của chúng ta là không có khuôn mẫu và khi không có gì ngăn cản,
  //         <br /> chúng ta có thể làm những gì chúng ta thích nhất.
  //       </Typography>

  //       {/* animation */}
  //       <Box
  //         sx={{
  //           transition: "ease 3s",
  //           width: "28px",
  //           height: "45px",
  //           border: `2px solid ${theme.palette.common.black}`,
  //           borderRadius: "15px",
  //           position: "absolute",
  //           left: "3%",
  //           bottom: "5%",
  //           zIndex: 2,
  //           "::before": {
  //             content: '""',
  //             width: "6px",
  //             height: "6px",
  //             top: "5%",
  //             left: "50%",
  //             transform: "translateX(-50%)",
  //             position: "absolute",
  //             borderRadius: "50%",
  //             backgroundColor: theme.palette.common.black,
  //             animation: "mouse 1.3s infinite",
  //           },
  //         }}
  //       ></Box>
  //     </Box>
  //     <Box
  //       sx={{
  //         height: "670px",
  //         width: "75vw",
  //         margin: "116px auto ",
  //         position: "relative",
  //       }}
  //     >
  //       <Image
  //         src="/img/imgNews/Component 6.png"
  //         layout="fill"
  //         sx={{ objectFit: "cover" }}
  //       />

  //       <Box
  //         sx={{
  //           width: "100%",
  //           position: "absolute",
  //           top: "50%",
  //           transform: " translateY(-50%)",
  //         }}
  //       >
  //         <Box>
  //           <Tabs
  //             TabIndicatorProps={{
  //               style: {
  //                 display: "none",
  //               },
  //             }}
  //             value={value}
  //             onChange={handleChange}
  //             aria-label="basic tabs example"
  //             sx={{
  //               color: theme.palette.common.black,
  //               "& .MuiTabs-flexContainer": { justifyContent: "center" },
  //             }}
  //           >
  //             {renderTab()}
  //           </Tabs>
  //         </Box>
  //         {renderTabPanel()}
  //       </Box>
  //     </Box>
  //   </Fragment>
  // );
}
