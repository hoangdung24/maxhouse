import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box sx={{ textAlign: "center", flexDirection: "row" }}>
      <Typography variant="h2" sx={{ my: "40px" }}>
        LIÊN HỆ VỚI CHÚNG TÔI
      </Typography>
      <Stack sx={{ width: "80%", flexDirection: "row", m: "0 auto" }}>
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
        <Box sx={{ width: "50%", textAlign: "right" }}>
          <Box sx={{ textAlign: "left", width: " 80%", marginLeft: "20%" }}>
            <Typography variant="body_large">
              Nếu bạn có câu hỏi hoặc muốn biết thêm thông tin về các tác phẩm
              của chúng tôi, Vui lòng hoàn thành biểu mẫu và chúng tôi sẽ liên
              hệ lại với bạn sau 24 giờ.
            </Typography>
            <FormControl sx={{ width: "100%", mt: "20px" }}>
              <FormLabel>Tên</FormLabel>
              <Input
                placeholder="Vui lòng nhập tên của ban"
                sx={{ width: "100%", mb: "20px" }}
              />
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Vui lòng nhập email"
                sx={{ width: "100%", mb: "20px" }}
              />

              <FormLabel>Số Điện Thoại</FormLabel>
              <Input
                placeholder="Vui lòng nhập số điện thoại"
                sx={{ width: "100%", mb: "20px" }}
              />

              <FormLabel>Nội Dung</FormLabel>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Vui lòng nhập nội dung"
                style={{ width: "100%", height: "200px" }}
              />
            </FormControl>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{ textAlign: "right", width: "80%", m: "0 auto", fontSize: "10px" }}
      >
        <Button variant="contained" sx={{ width: "10%", fontSize: "10px" }}>
          GỬI THÔNG TIN
        </Button>
      </Box>
    </Box>
  );
}
