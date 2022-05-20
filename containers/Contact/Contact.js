import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/material";

const TextInput = ({ text, label, ...props }) => {
  return (
    <FormControl
      fullWidth={true}
      error={true}
      sx={{
        mb: "32px",
        ["& .MuiInput-input"]: {
          p: "10px",
        },
        ":last-child": { mb: 0 },
      }}
    >
      <FormLabel>{text}</FormLabel>
      <Input placeholder="Vui lòng nhập email" {...props} />
    </FormControl>
  );
};

export default function Contact(props) {
  return (
    <Box sx={{ textAlign: "center", flexDirection: "row", pt: "150px" }}>
      <Typography variant="h3" sx={{ mb: "60px" }}>
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
            <Typography variant="body_large" sx={{ mb: "32px" }}>
              Nếu bạn có câu hỏi hoặc muốn biết thêm thông tin về các tác phẩm
              của chúng tôi, Vui lòng hoàn thành biểu mẫu và chúng tôi sẽ liên
              hệ lại với bạn sau 24 giờ.
            </Typography>
            <Box sx={{ width: "100%", mt: "20px" }}>
              <TextInput
                label={"Email2"}
                placeholder="Vui lòng nhập tên của bạn"
                text="Tên"
              />
              <TextInput
                label={"Email"}
                placeholder="Vui lòng nhập số điện thoại"
                text="Email"
              />
              <TextInput
                label={"Email"}
                placeholder="Day la email"
                text="số điện thoại"
              />
              <TextInput
                label={"Email"}
                placeholder="Vui lòng nhập nội dung"
                multiline={true}
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
        <Button
          variant="contained"
          sx={{
            width: "10%",
            fontSize: "10px",
            p: "16px 24px",
            borderRadius: "10px",
          }}
        >
          GỬI THÔNG TIN
        </Button>
      </Box>
    </Box>
  );
}
