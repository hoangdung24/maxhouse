import {
  Stack,
  useTheme,
  Box,
  Grid,
  Divider as MuiDivider,
  styled,
  Typography,
} from "@mui/material";

import { useMeasure } from "react-use";
import { useIntl } from "react-intl";

import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import Link from "../Link";

import Container from "../Container";
import RenderHtml from "../RenderHTML";

import { useSetting, useMedia } from "../../hooks";

import { POLICY_ROUTE } from "../../constants";

export default function Footer({}) {
  const theme = useTheme();
  const setting = useSetting();
  const { isMdUp } = useMedia();
  const { messages } = useIntl();
  const [ref, { width }] = useMeasure();

  if (!setting) {
    return null;
  }

  const {
    company_name,
    tax_identification_number,
    social_links,
    google_map_location_embed_src,
    addresses,
  } = setting;

  return (
    <Box
      sx={{
        marginBottom: 4,
      }}
    >
      <MuiDivider
        sx={{
          marginBottom: 4,
          display: isMdUp ? "block" : "none",
        }}
      />

      <Container
        ref={ref}
        sx={{
          paddingX: 0,
        }}
      >
        <Grid
          container
          spacing={4}
          sx={[
            !isMdUp && {
              marginTop: 0,

              ["& .MuiGrid-item"]: {
                paddingTop: 0,
              },
            },
          ]}
        >
          <Grid item md={4}>
            <Box
              sx={[
                !isMdUp && {
                  ["& > p"]: {
                    marginBottom: 0,
                  },
                },
              ]}
            >
              <RenderHtml
                data={{
                  body: company_name,
                }}
                sx={{
                  ["& p"]: {
                    ...theme.typography.h6,
                  },
                  marginBottom: 4,
                  [theme.breakpoints.up("md")]: {
                    marginBottom: 1,
                  },
                }}
              />

              <Content
                sx={{
                  marginBottom: 4,

                  [theme.breakpoints.up("md")]: {
                    marginBottom: 1,
                  },
                }}
              >
                {messages["tax_identification_number"][0]["value"]}:{" "}
                {tax_identification_number}
              </Content>

              {POLICY_ROUTE.map((el, i) => {
                return (
                  <Link
                    className="asdasdadadaadad"
                    key={i}
                    href={el.link}
                    sx={{
                      display: isMdUp ? "block" : "none",
                      marginBottom: 4,

                      [theme.breakpoints.up("md")]: {
                        marginBottom: 1,
                      },
                      [theme.breakpoints.down("sm")]: {
                        marginBottom: 5,
                      },
                    }}
                  >
                    {messages[`${el.key}`][0]["value"]}
                  </Link>
                );
              })}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: isMdUp ? "none" : "block",
            }}
          >
            <Divider />
          </Grid>

          {/* phần MST cty mobile */}
          <Grid
            item
            md={4}
            sx={[
              {
                display: isMdUp ? "none" : "block",
              },
            ]}
          >
            <Box
              className="asdasdas"
              sx={[
                {
                  display: isMdUp ? "none" : "block",
                  "& a:last-child > p": {
                    mb: 0,
                  },
                },
              ]}
            >
              <Title variant={isMdUp ? "h5" : "body_large"}>
                {isMdUp
                  ? messages["tax_identification_number"][0]["value"]
                  : messages["policy_and_regulation"][0]["value"]}
              </Title>

              {POLICY_ROUTE.map((el, i) => {
                return (
                  <Link key={i} href={el.link} sx={{ mt: 10 }}>
                    <Content>{messages[`${el.key}`][0]["value"]}</Content>
                  </Link>
                );
              })}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: isMdUp ? "none" : "block",
            }}
          >
            <Divider />
          </Grid>

          {/* phần địa chỉ cty */}
          <Grid item md={4}>
            <Box
              sx={[
                !isMdUp && {
                  ["& p:last-child"]: {
                    marginBottom: 0,
                  },
                },
              ]}
            >
              <Title variant={isMdUp ? "h6" : "body_large"}>
                {messages["address"][0]["value"]}
              </Title>

              {addresses.map((el, i) => {
                return <Content key={i}>{el.value}</Content>;
              })}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "block",
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <Divider />
          </Grid>

          {/* googlemap */}
          <Grid item md={4}>
            {google_map_location_embed_src && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  filter: isMdUp ? "grayscale(100%)" : null,
                  overflow: "hidden",
                  transition: "all 0.3s",
                  "&:hover": { filter: "none" },
                  width: "100%",
                }}
              >
                <iframe
                  src={google_map_location_embed_src}
                  style={{
                    border: 0,
                    borderRadius: "0.5rem",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width={width > 0 ? width : undefined}
                  height={isMdUp ? 250 : 200}
                />
              </Box>
            )}
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "block",

              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "calc(100% + 64px)",
                  height: 1,
                  background: theme.palette.common.neutral3,

                  left: -32,
                }}
              ></Box>

              <Divider
                sx={{
                  opacity: 0,
                }}
              />
            </Box>
          </Grid>

          {/* 3 icon face youtube pinterest */}
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" spacing={2}>
              {social_links.map((el, i) => {
                const sharedStyle = {
                  color: theme.palette.primary.main,
                  [theme.breakpoints.up("md")]: {
                    color: theme.palette.common.black,
                    ["&:hover"]: {
                      color: theme.palette.primary.main,
                    },
                  },
                };

                const { value } = el;

                if (i === 0) {
                  return (
                    <Link noLinkStyle={true} href={value.link} target="_blank" key={i}>
                      <FacebookOutlinedIcon fontSize="large" sx={sharedStyle} />
                    </Link>
                  );
                } else if (i === 1) {
                  return (
                    <Link noLinkStyle={true} href={value.link} target="_blank" key={i}>
                      <YouTubeIcon fontSize="large" sx={sharedStyle} />
                    </Link>
                  );
                } else if (i === 2) {
                  return (
                    <Link noLinkStyle={true} href={value.link} target="_blank" key={i}>
                      <PinterestIcon fontSize="large" sx={sharedStyle} />
                    </Link>
                  );
                }
              })}
            </Stack>

            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 3,
                [theme.breakpoints.up("md")]: {
                  display: "none",
                },
              }}
            >
              <Image src="/img/download (4) 1.png" width={"10rem"} height="4rem" />
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    textTransform: "uppercase",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.black,
      marginBottom: 8,
    },
  };
});

const Content = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.neutral1,
    marginBottom: 10,

    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.black,
      marginBottom: 1,
    },
  };
});

const Divider = styled(MuiDivider)(({ theme }) => {
  return {
    marginBottom: 32,
    marginTop: 32,
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  };
});
