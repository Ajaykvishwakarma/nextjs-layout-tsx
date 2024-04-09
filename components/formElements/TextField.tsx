import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import React from "react";

export default function TextField({
  required,
  label,
  sx,
  error,
  helperText,
  useFormRef,
  ...rest
}:any) {

  return (
    <Box>
      {/**
       *
       *
       * input field label if any
       *
       */}
      {label ? <InputLabel required={required} sx={{ height: "fit-content", borderColor: error ? "var(--error-color)" : null }}>{label}</InputLabel> : null}

      {/**
       *
       *
       * input field
       *
       */}
      <Input
        fullWidth
        {...rest}
        {...useFormRef}
        sx={[
          {
            backgroundColor: "var(--paper-color)",
            border: "1px solid #c1c1c1"
          },
          sx,
          error
            ? {
              borderColor: "var(--error-color)",
            }
            : null,
        ]}
      />

      {/**
       *
       *
       * error message if any
       *
       */}
      {error ? (
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "var(--error-color)",
          }}
        >
          {helperText}
        </Typography>
      ) : null}
    </Box>
  );
}
