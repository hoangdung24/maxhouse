import { ErrorBoundary } from "react-error-boundary";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { useRouting } from "../hooks";
import { createEmotionCache } from "../libs";
import { SettingConfig } from "../contexts";
import { ErrorFallback, Layout } from "../components";
import { Theme as CustomMuiTheme, Cache as EmotionCache, SWR, Intl } from "../hoc";

import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../node_modules/nprogress/nprogress.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useRouting();

  return (
    <EmotionCache emotionCache={emotionCache}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY}>
        <Intl>
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
        </Intl>
      </GoogleReCaptchaProvider>
    </EmotionCache>
  );
}

export default MyApp;
