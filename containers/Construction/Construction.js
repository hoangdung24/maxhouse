import { useToggle } from "react-use";
import { useRouter } from "next/router";
import { Box, Container, Grid, Fade } from "@mui/material";
import { useState, useMemo, useCallback, Fragment } from "react";

import get from "lodash/get";

import {
  Tabs,
  TabPanel,
  CardItem,
  BannerTop,
  Pagination,
  ListingBlog,
  BackgroundListingPage,
  DetailBlogModal,
  SEO,
} from "../../components";
import { POST_LIMIT } from "../../constants";
import { useMedia, useParams } from "../../hooks";

export default function Construction({ initData }) {
  const router = useRouter();
  const [params, setParams] = useParams({
    isScroll: false,
  });
  const { isSmUp, isMdUp, isSmDown } = useMedia();
  const [animationState, setAnimationState] = useState(true);
  const [minWrapperHeight, setMinWrapperHeight] = useState(0);
  const [constructionCategoryList, constructionListItem, metadataPage] = initData;

  const [selectedPost, setSelectedPost] = useState(() => {
    const { id } = router.query;

    if (id) {
      return get(constructionListItem, "items").find((el) => {
        return el.id == id;
      });
    } else {
      return null;
    }
  });

  const [open, toggle] = useToggle(!!selectedPost);

  const [currentTab, setCurrentTab] = useState(constructionCategoryList?.items?.[0]?.id);

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
    if (!constructionCategoryList) {
      return null;
    }

    return (
      <Tabs
        value={currentTab}
        changeTab={changeTabHandler}
        data={constructionCategoryList.items}
      />
    );
  }, [constructionCategoryList, isSmUp, currentTab]);

  const renderTabPanel = useMemo(() => {
    // Xét có constructionListItem ko, nếu ko thì null
    if (!constructionListItem) {
      return null;
    }

    // constructionListItem value thì sẽ chay filter và chia data theo từng tab
    let filteredData = constructionListItem.items.filter((el) => {
      return el.category == currentTab;
    });

    //phân chia tung man hinh,ko thì sẽ cắt từng file theo tab
    if (isSmUp) {
      return constructionCategoryList.items.map((item, index) => {
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

      return constructionCategoryList.items.map((item, index) => {
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
  }, [constructionListItem, constructionCategoryList, currentTab, isSmUp, currentPage]);

  const renderPagination = useMemo(() => {
    if (!constructionListItem || isSmUp) {
      return null;
    }

    let filteredData = constructionListItem.items.filter((el) => {
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
  }, [constructionListItem, currentPage, isSmUp, currentTab]);

  return (
    <Box>
      <SEO data={get(metadataPage, "items[0].meta")} />

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
