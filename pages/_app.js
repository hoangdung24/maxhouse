import { SWRConfig } from "swr";
import { ErrorBoundary } from "react-error-boundary";
import CssBaseline from "@mui/material/CssBaseline";

import { createEmotionCache } from "../libs";
import { ErrorFallback, Layout } from "../components";
import { Theme as CustomMuiTheme, Cache as EmotionCache } from "../hoc";

import "../styles/global.css";
import "../node_modules/nprogress/nprogress.css";

import axios from "../axios.config";
import { useRouting } from "../hooks";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useRouting();

  return (
    <EmotionCache emotionCache={emotionCache}>
      <CustomMuiTheme>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SWRConfig
            value={{
              fetcher: async (resource, init) => {
                return axios.get(resource, init).then((res) => {
                  return res.data;
                });
              },
              onError: (error) => {},
            }}
          >
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
        </ErrorBoundary>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
