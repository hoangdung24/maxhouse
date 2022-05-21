import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  useTheme,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import Image from "next/image";

const pages2 = [
  { name: "THIẾT KẾ", link: "/design" },
  { name: "SẢN PHẨM", link: "/product" },
  { name: "DỊCH VỤ", link: "/service" },
  { name: "TIN TỨC", link: "/news" },
  { name: "LIÊN HỆ", link: "/contact" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const fadeIn = keyframes({
  "0%": { top: "-50%" },

  "100%": { top: 0 },
});

const Header = ({ children }) => {
  const theme = useTheme();
  const [scroll, setScroll] = useState();

  const [navCSS2, setNavCSSS2] = useState({
    zIndex: 5,
    position: "absolute",
    background: "none",
    borderBottom: "none",
    boxShadow: "none",
    py: "15px",
  });

  const [navCSS4, setNavCSSS3] = useState({
    zIndex: 5,
    backgroundColor: "white",
    position: "fixed",
    transition: "ease-in 2s",
    borderBottom: "1px solid #e6e8ec",
    boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.15)",
    py: "15px",
    animation: `${fadeIn}`,
    animationDuration: "2s",
  });
  const { x, y } = useWindowScroll(() => {
    console.log("hello");
  });
  useEffect(() => {
    setScroll(y);
  });

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={scroll > 150 ? navCSS4 : navCSS2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ gap: "60px", justifyContent: "center" }}>
            {/*  Header */}
            <Link href="/">
              <Image src="/img/Logo.png" width="70%" height="70%"></Image>
            </Link>

            <Box sx={{ display: "flex", gap: "60px", width: "48%" }}>
              {pages2.map((page, index) => (
                <Link key={index} href={page.link}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: theme.palette.common.black,
                      display: "block",
                    }}
                  >
                    <Typography variant="body_large" sx={{ fontSize: "17px" }}>
                      {page.name}
                    </Typography>
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
