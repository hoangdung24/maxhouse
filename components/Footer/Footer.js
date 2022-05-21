import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer(props) {
  const router = useRouter();
  const [offFooter, setOffFooter] = useState("block");
  const theme = useTheme();

  // xét điều kiện để hiên footer
  useEffect(() => {
    if (router.pathname == "/") {
      setOffFooter("none");
    } else {
      setOffFooter("block");
    }
  });

  return (
    <Box
      sx={{
        display: offFooter,
        width: "85%",
        m: "0 auto",
        borderTop: "1px solid #E6E8EC",
        py: "32px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Box>
          <Typography variant="h5">
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
          <Typography>Mã số thuế: 123456789</Typography>
          <Link href="/">
            <Typography
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
              }}
              variant="body1"
            >
              Chính sách và Quy định
            </Typography>
          </Link>
          <img src="/img/download (4) 1.png" width="40%" height="auto" />
        </Box>

        <Box>
          <Typography variant="h5">ĐỊA CHỈ</Typography>
          <Typography>
            Showroom: 100 Nguyễn Xí , P.26, Q. Bình Thạnh, TP.HCM
          </Typography>
          <Typography>
            Xưởng Sản Xuất 1 : 24/5 Vĩnh Phú 20, KP Trung, Vĩnh Phú, Thuận An,
            Tỉnh Bình Dương
          </Typography>
          <Typography>
            Xưởng Sản Xuất 1 : 24/5 Vĩnh Phú 20, KP Trung, Vĩnh Phú, Thuận An,
            Tỉnh Bình Dương
          </Typography>
        </Box>

        <Box
          sx={{
            filter: "grayscale(100%)",
            transition: "all 0.5s",
            "&:hover": { filter: "none" },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.491793097612!2d106.6759783149418!3d10.77359516219161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f20cec9ae2f%3A0x34f5254b0cd3660a!2zMTc4IMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDExLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652693764562!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Stack>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <FacebookOutlinedIcon />
        <YouTubeIcon />
        <PinterestIcon />
      </Stack>
    </Box>
  );
}
