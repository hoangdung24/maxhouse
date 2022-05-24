import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { SETTINGS } from "../../api";

const FABContact = dynamic(() => import("../FAB/FABContact"), {
  ssr: false,
});

const Layout = ({ fallback, children }) => {
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
      <Header />
      {children}
      {FooterMemo}
      <FABContact />
    </Box>
  );
};

export default Layout;
