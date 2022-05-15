import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import { Spinner } from "../components";

const useRouting = () => {
  useEffect(() => {
    const handleRouteChange = (...props) => {
      NProgress.configure({
        template: Spinner,
      });
      NProgress.start();
    };

    const handleRouteComplete = (url, { shallow }) => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteComplete);
    Router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteComplete);
      Router.events.off("routeChangeError", handleRouteComplete);
    };
  }, []);
};

export default useRouting;
