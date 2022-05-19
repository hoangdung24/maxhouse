import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useWindowScroll } from "react-use";
import { SignalWifiStatusbarNullTwoTone } from "@mui/icons-material";

const pages2 = [
  { name: "THIẾT KẾ", link: "/design" },
  { name: "SẢN PHẨM", link: "/product" },
  { name: "DỊCH VỤ", link: "/service" },
  { name: "TIN TỨC", link: "/news" },
  { name: "LIÊN HỆ", link: "/contact" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const NavBars = ({ children }) => {
  const [navCSS, setNavCSS] = useState({
    zIndex: 2,
    background: "none",
    boxShadow: "none",
    position: "fixed",
    py: "15px",
  });

  const [navCSSS, setNavCSSS] = useState({
    zIndex: 2,
    position: "fixed",
    backgroundColor: "white",
    transition: "ease-in 0.2s",
    borderBottom: "1px solid #e6e8ec",
    boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.15)",
    py: "15px",
  });

  const { x, y } = useWindowScroll();
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
      <AppBar
        className="momo"
        position="static"
        sx={y > 50 ? navCSSS : y < 5 ? navCSS : navCSS}
      >
        {/* {renderheader()} */}
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ gap: "60px", justifyContent: "center" }}
          >
            {/* PC navBar */}
            <img src="/img/Logo.png" width="5%" height="auto"></img>
            <Box sx={{ display: "flex", gap: "60px", width: "48%" }}>
              {pages2.map((page, index) => (
                <Link key={index} href={page.link}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
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
      router.pathname == "/design" ? (
        <Footer />
      ) : null}
    </React.Fragment>
  );
};
export default NavBars;
