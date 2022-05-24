import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
  FormHelperText,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { forwardRef, useState } from "react";
import postFormData from "../../libs/postFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, defaultValues } from "../../libs/yupRegister";
import LoadButton from "../../components/BtnButton/LoadButton";
import TextInput from "../../components/BtnInput/TextInput";

const FormInput = ({ label, FormControlProps, InputLabelProps, ...props }) => {
  return (
    <FormControl fullWidth {...FormControlProps} {...props}>
      <FormLabel>{label}</FormLabel>
      <Input {...InputLabelProps} />
      <FormHelperText children="Form Helper Text" />
    </FormControl>
  );
};

export default function Contact({ initData }) {
  const [loading, setLoading] = useState(false);

  //data từ trang contact
  const data = initData[0].items[0];

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
  const onSubmit = async (formData, e) => {
    console.log("form", formData);
    setLoading(true);
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     setLoading(false);
    //     resolve();
    //   }, 2000);
    // });

    // return null;
    try {
      await postFormData(formData); //Hàm gửi form data lên cho sever

      reset({ name: "", email: "", phone_number: "", body: "" });
    } catch (err) {
      console.log("Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ textAlign: "center", flexDirection: "row", pt: "155px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h1"
          sx={{ mb: "60px", textTransform: "uppercase", textAlign: "center" }}
        >
          {data.title}
        </Typography>
        <Stack sx={{ width: "80%", flexDirection: "row", m: "0 auto" }}>
          {/* googleMap */}
          <Box sx={{ width: "50%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.491793097612!2d106.6759783149418!3d10.77359516219161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f20cec9ae2f%3A0x34f5254b0cd3660a!2zMTc4IMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDExLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1652693764562!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>

          {/* from */}
          <Box sx={{ width: "50%", textAlign: "right" }}>
            <Box sx={{ textAlign: "left", width: " 80%", marginLeft: "20%" }}>
              <Typography
                variant="body_large"
                sx={{ fontSize: theme.typography.h6 }}
              >
                {data.description}
              </Typography>
              <Box sx={{ width: "100%", mt: "20px" }}>
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
        </Stack>
        <Box
          sx={{
            textAlign: "right",
            width: "80%",
            m: "30px auto",
            fontSize: "10px",
            mb: "81px",
          }}
        >
          <LoadButton loading={loading} />
        </Box>
      </form>
    </Box>
  );
}
