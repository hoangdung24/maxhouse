import { FormControl, FormHelperText, FormLabel, Input } from "@mui/material";
import { forwardRef } from "react";

const TextInput = forwardRef(
  (
    { erroYup, placeholder, text, name, onBlur, onChange, rows, ...props },
    ref
  ) => {
    return (
      <FormControl
        {...props}
        fullWidth={true}
        error={true}
        sx={{
          textAlign: "left",
          position: "relative",
          mb: "2rem",
          ["& .MuiInput-input"]: {
            p: "10px",
          },
          ":last-child": { mb: 0 },
        }}
      >
        <FormLabel>{text}</FormLabel>

        <Input
          rows={rows}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          multiline={true}
          aria-describedby="component-error-text"
        />

        <FormHelperText
          sx={{ position: "absolute", bottom: "-20px", right: 0 }}
          id="component-error-text"
        >
          {erroYup}
        </FormHelperText>
      </FormControl>
    );
  }
);

export default TextInput;

const FormInput = ({ label, FormControlProps, InputLabelProps, ...props }) => {
  return (
    <FormControl fullWidth {...FormControlProps} {...props}>
      <FormLabel>{label}</FormLabel>
      <Input {...InputLabelProps} />
      <FormHelperText children="Form Helper Text" />
    </FormControl>
  );
};
