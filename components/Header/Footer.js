import {
  Stack,
  useTheme,
  Box,
  Grid,
  Divider as MuiDivider,
  useMediaQuery,
  styled,
  Typography,
  Icon,
} from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";

import Image from "../Image";
import Link from "../Link";

export default function Footer(props) {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        marginBottom: 4,
      }}
    >
      <Grid container spacing={isMdUp ? 3 : 0}>
        <Grid item md={4}>
          <Box
          // sx={[
          //   !isMdUp && {
          //     ["& > p"]: {
          //       marginBottom: 0,
          //     },
          //   },
          // ]}
          >
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                marginBottom: 4,

                [theme.breakpoints.up("md")]: {
                  marginBottom: 1,
                },
              }}
            >
              CÔNG TY TNHH{" "}
              <Typography
                sx={{ color: theme.palette.primary.main }}
                variant="span"
                component="span"
              >
                MAXHOUSE
              </Typography>{" "}
              VIỆT NAM
            </Typography>
            <Content
              sx={{
                marginBottom: 4,

                [theme.breakpoints.up("md")]: {
                  marginBottom: 1,
                },
              }}
            >
              Mã số thuế: 123456789
            </Content>

            {/* <Link
              href="/"
              sx={{
                display: isMdUp ? "block" : "none",
              }}
            >
              Chính sách quy định
            </Link> */}

            {/* <Box
              sx={{
                display: isMdUp ? "block" : "none",
              }}
            >
              <Image src="/img/download (4) 1.png" width={"10rem"} height="4rem" />
            </Box> */}
          </Box>
        </Grid>

        {/* <Grid
          item
          xs={12}
          sx={{
            display: isMdUp ? "none" : "block",
          }}
        >
          <Divider />
        </Grid> */}

        {/* <Grid
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
            <Title variant={isMdUp ? "h5" : "body_large"}>Chính sách</Title>
            <Content>Thanh toán</Content>
            <Content>Sử dụng</Content>
          </Box>
        </Grid> */}

        {/* <Grid
          item
          xs={12}
          sx={{
            display: isMdUp ? "none" : "block",
          }}
        >
          <Divider />
        </Grid> */}

        {/* <Grid item md={4}>
          <Box
            sx={
              !isMdUp && {
                ["& p:last-child"]: {
                  marginBottom: 0,
                },
              }
            }
          >
            <Title variant={isMdUp ? "h5" : "body_large"}>ĐỊA CHỈ</Title>
            <Content>Showroom: 100 Nguyễn Xí , P.26, Q. Bình Thạnh, TP.HCM</Content>
            <Content>
              Xưởng Sản Xuất 1 : 24/5 Vĩnh Phú 20, KP Trung, Vĩnh Phú, Thuận An, Tỉnh Bình
              Dương
            </Content>
            <Content>
              Xưởng Sản Xuất 1 : 24/5 Vĩnh Phú 20, KP Trung, Vĩnh Phú, Thuận An, Tỉnh Bình
              Dương
            </Content>
          </Box>
        </Grid> */}

        {/* <Grid
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
        </Grid> */}

        {/* <Grid item md={4}>
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
            <Box
              sx={{
                width: isMdUp ? "300px" : "100vw",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <iframe
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
              />
            </Box>
          </Box>
        </Grid> */}

        {/* <Grid
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
        </Grid> */}

        {/* <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Link noLinkStyle={true} href="https://youtube.com" target="_blank">
              <FacebookOutlinedIcon
                fontSize="large"
                sx={{
                  color: theme.palette.primary.main,
                  [theme.breakpoints.up("md")]: {
                    color: theme.palette.common.black,
                    ["&:hover"]: {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              />
            </Link>

            <Link noLinkStyle={true} href="https://youtube.com" target="_blank">
              <YouTubeIcon fontSize="large" />
            </Link>

            <Link noLinkStyle={true} href="https://youtube.com" target="_blank">
              <PinterestIcon fontSize="large" />
            </Link>
          </Stack>

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
            <Image src="/img/download (4) 1.png" width={"10rem"} height="4rem" />
          </Box>
        </Grid> */}
      </Grid>
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
