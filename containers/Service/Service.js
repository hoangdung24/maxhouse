import { Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import NewsPaper from "./NewsPaper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
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
    </Box>
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

export default function Service() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80vw", pt: "130px", margin: "0 auto" }}>
      <Box sx={{}}>
        <Tabs
          TabScrollButtonProps={{ style: { height: "100%", display: "none" } }}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            height: "40px",
            width: "22%",
            m: "40px auto",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            ["& .Mui-selected"]: {
              backgroundColor: theme.palette.common.black,
              color: `${theme.palette.common.neutral4} !important`,
            },
          }}
        >
          <Tab
            className="btnService"
            label="GIỚI THIỆU"
            {...a11yProps(0)}
            sx={{
              color: theme.palette.common.black,
              height: 36,
            }}
          />
          <Tab
            className="btnService"
            label="DỊCH VỤ"
            {...a11yProps(1)}
            sx={{
              color: theme.palette.common.black,
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NewsPaper />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewsPaper />
      </TabPanel>
    </Box>
  );
}
