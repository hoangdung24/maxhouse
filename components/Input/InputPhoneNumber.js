import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

import InputBase from "./InputBase";

const InputPhoneNumber = ({
  control,
  name,
  FormControlProps,
  FormLabelProps,
  InputProps,
  FormHelperTextProps,
}) => {
  if (!control || !name) {
    return null;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <PhoneInput
            value={value}
            onChange={onChange}
            defaultCountry="VN"
            country="VN"
            inputComponent={InputBase}
            InputProps={InputProps}
            FormLabelProps={FormLabelProps}
            FormControlProps={FormControlProps}
            FormHelperTextProps={{
              ...FormHelperTextProps,
              ...(!!error && {
                errorType: error,
              }),
            }}
          />
        );
      }}
    />
  );
};

export default InputPhoneNumber;
