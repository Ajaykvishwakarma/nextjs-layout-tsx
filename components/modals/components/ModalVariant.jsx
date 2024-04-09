import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import React from "react";

export default function MyModalVariant({
  open,
  setOpen,
  children,
  title,
  subTitle,
  showCloseIcon,
  sx,
  toggle
}) {
  const handleClose = () => {
    if(toggle) {
      toggle()
    }
    setOpen(false);
  };

  return (
    <Modal disableScrollLock open={open} onClose={handleClose} sx={{}}>
      <Stack
        sx={[
          {
            backgroundColor: "var(--paper-color)",
            border: 0,
            outline: "none",
            overflow: "hidden",
            height: "100vh",
            width: "400px",
            position: "fixed",
            right: 0,
            top: 0,
            zIndex: 999,
          },
        ]}
      >
        {title ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={[
              {
                borderBottom: "1px solid var(--border-color-2)",
                backgroundColor: "var(--page-color)",
                width: "100%",
                height: "60px",
                padding: "0 20px",
              },
            ]}
          >
            <Stack>
              <Typography
                sx={[{ color: "var(--text-color-1)", fontSize: "18px" }]}
              >
                {title}
              </Typography>
              {subTitle ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text-color-2)",
                    opacity: "0.65",
                  }}
                >
                  {subTitle}
                </Typography>
              ) : null}
            </Stack>
            {showCloseIcon ? (
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </Stack>
        ) : null}

        <Box
          sx={[
            { padding: "20px 20px", width: "400px", overflowY: "scroll" },
            sx,
          ]}
        >
          {children}
        </Box>
      </Stack>
    </Modal>
  );
}

MyModalVariant.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showPrimaryAction: PropTypes.bool,
  closeButtonText: PropTypes.string,
  primaryActionText: PropTypes.string,
  sx: PropTypes.object,
  actions: PropTypes.array,
  subTitle: PropTypes.string,
  showPrimaryActionOnClick: PropTypes.func,
};

MyModalVariant.defaultProps = {
  title: null,
  showCloseIcon: false,
  sx: {},
  actions: null,
  subTitle: null,
  showPrimaryActionOnClick: () => {},
};
