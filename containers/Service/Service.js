import RenderHTML from "../../components/RenderHTML";

import { Box, Container, Grid, Fade } from "@mui/material";
import { useState, useMemo, useCallback } from "react";

import { useMedia } from "../../hooks";
import { TabPanel } from "../../components";
import TabsBackground from "../../components/TabPanel/TabsBackground";

export default function Service({ initData }) {
  const { isSmUp } = useMedia();
  const [currentTab, setCurrentTab] = useState("left");

  const [dataService, setDataService] = useState(() => {
    const initDataService = initData[0].items[0];

    let transformArr = [];
    const leftObj = {};
    const rightObj = {};

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
        <TabPanel
          key={item.text_alignment}
          value={currentTab}
          index={item.text_alignment}
        >
          <RenderHTML data={item} />
        </TabPanel>
      );
    });

    //
  }, [dataService, currentTab, isSmUp]);

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
