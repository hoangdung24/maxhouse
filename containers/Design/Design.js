import dynamic from "next/dynamic";
import { useToggle } from "react-use";

import {
  Box,
  Tab,
  Tabs,
  Typography,
  useTheme,
  Container,
  Grid,
  Fade,
  useMediaQuery,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useState, useMemo, useCallback, Fragment } from "react";

import { Image } from "../../components";

import { useParams } from "../../hooks";

import CardItem from "./components/CardItem";
import Slider from "./components/Slider";

const ModalDesignDetail = dynamic(() => import("./components/ModalDesignDetail"));

const LIMIT = 6;

function TabPanel(props) {
  const { children, value, index } = props;
  return value === index ? <Box id={index}>{children}</Box> : null;
}

export default function Design({ initData }) {
  const theme = useTheme();
  const [open, toggle] = useToggle(true);
  const [params, setParams] = useParams({});
  const [selectedPost, setSelectedPost] = useState(null);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [designCategoryList, designListItem] = initData;
  const [animationState, setAnimationState] = useState(true);
  const [value, setValue] = useState(designCategoryList?.items?.[0]?.id);

  const [currentPage, setCurrenPage] = useState(1);

  const animationHandler = useCallback(() => {
    setAnimationState(false);

    const timer = setTimeout(() => {
      setAnimationState(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const changeTabHandler = useCallback((event, newValue) => {
    setValue(newValue);
    setCurrenPage(1);
    animationHandler();
  }, []);

  const selectedPostHandler = useCallback((data) => {
    return () => {
      const { id } = data;
      setParams({
        id,
      });
      toggle(true);

      setSelectedPost(data);
    };
  }, []);

  const renderTab = useMemo(() => {
    if (!designCategoryList) {
      return null;
    }

    return designCategoryList.items.map((el, index) => {
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
  }, [designCategoryList, isSmUp]);

  const renderTabPanel = useMemo(() => {
    if (!designListItem) {
      return null;
    }

    const cloneData = Object.keys([...new Array(24)])
      .map((el) => {
        return designListItem.items[0];
      })
      .filter((el) => {
        return el.category == value;
      });

    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMUAL PAGE = (OFFSET / LIMIT) + 1

    if (isSmUp) {
      return designCategoryList.items.map((item, index) => {
        return (
          <TabPanel key={item.id} value={value} index={item.id}>
            <Slider>
              {cloneData.map((el, i) => {
                return (
                  <CardItem key={i} {...el} selectedPostHandler={selectedPostHandler} />
                );
              })}
            </Slider>
          </TabPanel>
        );
      });
    } else {
      const offset = (currentPage - 1) * LIMIT;

      const data = cloneData.slice(offset, offset + LIMIT);

      return designCategoryList.items.map((item, index) => {
        return (
          <TabPanel key={item.id} value={value} index={item.id}>
            <Fragment>
              {data.map((el, i) => {
                return (
                  <CardItem key={i} {...el} selectedPostHandler={selectedPostHandler} />
                );
              })}
            </Fragment>
          </TabPanel>
        );
      });
    }
  }, [designListItem, designCategoryList, value, isSmUp, currentPage]);

  const renderPagination = useMemo(() => {
    if (!designListItem || isSmUp) {
      return null;
    }

    const cloneData = Object.keys([...new Array(24)])
      .map((el) => {
        return designListItem.items[0];
      })
      .filter((el) => {
        return el.category == value;
      });

    return (
      <Pagination
        count={Math.round(cloneData.length / LIMIT)}
        variant="outlined"
        onChange={(_, newPage) => {
          setCurrenPage(newPage);
          animationHandler();
        }}
        page={currentPage}
        sx={{
          ["& .MuiPagination-ul"]: {
            justifyContent: "center",
          },
        }}
        renderItem={(props) => {
          const { type } = props;
          if (type === "page") {
            return null;
          }
          return <PaginationItem {...props} />;
        }}
      />
    );
  });

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
              sx={[
                {
                  position: "relative",
                },
                isSmUp
                  ? {
                      paddingY: "2.5rem",
                      marginY: "7.5rem",
                    }
                  : {
                      marginY: "4rem",
                    },
              ]}
            >
              {isSmUp && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "-4rem",
                    width: "calc(100% + 8rem)",
                    height: "100%",
                    zIndex: -1,
                  }}
                >
                  <Image
                    src="/img/imgNews/Component 6.png"
                    layout="fill"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              )}

              <Box>
                <Tabs
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
                      marginBottom: isSmUp ? "3rem" : "4rem",
                    },
                  ]}
                >
                  {renderTab}
                </Tabs>
                <Fade
                  in={animationState}
                  timeout={{
                    enter: 500,
                  }}
                >
                  <Box>{renderTabPanel}</Box>
                </Fade>

                {renderPagination}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ModalDesignDetail
        {...{
          open,
          toggle,
          setParams,
          selectedPost,
        }}
      />
    </Box>
  );
}
