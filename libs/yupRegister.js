import { string, object, setLocale } from "yup";

import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";

setLocale({
  mixed: {
    required: "form.required",
  },
  string: {
    email: "form.email",
  },
});

export const schema = object().shape({
  name: string().required(),
  email: string().required().email(),
  phone_number: string()
    .required()
    .test({
      test: (value) => {
        if (value) {
          const phoneNumber = parsePhoneNumber(value);

          if (phoneNumber) {
            if (phoneNumber.country !== "VN") {
              return false;
            }
            if (isValidPhoneNumber(phoneNumber.number)) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      message: "form.validate.phone_number",
      name: "validate",
    }),
  body: string().required(),
});

export const defaultValues = {
  name: "",
  email: "",
  phone_number: undefined,
  body: "",
};
