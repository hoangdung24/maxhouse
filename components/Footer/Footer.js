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
<<<<<<< HEAD
import GoogleMap from "../../containers/GoogleMap/GoogleMap";
=======
import Image from "../Image";
import Container from "../Container";
import RenderHtml from "../RenderHTML";
>>>>>>> 2862ba5fe358d60efe8e8d6cd2df0cc119ec3635

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
                    ...theme.typography.h5,
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
                    key={i}
                    href={el.link}
                    sx={{
                      display: isMdUp ? "block" : "none",
                      marginBottom: 4,

                      [theme.breakpoints.up("md")]: {
                        marginBottom: 1,
                      },
                    }}
                  >
                    {messages[`${el.key}`][0]["value"]}
                  </Link>
                );
              })}

              {/* <Box
                sx={{
                  display: isMdUp ? "block" : "none",
                }}
              >
                <Image src="/img/download (4) 1.png" width={"10rem"} height="4rem" />
              </Box> */}
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

          <Grid
            item
            md={4}
            sx={{
              display: isMdUp ? "none" : "block",
            }}
          >
            <Box
              sx={[
                { display: isMdUp ? "none" : "block" },
                !isMdUp && {
                  ["& > p:last-child"]: {
                    marginBottom: 0,
                  },
                },
              ]}
            >
<<<<<<< HEAD
              <Image
                src="/img/download (4) 1.png"
                width={"10rem"}
                height="4rem"
              />
=======
              <Title variant={isMdUp ? "h5" : "body_large"}>
                {messages["tax_identification_number"][0]["value"]}
              </Title>
              <Content>Thanh toán</Content>
              <Content>Sử dụng</Content>
>>>>>>> 2862ba5fe358d60efe8e8d6cd2df0cc119ec3635
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
              <Title variant={isMdUp ? "h5" : "body_large"}>
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
<<<<<<< HEAD
            <Title variant={isMdUp ? "h5" : "body_large"}>ĐỊA CHỈ</Title>
            <Content>
              Showroom: 100 Nguyễn Xí , P.26, Q. Bình Thạnh, TP.HCM
            </Content>
            <Content>
              Xưởng Sản Xuất 1 : 24/5 Vĩnh Phú 20, KP Trung, Vĩnh Phú, Thuận An,
              Tỉnh Bình Dương
            </Content>
            <Content>
              Xưởng Sản Xuất 1 : 24/5 Vĩnh Phú 20, KP Trung, Vĩnh Phú, Thuận An,
              Tỉnh Bình Dương
            </Content>
          </Box>
        </Grid>
=======
            <Divider />
          </Grid>
>>>>>>> 2862ba5fe358d60efe8e8d6cd2df0cc119ec3635

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
<<<<<<< HEAD
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.491793097612!2d106.6759783149418!3d10.77359516219161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f20cec9ae2f%3A0x34f5254b0cd3660a!2zMTc4IMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDExLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652693764562!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "0.5rem",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}
              {/* <GoogleMap /> */}
            </Box>
          </Box>
        </Grid>
=======
              <Box
                sx={{
                  position: "absolute",
                  width: "calc(100% + 64px)",
                  height: 1,
                  background: theme.palette.common.neutral3,
>>>>>>> 2862ba5fe358d60efe8e8d6cd2df0cc119ec3635

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
                    <Link
                      noLinkStyle={true}
                      href="https://youtube.com"
                      target="_blank"
                      key={i}
                    >
                      <YouTubeIcon fontSize="large" sx={sharedStyle} />
                    </Link>
                  );
                } else if (i === 2) {
                  return (
                    <Link
                      noLinkStyle={true}
                      href="https://youtube.com"
                      target="_blank"
                      key={i}
                    >
                      <PinterestIcon fontSize="large" sx={sharedStyle} />
                    </Link>
                  );
                }
              })}
            </Stack>

<<<<<<< HEAD
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 3,
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <Image
              src="/img/download (4) 1.png"
              width={"10rem"}
              height="4rem"
            />
          </Box>
=======
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
>>>>>>> 2862ba5fe358d60efe8e8d6cd2df0cc119ec3635
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
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.black,
      marginBottom: 8,
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
