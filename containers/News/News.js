import useSWR from "swr";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useToggle } from "react-use";

import { Box, Container, Grid, Fade, Typography } from "@mui/material";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";

import { useParams, useMedia } from "../../hooks";
import {
  CardItem,
  OffsetTop,
  Pagination,
  ListingBlog,
  BackgroundListingPage,
  SEO,
} from "../../components";
import { transformUrl } from "../../libs";

import get from "lodash/get";

import { PAGES, types } from "../../api";
import { NEWS_POST_LIMIT } from "../../constants";

const DetailBlogModal = dynamic(() =>
  import("../../components").then((Component) => {
    return Component.DetailBlogModal;
  })
);

export default function News({ initData }) {
  const router = useRouter();
  const slickRef = useRef();

  const { isSmUp, isSmDown, isMdUp } = useMedia();

  const [animationState, setAnimationState] = useState(true);

  const [metadataPage, prefetchSelectedPost] = initData;

  const [open, toggle] = useToggle(!!prefetchSelectedPost);
  const [params, setParams] = useParams({
    isScroll: false,
  });

  const [minWrapperHeight, setMinWrapperHeight] = useState(0);

  const [currentOffset, setCurrentOffset] = useState(0);

  const { data: newsData, mutate } = useSWR(() => {
    return transformUrl(PAGES, {
      limit: NEWS_POST_LIMIT,
      type: types.newsDetailPage,
      fields: "*",
      locale: router.locale,
      order: "-first_published_at",
      ...(currentOffset && {
        offset: currentOffset,
      }),
    });
  });

  const [selectedPost, setSelectedPost] = useState(() => {
    if (prefetchSelectedPost) {
      return prefetchSelectedPost;
    } else {
      return null;
    }
  });

  const [limit, setLimit] = useState(NEWS_POST_LIMIT);

  const [totalCount, setTotalCount] = useState(() => {
    return get(newsData, "meta.total_count");
  });

  const [newsDataList, setNewsDataList] = useState(() => {
    if (!newsData) {
      return undefined;
    }

    const preFetchData = get(newsData, "items");
    const total_count = get(newsData, "meta.total_count");
    const restCount = total_count - preFetchData.length;

    const placeholderList = [...new Array(restCount).keys()].map((el) => {
      return {
        isPlaceholder: true,
      };
    });

    return [...get(newsData, "items"), ...placeholderList];
  });

  useEffect(() => {
    if (newsData === undefined) {
      return;
    }

    setNewsDataList((prev) => {
      const cloneNewsDataList = [...prev];
      const newsItems = get(newsData, "items");

      cloneNewsDataList.splice(currentOffset, newsItems.length, ...newsItems);

      return cloneNewsDataList;
    });
  }, [newsData, currentOffset]);

  const animationHandler = useCallback(() => {
    setAnimationState(false);

    const timer = setTimeout(() => {
      setAnimationState(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
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

  useEffect(() => {
    if (slickRef.current) {
      const props = get(slickRef, "current.props");

      const { slidesToScroll, rows } = props;

      setLimit(slidesToScroll * rows);
    }
  }, [slickRef]);

  const renderCardItem = useMemo(() => {
    if (isSmUp) {
      return (
        <ListingBlog
          ref={slickRef}
          beforeChange={(oldIndex, newIndex) => {
            if (newIndex > oldIndex) {
              if (newIndex - oldIndex > 4) {
                const lastOffset = Math.floor(totalCount / limit) * limit;

                setCurrentOffset(lastOffset);
              } else {
                setCurrentOffset((prev) => {
                  return prev + limit;
                });

                // console.log("Next Page");
              }
            } else if (newIndex < oldIndex) {
              if (newIndex === 0) {
                setCurrentOffset(0);

                // console.log("Go back to first page");
              } else {
                setCurrentOffset((prev) => {
                  return prev - limit;
                });

                // console.log("Previous Page");
              }
            }
          }}
          data={newsDataList}
          selectedPostHandler={selectedPostHandler}
          minWrapperHeight={minWrapperHeight}
          setMinWrapperHeight={setMinWrapperHeight}
        />
      );
    } else {
      const data = newsDataList.slice(currentOffset, currentOffset + NEWS_POST_LIMIT);

      return (
        <Grid container>
          {data.map((el, i) => {
            return (
              <Grid item xs={6} key={i}>
                <CardItem
                  {...el}
                  selectedPostHandler={selectedPostHandler}
                  minWrapperHeight={minWrapperHeight}
                  setMinWrapperHeight={setMinWrapperHeight}
                />
              </Grid>
            );
          })}
        </Grid>
      );
    }
  }, [newsDataList, slickRef, totalCount, isSmUp, currentOffset, minWrapperHeight]);

  const renderPagination = useMemo(() => {
    if (!newsDataList || isSmUp) {
      return null;
    }

    // OFFSET = (PAGE - 1) * LIMIT

    return (
      <Pagination
        data={newsDataList}
        currentPage={currentOffset / NEWS_POST_LIMIT + 1}
        onChange={(_, newPage) => {
          const offset = (newPage - 1) * NEWS_POST_LIMIT;

          setCurrentOffset(offset);

          animationHandler();
        }}
      />
    );
  }, [newsDataList, currentOffset, isSmUp]);

  return (
    <OffsetTop>
      <SEO data={get(metadataPage, "items[0].meta")} />

      <Container
        sx={[
          isMdUp && {
            marginBottom: 18,
          },
          isSmUp && {
            marginBottom: 15,
          },
        ]}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={[
                {
                  position: "relative",
                  minHeight: "800px",
                },

                isSmDown && {
                  marginBottom: 4,
                },
              ]}
            >
              <BackgroundListingPage src={"/news-background.png"} />

              <Box>
                <Typography
                  variant="h1"
                  sx={[
                    {
                      mb: "5rem",

                      textAlign: "center",
                    },
                  ]}
                >
                  {metadataPage.items[0].title}
                </Typography>

                <Fade
                  in={animationState}
                  timeout={{
                    enter: 500,
                  }}
                >
                  <Box>{renderCardItem}</Box>
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
    </OffsetTop>
  );
}
