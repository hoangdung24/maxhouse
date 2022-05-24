import { useMemo } from "react";
import { Tab, Tabs as MuiTabs } from "@mui/material";

import { useMedia } from "../../hooks";

const Tabs = ({ value, changeTab, data }) => {
  const { isSmUp } = useMedia();

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
          marginBottom: isSmUp ? "3rem" : "4rem",
        },
      ]}
    >
      {renderTab}
    </MuiTabs>
  );
};

export default Tabs;
