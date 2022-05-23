import { useEffect, useState, Fragment, useMemo } from "react";
import { AppBar, Box, Typography, Button, useTheme, Stack, Slide } from "@mui/material";

import { useWindowScroll, useToggle } from "react-use";

import Link from "../Link";
import Image from "../Image";
import Container from "../Container";
import HamburgerIcon from "../HamburgerIcon";
import ModalMenu from "./ModalMenu";

import { useMedia, useSetting } from "../../hooks";

import { NAVBAR } from "../../constants";

const Header = () => {
  const theme = useTheme();
  const setting = useSetting();
  const [isToggle, setIsToggle] = useToggle(false);

  const { y } = useWindowScroll();
  const { isMdUp } = useMedia();
  const [animationState, setAnimationState] = useState(false);

  const { logo_1 } = setting;

  useEffect(() => {
    if (y > 500) {
      setAnimationState(true);
    } else {
      setAnimationState(false);
    }
  }, [y]);

  useEffect(() => {
    if (isMdUp) {
      setIsToggle(false);
    }
  }, [isMdUp]);

  const Navbar = useMemo(() => {
    return (
      <Container
        maxWidth="md"
        sx={{
          paddingX: "0 !important",
        }}
      >
        <Stack direction={"row"} justifyContent="space-between">
          <Box>
            <Link href="/">
              <Image src={logo_1} width="100px" height="75px" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", gap: "60px" }}>
            {NAVBAR.map((el, index) => (
              <Link key={index} href={el.link}>
                <Button
                  sx={{
                    my: 2,
                    color: theme.palette.common.black,
                    display: "block",
                  }}
                >
                  <Typography variant="title">{el.name}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Stack>
      </Container>
    );
  }, [NAVBAR]);

  const staticNav = useMemo(() => {
    if (y < 200) {
      return (
        <AppBar
          sx={{
            position: "absolute",
            backgroundColor: "transparent",
            paddingY: 2,
          }}
          elevation={0}
        >
          {Navbar}
        </AppBar>
      );
    }
    return null;
  }, [y]);

  const NavbarMemo = useMemo(() => {
    if (isMdUp) {
      return (
        <Fragment>
          <Slide
            in={animationState}
            direction="down"
            mountOnEnter
            unmountOnExit
            timeout={{
              enter: 300,
              exit: 150,
            }}
          >
            <AppBar
              sx={{
                position: "fixed",
                backgroundColor: theme.palette.common.white,
                paddingY: 2,
              }}
            >
              {Navbar}
            </AppBar>
          </Slide>
          {staticNav}
        </Fragment>
      );
    } else {
      const TopNav = (
        <Stack
          direction={"row"}
          paddingY={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Link href="/">
              <Image src="/img/Logo.png" width="60px" height="50px" />
            </Link>
          </Box>
          <HamburgerIcon
            onClick={() => {
              setIsToggle(!isToggle);
            }}
            className={isToggle && "open"}
          />
        </Stack>
      );

      return (
        <Fragment>
          <Container>{TopNav}</Container>
          <ModalMenu open={isToggle} toggle={setIsToggle}>
            <Container>
              {TopNav}

              {NAVBAR.map((el, index) => (
                <Link key={index} href={el.link}>
                  <Button
                    sx={{
                      my: 2,
                      color: theme.palette.common.black,
                      display: "block",
                    }}
                  >
                    <Typography variant="h6">{el.name}</Typography>
                  </Button>
                </Link>
              ))}
            </Container>
          </ModalMenu>
        </Fragment>
      );
    }
  }, [isMdUp, animationState, Navbar, staticNav, isToggle]);

  return NavbarMemo;
};
export default Header;
