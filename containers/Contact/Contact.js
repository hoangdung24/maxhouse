import { Box, Typography, useTheme, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import postFormData from "../../libs/postFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, defaultValues } from "../../libs/yupRegister";
import TextInput from "../../components/FormInput/TextInput";
import LoadButton from "../../components/BtnButton/LoadButton";

import { useMedia, useSetting } from "../../hooks";
import axios from "axios";
import { API_KEY, CONTACTS } from "../../api";

export default function Contact({ initData }) {
  const setting = useSetting();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { google_map_location_embed_src } = setting;

  //data từ trang contact
  const data = initData[0].items[0];
  const { isSmUp, isMdUp } = useMedia();

  //theme màu sắc
  const theme = useTheme();

  //useForm
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  //Hàm xử lý thông báo thành công and thất bại
  const registerError = () => {
    setError(true);
    setSuccess(false);
  };
  const registerSuccess = () => {
    setSuccess(true);
    setError(false);
    // 5s sau khi đăng ký thành công sẽ mất nội dung thành công
    setTimeout(() => {
      setSuccess(false);
    }, 8000);
  };

  //Hàm submit nhận value từ người dùng nhập và gửi lên sever
  const onSubmit = useCallback(async (formData) => {
    setLoading(true);

    try {
      // await postFormData(formData); //Hàm gửi form data lên cho sever
      await axios
        .post(`${process.env.NEXT_PUBLIC_DOMAIN_URL}${CONTACTS}/`, formData, {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_API_KEY,
          },
        })
        .then((res) => {});

      reset(defaultValues, {
        keepDirty: false,
      });
      registerSuccess();
    } catch (err) {
      const errorPhone = err.response.data.phone_number[0];
      console.log("lỗi", errorPhone);
      if (errorPhone == "lỗi Số điện thoại không hợp lệ.") {
        return;
      }
      registerError();
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        pt: isMdUp ? "9.5rem" : "2.5rem",
        width: "80vw",
        margin: "0 auto",
        mb: "5rem",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant={isMdUp ? "h1" : "h5"}
          sx={{
            mb: "4rem",
            textTransform: "uppercase",
            textAlign: "center",
            [theme.breakpoints.up("sm")]: {
              mb: "4rem",
            },
          }}
        >
          {data.title}
        </Typography>
        <Grid container spacing={isMdUp ? 10 : 6} sx={{ flexDirection: "row" }}>
          {/* googleMap */}
          <Grid item sm={12} md={6} sx={{ width: "100%" }}>
            {google_map_location_embed_src && (
              <Box
                className="momomom"
                sx={{
                  width: "100%",
                  height: "100%",
                  [theme.breakpoints.up("md")]: {
                    height: "100%",
                  },
                  [theme.breakpoints.up("sm")]: {
                    height: "70vh",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    height: "60vh",
                  },
                }}
              >
                <iframe
                  src={google_map_location_embed_src}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            )}
          </Grid>

          {/* from */}
          <Grid item sm={12} md={6}>
            <Box>
              <Box sx={{ width: "100%" }}>
                {/* tit liên hệ */}
                <Typography
                  variant="body_large"
                  sx={{ fontSize: theme.typography.h6, textAlign: "justify" }}
                >
                  {data.description}
                </Typography>

                {/* Form liên hệ */}
                <Box sx={{ width: "100%", mt: "2rem" }}>
                  <TextInput
                    erroYup={errors?.name?.message}
                    {...register("name")}
                    placeholder="Vui lòng nhập tên của bạn"
                    text="Tên"
                    required={true}
                  />
                  <TextInput
                    erroYup={errors?.email?.message}
                    {...register("email")}
                    placeholder="Vui lòng nhập email"
                    text="Email"
                    required={true}
                  />
                  <TextInput
                    erroYup={errors.phone_number?.message}
                    {...register("phone_number")}
                    placeholder="Vui lòng nhập số điện thoại"
                    text="số điện thoại"
                    required={true}
                  />
                  <TextInput
                    erroYup={errors.body?.message}
                    {...register("body")}
                    placeholder="Vui lòng nhập nội dung"
                    rows={10}
                    text="nội dung"
                    required={true}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* nội dung success arror và btn khi register */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: "2.5rem",
            "& .MuiLoadingButton-root": {
              [theme.breakpoints.up("md")]: {
                width: "10% !important",
              },
              [theme.breakpoints.up("sm")]: {
                width: "20% !important",
              },
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mr: "1rem",
              display: error ? "block" : "none",
              color: theme.palette.text.error,
            }}
          >
            Đăng ký thất bại. Vui lòng thử lại...
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mr: "1rem",
              display: success ? "block" : "none",
              color: theme.palette.text.success,
            }}
          >
            Đăng ký thành công. Vui lòng kiểm tra email
          </Typography>
          <LoadButton loading={loading} />
        </Box>
      </form>
    </Box>
  );
}
