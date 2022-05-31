import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Vui lòng nhập tên")
    .min(5, "Ít nhất 5 ký tự")
    .max(20, "username tối đa 20 ký tự"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập Email")
    .max(20, "mật khẩu tối đa 20 ký tự"),

  phone_number: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(9, "Không phải số điện thoại")
    .max(10, "Không phải số điện thoại"),
  body: yup
    .string()
    .required("Vui lòng nhập nội dung")
    .min(10, "Ít nhất 10 ký tự")
    .max(200),
});

export const defaultValues = {
  name: "phi",
  email: "phi@gmail.com",
  phone_number: "0398813369",
  body: "phiphiphiphi",
};
