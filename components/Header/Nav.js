import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";

const pages2 = [
  { name: "THIẾT KẾ", link: "/design" },
  { name: "SẢN PHẨM", link: "/product" },
  { name: "DỊCH VỤ", link: "/service" },
  { name: "TIN TỨC", link: "/new" },
  { name: "LIÊN HỆ", link: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        className="asdasdasdadasdasd"
        sx={{
          zIndex: 1,
          background: "none",
          boxShadow: "none",
          position: "fixed",
          mt: "20px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            className="asdasdad"
            sx={{ gap: "60px", justifyContent: "center" }}
          >
            {/* PC navBar */}
            <Image src="/img/Logo.png" width="100%" height="100%"></Image>
            <Box sx={{ display: "flex", gap: "60px", width: "60%" }}>
              {pages2.map((page) => (
                <Link key={page} href={page.link}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Typography variant="body_large">{page.name}</Typography>
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
                {pages2.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
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
    </React.Fragment>
  );
};
export default NavBar;
