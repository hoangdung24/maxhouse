import dynamic from "next/dynamic";
import { useToggle } from "react-use";
import { useRouter } from "next/router";
import RenderHTML from "../../components/RenderHTML";

import { Box, Container, Grid, Fade } from "@mui/material";
import { useState, useMemo, useCallback, Fragment, useEffect } from "react";

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
import TabsBackground from "../../components/TabPanel/TabsBackground";

const DetailBlogModal = dynamic(() =>
  import("../../components").then((Component) => {
    return Component.DetailBlogModal;
  })
);

export default function Service({ initData }) {
  const [dataSer, setDataSer] = useState([]);

  const router = useRouter();
  const [open, toggle] = useToggle(true);
  const [params, setParams] = useParams();
  const [selectedPost, setSelectedPost] = useState(null);

  const { isSmUp } = useMedia();

  const [metadataPage] = initData;
  console.log("metadataPage", metadataPage);

  const [animationState, setAnimationState] = useState(true);
  const [currentTab, setCurrentTab] = useState(1);

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
    console.log("hello");
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
    if (!dataSer) {
      return null;
    }

    return (
      <TabsBackground
        value={currentTab}
        changeTab={changeTabHandler}
        data={dataSer}
      />
    );
  }, [dataSer, isSmUp, currentTab]);

  const renderTabPanel = useMemo(() => {
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMUAL PAGE = (OFFSET / LIMIT) + 1

    if (isSmUp) {
      return dataSer.map((item, index) => {
        const newObj = {};

        for (const key of Object.keys(item)) {
          if (key.includes("title")) {
            newObj["title"] = item[key];
          } else if (key.includes("body")) {
            newObj["body"] = item[key];
          } else if (key.includes("text_alignment")) {
            newObj["text_alignment"] = item[key];
          }
        }

        return (
          <TabPanel
            key={index}
            value={dataSer.right_text_alignment}
            index={item.right_text_alignment}
          >
            <RenderHTML data={newObj} />
          </TabPanel>
        );
      });
    } else {
      return dataSer.map((item, index) => {
        console.log(item);

        const newObj = {};

        for (const key of Object.keys(item)) {
          if (key.includes("title")) {
            newObj["title"] = item[key];
          } else if (key.includes("body")) {
            newObj["body"] = item[key];
          } else if (key.includes("text_alignment")) {
            newObj["text_alignment"] = item[key];
          }
        }

        return (
          <TabPanel
            key={index}
            value={dataSer.right_text_alignment}
            index={item.right_text_alignment}
          >
            <RenderHTML data={newObj} />
          </TabPanel>
        );
      });
    }

    //
  }, [dataSer, currentTab, isSmUp, currentPage]);

  useEffect(() => {
    const initDataService = initData[0].items[0];
    // console.log("aaaaaaaa", a);
    const arrData = [];
    const ServiceLeft = Object.keys(initDataService)
      .slice(3, 6)
      .reduce((result, key) => {
        result[key] = initDataService[key];

        return result;
      }, {});
    ServiceLeft.id = 1;

    const ServiceRight = Object.keys(initDataService)
      .slice(6, 9)
      .reduce((result, key) => {
        result[key] = initDataService[key];

        return result;
      }, {});
    ServiceRight.id = 2;

    arrData.push(ServiceLeft, ServiceRight);

    setDataSer(arrData);
  }, []);

  console.log("dataSerssssss", currentTab);

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
                      marginY: "2rem",
                    },
              ]}
            >
              <Box>
                {renderTabs}

                <Fade
                  in={animationState}
                  timeout={{
                    enter: 500,
                  }}
                >
                  <Box className="tabpanel">{renderTabPanel}</Box>
                </Fade>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
