import { CancelOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import MyModal from "./components/Modal";

export default function ConfirmationModal({
  open,
  handleClose,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) {
  return (
    <MyModal
      open={open}
      handleClose={handleClose}
      size="{''}medium"
      sx={{ width: "400px", height: "fit-content" }}
    >
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "40px 40px" }}
      >
        <CancelOutlined
          sx={{ fontSize: "40px", color: "var(--error-color)" }}
        />
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {message}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              onCancel();
              handleClose();
            }}
          >
            {cancelText || "Cancel"}
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              onConfirm();
              handleClose();
            }}
          >
            {confirmText || "Yes"}
          </Button>
        </Stack>
      </Stack>
    </MyModal>
  );
}
