import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";

export default function MyModal({
  open,
  children,
  title,
  subTitle,
  showCloseIcon,
  size,
  sx,
  actions,
  handleClose,
}) {
  return (
    <Modal
      disableScrollLock
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={[
          {
            backgroundColor: "var(--paper-color)",
            border: 0,
            borderRadius: "6px",
            outline: "none",
            overflow: "hidden",
          },
          size === "fullWidth"
            ? {
                width: "100%",
                height: "100%",
                borderRadius: 0,
                backgroundColor: "var(--page-color)",
              }
            : null,
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
                backgroundColor: "var(--modal-header-color)",
              },
              size === "small"
                ? {
                    padding: "0 19px 0 19px",
                    height: "52px",
                  }
                : null,
              size === "medium"
                ? {
                    padding: "0 19px 0 19px",
                    height: "52px",
                  }
                : null,
              size === "large"
                ? {
                    padding: "0 20px 0 20px",
                    height: "52px",
                  }
                : null,
              size === "fullWidth"
                ? {
                    padding: "0 100px 0 100px",
                    height: "60px",
                  }
                : null,
            ]}
          >
            <Stack>
              <Typography
                sx={[
                  { color: "var(--text-color-1)" },
                  size === "small"
                    ? {
                        fontWeight: 900,
                        fontSize: "16px",
                      }
                    : null,
                  size === "medium"
                    ? {
                        fontWeight: 700,
                        fontSize: "16px",
                      }
                    : null,
                  size === "large"
                    ? {
                        fontWeight: 900,
                        fontSize: "16px",
                      }
                    : null,
                  size === "fullWidth"
                    ? {
                        fontWeight: 900,
                        fontSize: "20px",
                      }
                    : null,
                ]}
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
            {
              height: "100%",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
            size === "small" ? { padding: "15px 20px 15px 20px" } : null,
            size === "medium" ? { padding: "15px 20px 15px 20px" } : null,
            size === "large" ? { padding: "20px 25px 26px 25px" } : null,
            size === "fullWidth"
              ? { padding: "0 82px 115px 82px", height: "100%" }
              : null,
            sx,
          ]}
        >
          {children}
        </Box>

        {actions ? (
          <Stack
            direction="row"
            spacing={0.5}
            justifyContent="right"
            alignItems="center"
            sx={[
              {
                borderTop: "1px solid var(--border-color-2)",
                padding: "7px 25px 7px 25px",
                backgroundColor: "var(--modal-header-color)",
              },
              size === "fullWidth"
                ? {
                    position: "absolute",
                    bottom: 0,
                    padding: "7px 100px 7px 100px",
                  }
                : null,
            ]}
          >
            {actions.map((action, i) => {
              return <Box key={i}>{action}</Box>;
            })}
          </Stack>
        ) : null}
      </Box>
    </Modal>
  );
}

MyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showPrimaryAction: PropTypes.bool,
  closeButtonText: PropTypes.string,
  primaryActionText: PropTypes.string,
  size: PropTypes.string.isRequired,
  sx: PropTypes.object,
  actions: PropTypes.array,
  subTitle: PropTypes.string,
  showPrimaryActionOnClick: PropTypes.func,
};

MyModal.defaultProps = {
  title: null,
  showCloseIcon: false,
  sx: {},
  actions: null,
  subTitle: null,
  showPrimaryActionOnClick: () => {},
};
