import { Box, Tab, Tabs, Typography, useTheme, Container, Grid } from "@mui/material";
import { Fragment, useEffect, useState, useMemo } from "react";

import { Image } from "../../components";

import CardItem from "./components/CardItem";
import Slider from "./components/Slider";

function TabPanel(props) {
  const { children, value, index } = props;

  return value === index ? <Box id={index}>{children}</Box> : null;
}

export default function Design({ initData }) {
  const [designCategoryList, designListItem] = initData;

  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = useMemo(() => {
    if (!designCategoryList) {
      return null;
    }

    return designCategoryList.items.map((el, index) => {
      return (
        <Tab
          key={el.id}
          label={el.name}
          sx={{
            "&.MuiButtonBase-root": {
              ...theme.typography.h6,
            },
          }}
          disableRipple
        />
      );
    });
  }, [designCategoryList]);

  const renderTabPanel = () => {
    if (!designListItem) {
      return null;
    }

    const cloneData = Object.keys([...new Array(24)]).map((el) => {
      return designListItem.items[0];
    });

    return designCategoryList.items.map((item, index) => {
      return (
        <TabPanel key={index} value={value} index={index}>
          <Slider>
            {cloneData.map((el, i) => {
              return <CardItem key={i} {...el} />;
            })}
          </Slider>
        </TabPanel>
      );
    });
  };

  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
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
          width={"100%"}
          height="100%"
          objectFit="cover"
          WrapperProps={{ filter: "grayscale(100%)" }}
        />

        <Typography
          variant="body_large"
          sx={{
            transition: "ease 3s",
            position: "absolute",
            left: "50%",
            bottom: "4%",
            textAlign: "center",
            transform: "translateX(-50%)",
            color: theme.palette.common.black,
            width: "57%",
            lineHeight: "41px",
            fontSize: "27.7px",
            fontWeight: 400,
            zIndex: 2,
          }}
        >
          Quyền lựa chọn của chúng ta là không có khuôn mẫu và khi không có gì ngăn cản,
          <br /> chúng ta có thể làm những gì chúng ta thích nhất.
        </Typography>

        <Box
          sx={{
            transition: "all 150ms ease-in-out 100ms",
            width: "28px",
            height: "45px",
            border: `2px solid ${theme.palette.common.black}`,
            borderRadius: "15px",
            position: "absolute",
            left: "3%",
            bottom: "5%",
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

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                position: "relative",
                paddingY: "2.5rem",
                marginY: "7.5rem",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
              >
                <Image
                  src="/img/imgNews/Component 6.png"
                  layout="fill"
                  width="100%"
                  height="75vh"
                  objectFit="cover"
                />
              </Box>

              <Box>
                <Box>
                  <Tabs
                    TabIndicatorProps={{
                      sx: {
                        display: "none",
                      },
                    }}
                    value={value}
                    onChange={handleChange}
                    sx={{
                      color: theme.palette.common.black,
                      "& .MuiTabs-flexContainer": { justifyContent: "center" },
                    }}
                  >
                    {renderTab}
                  </Tabs>
                </Box>
                {renderTabPanel()}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
