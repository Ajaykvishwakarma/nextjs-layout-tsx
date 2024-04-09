import {
  CheckCircleOutline,
  CloseOutlined,
  WarningOutlined,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "./toastSlice";

export function Toast() {
  const dispatch = useDispatch();
  const toastState = useSelector((state) => state.toast.toastState);
  const message = useSelector((state) => state.toast.message);
  const messageType = useSelector((state) => state.toast.type);

  setTimeout(function () {
    dispatch(hideToast());
  }, 5000);

  return (
    <AnimatePresence>
      {toastState && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: 0 }}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            borderLeft: "4px solid #fff",
            borderColor:
              messageType === "success"
                ? "var(--success-color)"
                : "var(--error-color)",
            padding: "15px",
            width: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px",
            backgroundColor: "var(--paper-color)",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            zIndex: 9999,
          }}
        >
          {messageType === "success" ? (
            <CheckCircleOutline sx={{ color: "var(--success-color)" }} />
          ) : (
            <WarningOutlined sx={{ color: "var(--error-color)" }} />
          )}
          <Typography variant="body1" sx={{ color: "#000" }}>
            {message}
          </Typography>
          <IconButton
            onClick={() => {
              dispatch(hideToast());
            }}
          >
            <CloseOutlined />
          </IconButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
