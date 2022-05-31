import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, useTheme } from "@mui/material";

import { useMedia } from "../../hooks";

const TabsBackground = ({ value, changeTab, data }) => {
  const theme = useTheme();
  console.log("value", value);
  console.log("data", data);
  const { isSmUp } = useMedia();

  const renderTab = useMemo(() => {
    return data.map((el, index) => {
      return (
        <Tab
          key={index}
          label={el.left_title ? el.left_title : el.right_title}
          value={el.id}
          disableRipple
          sx={[
            isSmUp && {
              minWidth: "120px",
            },
            {
              width: "50%",
              borderRadius: "8px",
              "&:first-child": {
                borderRadius: "8px 0 0 8px",
              },
              "&:last-child": {
                borderRadius: "0 8px 8px 0 !important",
              },
            },
          ]}
        />
      );
    });
  }, [data, isSmUp]);

  return (
    <MuiTabs
      className="serviceserviceservice"
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
          width: isSmUp ? "30%" : "80%",
          margin: "0 auto",
          mb: "5rem",
          borderRadius: "8px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
          "& .Mui-selected": {
            borderRadius: "8px 0 0 8px",
            backgroundColor: theme.palette.common.black,
            color: `${theme.palette.common.neutral4} !important`,
          },
          "& .MuiTabs-flexContainer": {
            height: "100%",
          },
        },
      ]}
    >
      {renderTab}
    </MuiTabs>
  );
};

export default TabsBackground;
