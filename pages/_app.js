import { ErrorBoundary } from "react-error-boundary";
import { createEmotionCache } from "../libs";
import { ErrorFallback, Layout } from "../components";
import { Theme as CustomMuiTheme, Cache as EmotionCache, SWR } from "../hoc";
import { SettingConfig } from "../contexts";

import "../styles/global.css";
import "../node_modules/nprogress/nprogress.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouting } from "../hooks";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useRouting();

  return (
    <EmotionCache emotionCache={emotionCache}>
      <CustomMuiTheme>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SWR fallback={pageProps?.fallback}>
            <SettingConfig>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SettingConfig>
          </SWR>
        </ErrorBoundary>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
