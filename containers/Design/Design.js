import { Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Design() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Box
        sx={{
          height: "100vh",
          p: 0,
          textAlign: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100vw",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 1,
            background: "rgba(255, 255, 255, 0.4)",
          },
        }}
      >
        <Image
          src="/img/Bản sao Rectangle 2.jpg"
          layout="fill"
          sx={{ filter: "grayscale(100%)" }}
        ></Image>

        <Typography
          variant="body_large"
          sx={{
            position: "absolute",
            left: "50%",
            bottom: "4%",
            textAlign: "center",
            transform: "translateX(-50%)",
            color: theme.palette.common.black,
            fontSize: "20px",
            zIndex: 2,
          }}
        >
          Quyền lựa chọn của chúng ta là không có khuôn mẫu và khi không có gì
          ngăn cản,
          <br /> chúng ta có thể làm những gì chúng ta thích nhất.
        </Typography>

        {/* animation */}
        <Box
          sx={{
            width: "28px",
            height: "45px",
            border: `2px solid ${theme.palette.common.black}`,
            borderRadius: "15px",
            position: "absolute",
            left: "3%",
            bottom: "3%",
            zIndex: 2,
            "::before": {
              content: '""',
              width: "6px",
              height: "6px",
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: theme.palette.common.black,
              animation: "mouse 1.3s infinite",
            },
          }}
        ></Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Fragment>
  );
}
