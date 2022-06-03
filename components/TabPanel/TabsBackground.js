import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, useTheme } from "@mui/material";

import { useMedia } from "../../hooks";

const TabsBackground = ({ value, changeTabHandler, data }) => {
  const theme = useTheme();

  const { isSmUp, isMdUp } = useMedia();

  const renderTab = useMemo(() => {
    return data.map((el) => {
      return (
        <Tab
          key={el.text_alignment}
          label={el.title}
          value={el.text_alignment}
          disableRipple
          sx={[
            isMdUp && {
              minWidth: "12rem",
            },
            isSmUp && {
              minWidth: "10rem",
            },
            {
              width: "50%",
              whiteSpace: "nowrap",
              borderRadius: "8px",
              "&:first-of-type": {
                borderRadius: "8px 0 0 8px",
              },
              "&:last-of-type": {
                borderRadius: "0 8px 8px 0 !important",
              },
            },
          ]}
        />
      );
    });
  }, [data, isSmUp, isMdUp]);

  return (
    <MuiTabs
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
      value={value}
      onChange={changeTabHandler}
      variant={isSmUp ? "standard" : "fullWidth"}
      sx={[
        {
          marginBottom: isSmUp ? "3rem" : "2rem",
        },
        {
          width: isSmUp ? "fit-content" : "80%",
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
