import { string, object, setLocale } from "yup";

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
  phone_number: string().required(),
  body: string().required(),
});

export const defaultValues = {
  name: undefined,
  email: undefined,
  phone_number: undefined,
  body: undefined,
};
