import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  useTheme,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import { useWindowScroll } from "react-use";
import Image from "next/image";

const pages2 = [
  { name: "THIẾT KẾ", link: "/design" },
  { name: "SẢN PHẨM", link: "/product" },
  { name: "DỊCH VỤ", link: "/service" },
  { name: "TIN TỨC", link: "/news" },
  { name: "LIÊN HỆ", link: "/contact" },
];
const fadeIn = keyframes({
  "0%": { top: "-50%" },

  "100%": { top: 0 },
});

const NavBars = ({ children }) => {
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
  const { x, y } = useWindowScroll();

  useEffect(() => {
    setScroll(y);
  });

  const router = useRouter();
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
          <Toolbar
            disableGutters
            sx={{ gap: "60px", justifyContent: "center" }}
          >
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

            {/* Mobile navBar */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages2.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      {children}
      {router.pathname == "/contact" ||
      router.pathname == "/service" ||
      router.pathname == "/news" ||
      router.pathname == "/design" ||
      router.pathname == "/product" ? (
        <Footer />
      ) : null}
    </React.Fragment>
  );
};
export default NavBars;
