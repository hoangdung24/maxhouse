import { Fragment } from "react";
import { useToggle } from "react-use";
import { useRouter } from "next/router";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, useTheme, IconButton, Slide } from "@mui/material";

import Link from "../Link";
import Image from "../Image";
import { useSetting, useMedia } from "../../hooks";

const FABContact = ({}) => {
  const theme = useTheme();
  const router = useRouter();
  const setting = useSetting();
  const { isSmDown } = useMedia();
  const [open, toggle] = useToggle(false);

  if (!setting) {
    return null;
  }

  const { contact_links } = setting;

  return (
    <Fragment>
      <Box
        sx={{
          display: router.pathname == "/" ? "none" : "block",
          position: "fixed",
          top: "50%",
          right: "0",
          zIndex: 998,
          padding: 1,
          backgroundColor: theme.palette.common.white,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      >
        <IconButton
          sx={[
            {
              padding: 0,
            },
          ]}
          onClick={() => {
            toggle(true);
          }}
        >
          <ChatIcon
            sx={[
              {
                fontSize: "32px",
                color: "common.black",
              },
            ]}
          />
        </IconButton>
      </Box>
      <Slide in={open} direction="left" mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            right: 0,
            zIndex: 999,
            padding: 1,
            backgroundColor: theme.palette.common.white,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          {contact_links.map((el, i) => {
            const { block_type, value } = el;

            let newValue;
            let isTarget = true;
            if (block_type === "telephone") {
              newValue = `tel:${value.phone.replaceAll(" ", "")}`;
              isTarget = false;
            } else if (block_type === "hyperlink") {
              newValue = value.link;
            } else if (block_type === "email") {
              newValue = `mailto:${value.email}`;
              isTarget = false;
            }

            return (
              <Box key={i} marginBottom={0.5}>
                <Link
                  href={newValue}
                  {...(isTarget && {
                    target: "_blank",
                  })}
                >
                  <Image src={value.image} width="2rem" height="2rem" />
                </Link>
              </Box>
            );
          })}
        </Box>
      </Slide>
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 997,
            backgroundColor: "transparent",
          }}
          onClick={() => {
            toggle(false);
          }}
        ></Box>
      )}
    </Fragment>
  );
};

export default FABContact;
