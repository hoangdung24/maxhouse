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
  SliderListing,
  BackgroundListingPage,
} from "../../components";

const DetailBlogModal = dynamic(() =>
  import("../../components").then((Component) => {
    return Component.DetailBlogModal;
  })
);

const LIMIT = 6;

export default function Design({ initData }) {
  const router = useRouter();
  const [open, toggle] = useToggle(true);
  const [params, setParams] = useParams();
  const [selectedPost, setSelectedPost] = useState(null);

  const { isSmUp } = useMedia();

  const [designCategoryList, designListItem, metadataPage] = initData;

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
      <Tabs value={value} changeTab={changeTabHandler} data={designCategoryList.items} />
    );
  }, [designCategoryList, isSmUp, value]);

  const renderTabPanel = useMemo(() => {
    if (!designListItem) {
      return null;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMUAL PAGE = (OFFSET / LIMIT) + 1

    let filteredData = designListItem.items.filter((el) => {
      return el.category == value;
    });

    if (isSmUp) {
      console.log("?");

      return designCategoryList.items.map((item, index) => {
        return (
          <TabPanel key={item.id} value={value} index={item.id}>
            <ListingBlog data={filteredData} selectedPostHandler={selectedPostHandler} />
          </TabPanel>
        );
      });
    } else {
      return null;

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

    // [designListItem, designCategoryList, value, isSmUp, currentPage]
  });

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
        data={cloneData}
        currentPage={currentPage}
        onChange={(_, newPage) => {
          setCurrenPage(newPage);
          animationHandler();
        }}
      />
    );
  });

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
