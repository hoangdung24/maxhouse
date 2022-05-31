import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, useTheme } from "@mui/material";

import { useMedia } from "../../hooks";

const Tabs = ({ value, changeTab, data }) => {
  const { isSmUp } = useMedia();
  const theme = useTheme();

  const renderTab = useMemo(() => {
    return data.map((el) => {
      return (
        <Tab
          key={el.id}
          label={el.name}
          value={el.id}
          disableRipple
          sx={[
            isSmUp && {
              minWidth: "120px",
            },
          ]}
        />
      );
    });
  }, [data, isSmUp]);

  return (
    <MuiTabs
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
      value={value}
      onChange={changeTab}
      variant={isSmUp ? "standard" : "fullWidth"}
      sx={[
        {
          marginBottom: isSmUp ? "3rem" : "1rem",
        },
        {
          "& .MuiTabs-flexContainer": {
            width: "60vw",
            margin: "0 auto",
            // display: "grid",
            // gridTemplateColumns: "repeat(5, 1fr )",
            // [theme.breakpoints.down("sm")]: {
            //   width: "80vw",
            //   gridTemplateColumns: "repeat(3, 1fr )",
            // },

            [theme.breakpoints.down("sm")]: {
              width: "60vw",
              display: "flex",
              flexWrap: "wrap",
            },
          },
        },
      ]}
    >
      {renderTab}
    </MuiTabs>
  );
};

export default Tabs;