import { Box } from "@mui/material";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "../Container";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* <Header /> */}
      {children}
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
