import dynamic from "next/dynamic";
import { useToggle } from "react-use";
import { useRouter } from "next/router";

import { Box, Container, Grid, Fade } from "@mui/material";
import { useState, useMemo, useCallback, Fragment } from "react";

import { useParams, useMedia } from "../../hooks";
import {
  Tabs,
  TabPanel,
  CardItem,
  BannerTop,
  Pagination,
  ListingBlog,
  BackgroundListingPage,
} from "../../components";

import get from "lodash/get";

const DetailBlogModal = dynamic(() =>
  import("../../components").then((Component) => {
    return Component.DetailBlogModal;
  })
);

import { POST_LIMIT } from "../../constants";

export default function Design({ initData }) {
  const router = useRouter();
  const [params, setParams] = useParams();
  const { isSmUp, isMdUp, isSmDown } = useMedia();
  const [animationState, setAnimationState] = useState(true);
  const [minWrapperHeight, setMinWrapperHeight] = useState(0);
  const [designCategoryList, designListItem, metadataPage] = initData;

  const [selectedPost, setSelectedPost] = useState(() => {
    const { id } = router.query;

    if (id) {
      return get(designListItem, "items").find((el) => {
        return el.id == id;
      });
    } else {
      return null;
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [open, toggle] = useToggle(!!selectedPost);
  const [currentTab, setCurrentTab] = useState(designCategoryList?.items?.[0]?.id);

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
    if (!designCategoryList) {
      return null;
    }

    return (
      <Tabs
        value={currentTab}
        changeTab={changeTabHandler}
        data={designCategoryList.items}
      />
    );
  }, [designCategoryList, isSmUp, currentTab]);

  const renderTabPanel = useMemo(() => {
    if (!designListItem) {
      return null;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMULA PAGE = (OFFSET / LIMIT) + 1

    let filteredData = designListItem.items.filter((el) => {
      return el.category == currentTab;
    });

    if (isSmUp) {
      return designCategoryList.items.map((item, index) => {
        return (
          <TabPanel key={item.id} value={currentTab} index={item.id}>
            <ListingBlog
              data={filteredData}
              selectedPostHandler={selectedPostHandler}
              minWrapperHeight={minWrapperHeight}
              setMinWrapperHeight={setMinWrapperHeight}
            />
          </TabPanel>
        );
      });
    } else {
      const offset = (currentPage - 1) * POST_LIMIT;
      const data = filteredData.slice(offset, offset + POST_LIMIT);

      return designCategoryList.items.map((item, index) => {
        return (
          <TabPanel key={item.id} value={currentTab} index={item.id}>
            <Fragment>
              {data.map((el, i) => {
                return (
                  <CardItem
                    key={i}
                    {...el}
                    selectedPostHandler={selectedPostHandler}
                    minWrapperHeight={minWrapperHeight}
                    setMinWrapperHeight={setMinWrapperHeight}
                  />
                );
              })}
            </Fragment>
          </TabPanel>
        );
      });
    }

    //
  }, [designListItem, designCategoryList, currentTab, isSmUp, currentPage]);

  const renderPagination = useMemo(() => {
    if (!designListItem || isSmUp) {
      return null;
    }

    let filteredData = designListItem.items.filter((el) => {
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
  }, [designListItem, currentPage, isSmUp, currentTab]);

  return (
    <Box>
      <BannerTop
        src={metadataPage?.items?.[0]?.banner}
        content={metadataPage?.items?.[0]?.subtitle}
      />

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={[
                {
                  position: "relative",
                  minHeight: "800px",
                },

                isSmDown && {
                  marginTop: 8,
                  marginBottom: 4,
                },
                isSmUp && {
                  marginTop: 8,
                },

                isMdUp && {
                  marginTop: "7.5rem",
                },
              ]}
            >
              <BackgroundListingPage />

              <Box>
                {renderTabs}

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
