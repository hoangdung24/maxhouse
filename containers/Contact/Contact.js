import { Box, Typography, useTheme, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import postFormData from "../../libs/postFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, defaultValues } from "../../libs/yupRegister";
import LoadButton from "../../components/BtnButton/LoadButton";
import TextInput from "../../components/FormInput/TextInput";
import { useSetting } from "../../hooks";
import { useMedia } from "../../hooks";

export default function Contact({ initData }) {
  const [loading, setLoading] = useState(false);
  const setting = useSetting();
  const { google_map_location_embed_src } = setting;

  console.log("settingsetting", google_map_location_embed_src);
  //data từ trang contact
  const data = initData[0].items[0];
  const { isSmUp, isMdUp } = useMedia();

  //theme màu sắc
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  //Hàm submit nhận value từ người dùng nhập và gửi lên sever
  const onSubmit = useCallback(async (formData) => {
    console.log("form", formData);
    setLoading(true);

    try {
      await postFormData(formData); //Hàm gửi form data lên cho sever

      reset(defaultValues);
    } catch (err) {
      console.log("Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        pt: "9.5rem",
        width: "80vw",
        margin: "0 auto",
        mb: "5rem",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h1"
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
          <Grid item sm={12} md={6}>
            {google_map_location_embed_src && (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  [theme.breakpoints.up("md")]: {
                    height: "100%",
                  },
                  [theme.breakpoints.up("sm")]: {
                    height: "70vh",
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
                    erroYup={errors.name?.message}
                    {...register("name")}
                    placeholder="Vui lòng nhập tên của bạn"
                    text="Tên"
                  />
                  <TextInput
                    erroYup={errors.email?.message}
                    {...register("email")}
                    placeholder="Vui lòng nhập email"
                    text="Email"
                  />
                  <TextInput
                    erroYup={errors.phone_number?.message}
                    {...register("phone_number")}
                    placeholder="Vui lòng nhập số điện thoại"
                    text="số điện thoại"
                  />
                  <TextInput
                    erroYup={errors.body?.message}
                    {...register("body")}
                    placeholder="Vui lòng nhập nội dung"
                    rows={10}
                    text="nội dung"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
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
          <LoadButton sx={{ width: "40% !important" }} loading={loading} />
        </Box>
      </form>
    </Box>
  );
}
