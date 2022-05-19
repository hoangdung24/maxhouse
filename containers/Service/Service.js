import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80vw", pt: "130px", margin: "0 auto" }}>
      <Box
        sx={{
          height: "40px",
          width: "85%",
          m: "40px auto",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="btnService" label="GIỚI THIỆU" {...a11yProps(0)} />
          <Tab className="btnService" label="DỊCH VỤ" {...a11yProps(1)} />
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
