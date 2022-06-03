import { useWindowScroll, useToggle } from "react-use";
import { useIntl, FormattedMessage } from "react-intl";
import { useEffect, useState, Fragment, useMemo, useCallback } from "react";

import { useRouter } from "next/router";

import {
  AppBar,
  Box,
  Typography,
  Button,
  useTheme,
  Stack,
  Slide,
  Popper,
  IconButton,
  Fade,
  Paper,
} from "@mui/material";

import { usePopupState, bindToggle, bindPopper } from "material-ui-popup-state/hooks";

import LanguageIcon from "@mui/icons-material/Language";

import Link from "../Link";
import Image from "../Image";
import ModalMenu from "./ModalMenu";
import Container from "../Container";
import HamburgerIcon from "../HamburgerIcon";

import { useMedia, useSetting } from "../../hooks";

import { NAVBAR } from "../../constants";

const Header = ({}) => {
  const theme = useTheme();
  const router = useRouter();
  const setting = useSetting();
  const { messages } = useIntl();

  const popupState = usePopupState({ variant: "popper", popupId: "languagesPopper" });

  const [isToggle, setIsToggle] = useToggle(false);

  const { isMdUp } = useMedia();
  const { y } = useWindowScroll();
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    popupState.close();

    if (y > 500 && !animationState) {
      setAnimationState(true);
    }

    if (y < 500 && animationState) {
      setAnimationState(false);
    }
  }, [y, animationState]);

  useEffect(() => {
    if (isMdUp) {
      setIsToggle(false);
    }
  }, [isMdUp]);

  const Navbar = useMemo(() => {
    if (!setting) {
      return null;
    }

    const { logo_1 } = setting;

    return (
      <Container
        maxWidth="md"
        sx={{
          paddingX: "0 !impor tant",
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
                  <Typography variant="title">
                    {messages[`navbar.${el.key}`][0].value}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Box>
          <IconButton {...bindToggle(popupState)}>
            <LanguageIcon />
          </IconButton>
        </Stack>
      </Container>
    );
  }, [NAVBAR, setting, popupState, messages]);

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
  }, [y, Navbar]);

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
              popupState.close();
            }}
            className={isToggle && "open"}
          />
        </Stack>
      );

      return (
        <Fragment>
          <Container sx={{ zIndex: 10, position: "absolute", top: 0, left: 0 }}>
            {TopNav}
          </Container>

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
                paddingX: "32px",
              }}
            >
              {TopNav}
            </AppBar>
          </Slide>

          <ModalMenu open={isToggle} toggle={setIsToggle}>
            <Container>
              {TopNav}

              {NAVBAR.map((el, index) => {
                return (
                  <Link key={index} href={el.link}>
                    <Typography
                      variant="h6"
                      sx={{
                        my: 2,
                      }}
                      onClick={() => {
                        setIsToggle(false);
                        popupState.close();
                      }}
                    >
                      {messages[`navbar.${el.key}`][0].value}
                    </Typography>
                  </Link>
                );
              })}
              <IconButton
                {...bindToggle(popupState)}
                sx={{
                  paddingLeft: 0,
                }}
              >
                <LanguageIcon
                  sx={{
                    color: "common.black",
                  }}
                />
              </IconButton>
            </Container>
          </ModalMenu>
        </Fragment>
      );
    }
  }, [isMdUp, animationState, Navbar, staticNav, isToggle, messages]);

  return (
    <>
      {NavbarMemo}
      <Popper
        {...bindPopper(popupState)}
        sx={{
          zIndex: 1301,
        }}
        transition
      >
        {({ TransitionProps }) => {
          return (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                sx={{
                  backgroundColor: "common.white",
                  borderRadius: 1.5,
                }}
              >
                <Stack sx={{ padding: 4 }} spacing={4}>
                  <Box
                    onClick={() => {
                      const { pathname } = router;
                      window.location.href = `/vi${pathname}`;
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Image src={"/vi.png"} width={24} height={24} />
                  </Box>

                  <Box
                    onClick={() => {
                      const { pathname } = router;
                      window.location.href = `/en${pathname}`;
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Image src={"/en.png"} width={24} height={24} />
                  </Box>
                </Stack>
              </Paper>
            </Fade>
          );
        }}
      </Popper>
    </>
  );
};
export default Header;
