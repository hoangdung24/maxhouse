import dynamic from "next/dynamic";
import { useToggle } from "react-use";
import { useRouter } from "next/router";
import axios from "axios";

import {
  Box,
  Container,
  Grid,
  Fade,
  Typography,
  useTheme,
} from "@mui/material";
import { useState, useMemo, useCallback, Fragment } from "react";

import { useParams, useMedia } from "../../hooks";
import {
  Tabs,
  TabPanel,
  CardItem,
  Pagination,
  ListingBlog,
  BackgroundListingPage,
} from "../../components";
import { prefetchData, transformUrl } from "../../libs";
import { limitss, PAGES, types } from "../../api";

const DetailBlogModal = dynamic(() =>
  import("../../components").then((Component) => {
    return Component.DetailBlogModal;
  })
);

const LIMIT = 6;

export default function New({ initData }) {
  const [count, setCount] = useState(1);
  const [metadataPage, newListItem] = initData;
  const [apiCardNew, setApiCardNew] = useState(newListItem.items);
  const theme = useTheme();

  console.log("news", initData);
  const router = useRouter();
  const [open, toggle] = useToggle(true);
  const [params, setParams] = useParams();
  const [selectedPost, setSelectedPost] = useState(null);

  const { isSmUp } = useMedia();

  console.log("metadataPage", metadataPage.items[0].title);

  const [animationState, setAnimationState] = useState(true);
  const [currentTab, setCurrentTab] = useState(metadataPage?.items?.[0]?.id);
  console.log("newCategoryList", metadataPage);
  console.log("newListItem", newListItem);
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentTab(newValue);
    setCurrentPage(1);
    animationHandler();
  }, []);

  const selectedPostHandler = useCallback((data, isMdUp) => {
    return () => {
      const { id } = data;

      if (isMdUp) {
        setParams({
          id,
        });
        toggle(true);
        setSelectedPost(data);
      } else {
        router.push(`${router.pathname}/${id}`);
      }
    };
  }, []);

  const renderTabs = useMemo(() => {
    if (!metadataPage) {
      return null;
    }

    return (
      <Tabs
        value={currentTab}
        changeTab={changeTabHandler}
        data={metadataPage.items}
      />
    );
  }, [metadataPage, isSmUp, currentTab]);

  const renderCardNew = useMemo(() => {
    if (!newListItem) {
      return null;
    }

    let filteredData = newListItem.items.filter((el) => {
      return el.category == currentTab;
    });
    console.log("newfilteredData", filteredData);

    if (isSmUp) {
      return metadataPage.items.map((item, index) => {
        return (
          <ListingBlog
            data={filteredData}
            selectedPostHandler={selectedPostHandler}
          />
        );
      });
    } else {
      const offset = (currentPage - 1) * LIMIT;

      const data = filteredData.slice(offset, offset + LIMIT);

      return metadataPage.items.map((item, index) => {
        return (
          <TabPanel key={item.id} value={currentTab} index={item.id}>
            <Fragment>
              {data.map((el, i) => {
                return (
                  <CardItem
                    key={i}
                    {...el}
                    selectedPostHandler={selectedPostHandler}
                  />
                );
              })}
            </Fragment>
          </TabPanel>
        );
      });
    }

    //
  }, [newListItem, metadataPage, currentTab, isSmUp, currentPage]);

  const renderCardNews = useMemo(() => {
    return (
      <ListingBlog
        afterChange={() => {
          console.log("afterChange");
        }}
        data={newListItem.items}
        selectedPostHandler={selectedPostHandler}
      />
    );
  });

  const renderPagination = useMemo(() => {
    if (!newListItem || isSmUp) {
      return null;
    }

    let filteredData = newListItem.items.filter((el) => {
      return el.category == currentTab;
    });

    return (
      <Pagination
        data={filteredData}
        currentPage={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          animationHandler();
        }}
      />
    );
  }, [newListItem, currentPage, isSmUp, currentTab]);

  return (
    <Box>
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
              <BackgroundListingPage />

              <Box>
                {/* {renderTabs} */}
                <Typography
                  variant="h1"
                  sx={{
                    mb: "4rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  {metadataPage.items[0].title}
                </Typography>
                <Fade
                  in={animationState}
                  timeout={{
                    enter: 500,
                  }}
                >
                  <Box>
                    {/* {renderCardNew} */}
                    <ListingBlog
                      afterChange={(locale) => {
                        // const urls = [
                        //   transformUrl(PAGES, {
                        //     limit: limitss.limitPage,
                        //     type: types.newsDetailPage,
                        //     fields: "*",
                        //     locale,
                        //   }),
                        // ];
                        // const { resList, fallback } = prefetchData(urls);
                        axios
                          .get(
                            "https://maxhouse.t-solution.vn/api/v2/pages/?type=service.ServicePage&fields=*"
                          )
                          .then((err) => {
                            alert("thanh công");
                          })
                          .catch(() => {
                            alert("that bai");
                          });
                      }}
                      data={apiCardNew}
                      selectedPostHandler={selectedPostHandler}
                    />
                  </Box>
                </Fade>

                {renderPagination}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bài viết khi click vào designcatelogories */}
      <DetailBlogModal
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
