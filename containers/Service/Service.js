import { useState, useMemo, useCallback } from "react";

import { Box, Container, Grid, Fade } from "@mui/material";

import get from "lodash/get";

import { useMedia, useSetting } from "../../hooks";
import RenderHTML from "../../components/RenderHTML";
import { TabPanel, OffsetTop, Image, SEO } from "../../components";
import TabsBackground from "../../components/TabPanel/TabsBackground";

export default function Service({ initData }) {
  const { isSmUp } = useMedia();
  const { logo_2 } = useSetting();
  const [size, setSize] = useState({
    width: 1,
    height: 1,
  });

  const [currentTab, setCurrentTab] = useState("left");

  const [dataService, setDataService] = useState(() => {
    const initDataService = initData?.[0]?.items?.[0] || initData?.[0];

    let transformArr = [];
    const leftObj = { id: "left" };
    const rightObj = { id: "right" };

    for (const key of Object.keys(initDataService)) {
      if (key.includes("left")) {
        if (key.includes("title")) {
          leftObj["title"] = initDataService[key];
        } else if (key.includes("body")) {
          leftObj["body"] = initDataService[key];
        } else if (key.includes("text_alignment")) {
          leftObj["text_alignment"] = initDataService[key];
        }
      } else if (key.includes("right")) {
        if (key.includes("title")) {
          rightObj["title"] = initDataService[key];
        } else if (key.includes("body")) {
          rightObj["body"] = initDataService[key];
        } else if (key.includes("text_alignment")) {
          rightObj["text_alignment"] = initDataService[key];
        }
      }
    }
    transformArr = [leftObj, rightObj];
    return transformArr;
  });

  const [animationState, setAnimationState] = useState(true);

  const animationHandler = useCallback(() => {
    setAnimationState(false);

    const timer = setTimeout(() => {
      setAnimationState(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const changeTabHandler = useCallback((_, newValue) => {
    setCurrentTab(newValue);
    animationHandler();
  }, []);

  const renderTabs = useMemo(() => {
    return (
      <TabsBackground
        value={currentTab}
        changeTabHandler={changeTabHandler}
        data={dataService}
      />
    );
  }, [dataService, isSmUp, currentTab]);

  const renderTabPanel = useMemo(() => {
    return dataService.map((item, index) => {
      return (
        <TabPanel key={item.id} value={currentTab} index={item.id}>
          <RenderHTML data={item} />
        </TabPanel>
      );
    });

    //
  }, [dataService, currentTab, isSmUp]);

  const imageHeight = size.height / size.width;

  return (
    <OffsetTop>
      <SEO data={get(initData, "[0].items.[0].meta")} />

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={[
                {
                  position: "relative",
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
                  <Box>
                    {renderTabPanel}

                    <Box
                      sx={{
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        width={"100%"}
                        WrapperProps={{
                          sx: {
                            marginX: "auto",
                          },
                        }}
                        height={`calc(${imageHeight} * 100vh)`}
                        src={logo_2}
                        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                          setSize({
                            width: naturalWidth,
                            height: naturalHeight,
                          });
                        }}
                      />
                    </Box>
                  </Box>
                </Fade>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </OffsetTop>
  );
}
