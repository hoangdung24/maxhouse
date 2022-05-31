import useSWR from "swr";
import dynamic from "next/dynamic";
import { useToggle } from "react-use";
import { useRouter } from "next/router";

import {
  Box,
  Container,
  Grid,
  Fade,
  Typography,
  useTheme,
  Skeleton,
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
import { transformUrl } from "../../libs";

import get from "lodash/get";

import { PAGES, types } from "../../api";
import { NEWS_POST_LIMIT } from "../../constants";

const DetailBlogModal = dynamic(() =>
  import("../../components").then((Component) => {
    return Component.DetailBlogModal;
  })
);

export default function New({ initData }) {
  const theme = useTheme();
  const router = useRouter();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const [open, toggle] = useToggle(true);
  const [params, setParams] = useParams();
  const [selectedPost, setSelectedPost] = useState(null);
  const [animationState, setAnimationState] = useState(true);

  const { data: newsData } = useSWR(() => {
    return transformUrl(PAGES, {
      limit: NEWS_POST_LIMIT,
      type: types.newsDetailPage,
      fields: "*",
      locale: router.locale,
    });
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

  const [totalCount, setTotalCount] = useState(() => {
    return get(newsData, "meta.total_count");
  });

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

  const renderCardItem = useMemo(() => {
    return (
      <ListingBlog
        beforeChange={(oldIndex, newIndex) => {
          console.log(
            "🚀 ~ file: News.js ~ line 109 ~ renderCardItem ~ oldIndex, newIndex",
            oldIndex,
            newIndex
          );
          if (newIndex > oldIndex) {
            console.log("Next Page");
          } else {
            if (newIndex === 0) {
              console.log("Go back to First page");
            } else {
              console.log("Previous Page");
            }
          }
        }}
        data={newsDataList}
        selectedPostHandler={selectedPostHandler}
      />
    );
  }, [newsDataList]);

  // const renderPagination = useMemo(() => {
  //   if (!newListItem || isSmUp) {
  //     return null;
  //   }

  //   let filteredData = newListItem.items.filter((el) => {
  //     return el.category == currentTab;
  //   });

  //   return (
  //     <Pagination
  //       data={filteredData}
  //       currentPage={currentPage}
  //       onChange={(_, newPage) => {
  //         setCurrentPage(newPage);
  //         animationHandler();
  //       }}
  //     />
  //   );
  // }, [newListItem, currentPage, isSmUp, currentTab]);

  console.log(newsDataList);

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
                isSmUp && {
                  paddingY: "2.5rem",
                  marginY: "7.5rem",
                  minHeight: "900px",
                },
                isSmDown && {
                  marginY: "2rem",
                },
                isMdUp && {
                  minHeight: "800px",
                },
              ]}
            >
              <BackgroundListingPage />

              <Box>
                <Fade
                  in={animationState}
                  timeout={{
                    enter: 500,
                  }}
                >
                  <Box>{renderCardItem}</Box>
                </Fade>

                {/* {renderPagination} */}
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
