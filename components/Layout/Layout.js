import { useMemo } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
      {/* <Header /> */}
      {children}
      {FooterMemo}
    </Box>
  );
};

export default Layout;
