import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";

import SEO from "../SEO";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BackToTop from "../BackToTop";

const FABContact = dynamic(() => import("../FAB/FABContact"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const router = useRouter();

  const FooterMemo = useMemo(() => {
    if (router.pathname === "/") {
      return null;
    }

    return <Footer />;
  }, [router.pathname]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <SEO />
      <Header />
      {children}
      {FooterMemo}
      <FABContact />
      <BackToTop />
    </Box>
  );
};

export default Layout;
