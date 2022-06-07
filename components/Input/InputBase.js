import { forwardRef } from "react";
import { FormControl, FormHelperText, FormLabel, Input } from "@mui/material";

import { useIntl } from "react-intl";

import get from "lodash/get";

const InputBase = forwardRef(
  (
    { FormControlProps, FormLabelProps, InputProps, FormHelperTextProps, ...props },
    ref
  ) => {
    const { messages } = useIntl();
    const { errorType = {}, ...restFormHelperTextProps } = FormHelperTextProps;

    const type = get(errorType, "type");
    const keyMessage = get(errorType, "message");
    const name = get(errorType, "ref.name");
    const messageId = `form.${type}.${name}`;

    let message = "";

    if (keyMessage) {
      message = messages?.[keyMessage]?.[0]?.["value"];
    } else {
      message = messages?.[messageId]?.[0]?.["value"];
    }

    return (
      <FormControl
        fullWidth={true}
        sx={{
          marginBottom: 2,
        }}
        error={!!type}
        {...FormControlProps}
      >
        <FormLabel {...FormLabelProps} />
        <Input inputRef={ref} {...props} {...InputProps} />

        <FormHelperText {...restFormHelperTextProps} children={message || " "} />
      </FormControl>
    );
  }
);

export default InputBase;
