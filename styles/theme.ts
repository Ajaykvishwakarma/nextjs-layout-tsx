import { createTheme, tooltipClasses } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#131A22",
      dark: "#232f3e",
      light: "#37475A",
    },
    secondary: {
      main: "#fafafa",
      light: "#ccc",
    },
    error: {
      main: "#f02711",
      dark: "#d32f2f",
      light: "#c62828",
    },
  },
  typography: {
    h1: {
      fontSize: "22px",
      fontWeight: 800,
      color: "var(--text-color-0)",
    },
    h2: {
      fontSize: "15px",
      fontWeight: 700,
      color: "var(--text-color-0)",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--text-color-1)",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
      color: "var(--text-color-0)",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--text-color-1)",
    },
    h6: {
      fontSize: "12px",
      fontWeight: 500,
      color: "var(--text-color-1)",
    },
    numbersCount: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "21.6825px",
      lineHeight: "37px",
      letterSpacing: "-0.005em",
      color: "var(--text-color-1)",
    },
    h10: {
      fontSize: "10px",
      fontWeight: 400,
      // color: "var(--text-color-2)",
    },
    body1: {
      fontSize: "14px",
      color: "var(--text-color-1)",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      color: "var(--text-color-1)",
      fontWeight: 700,
    },
    iconsBgColor: {
      backgroundColor: "#fec629",
      borderRadius: "30px",
    },
    subtitle1: {
      fontSize: "13px",
      color: "var(--text-color-1)",
    },
    subtitle2: {
      fontSize: "12px",
      color: "var(--text-color-1)",
      fontWeight: 500,
    },
    textBgColor: {
      backgroundColor: "var(--bg-color)",
      borderRadius: "10px",
      padding: "8px",
    },
  },
  components: {
    MUIDataTable: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    },
                    
    // MuiAutocomplete: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "var(--paper-color)",
    //       outline: "none",
    //       fontSize: "13px",
    //       fontWeight: 500,
    //       color: "var(--text-color-1)",
    //       height: "38px",
    //       borderRadius: "6px",
    //       "&:before": {
    //         content: "none",
    //       },
    //       "&:after": {
    //         content: "none",
    //       },
    //       '& .MuiOutlinedInput-root': {
    //         padding: '0px',
    //         paddingLeft: "15px",
    //         "&::placeholder": {
    //           color: "var(--text-color-2)",
    //         },
    //         '& fieldset': {
    //           border: "none",
    //         },
    //         '&:hover fieldset': {
    //           border: "none",
    //         },
    //         '&.Mui-focused fieldset': {
    //           border: "none",
    //         },
    //       },
    //     },
    //   },
    // },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--paper-color)",
          border: "1px solid var(--border-color-1)",
          outline: "none",
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--text-color-1)",
          height: "38px",
          padding: "3px 0 3px",
          borderRadius: "6px",
          "&:before": {
            content: "none",
          },
          "&:after": {
            content: "none",
          },
        },
        input: {
          paddingLeft: "15px",
          "&::placeholder": {
            color: "var(--text-color-2)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          color: "var(--text-color-1)",
          marginBottom: "2px",
          fontWeight: 500,
        },
        asterisk: {
          color: "#f02711",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "rgba(68, 68, 68, 0.5)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "solid" && {
            backgroundColor: theme.palette.secondary.main,
            // border: '1px solid var(--border-color-1)',
            boxShadow: `1px 1px ${theme.palette.secondary.light}`,
            transition: theme.transitions.create(["border-color"]),
            borderRadius: "6px",
            "&:hover": {
              borderColor: "var(--pop-color)",
            },
          }),
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "solid" && {
            backgroundColor: "var(error-color)",
          }),
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: "6px",
          color: "#000",
        },
        containedPrimary: ({ theme }) => ({
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
        outlinedPrimary: ({ theme, sx }) => ({
          background: "transparent",
          color: "#000",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: theme.palette.primary.main,
          transition: theme.transitions.create(["border-color", "color"]),
          "&:hover": {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
          },
          ...sx,
        }),
        outlinedSecondary: {
          color: "var(--text-color-1)",
          borderColor: "var(--border-color-1)",
          backgroundColor: "var(--paper-color)",
        },
        text: {
          fontSize: "13px",
          color: "var(--text-color-1)",
          borderRadius: 0,
          minWidth: 0,
          minHeight: 0,
          height: "fit-content",
          width: "fit-content",
          padding: 0,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        sizeSmall: {
          fontSize: "12px",
          height: "32px",
          paddingLeft: "20px",
          paddingRight: "20px",
        },
        sizeMedium: {
          fontSize: "18px",
          height: "40px",
        },
        sizeLarge: {
          fontSize: "16px",
        },
        iconSizeSmall: {
          width: "13px",
          height: "auto",
          marginRight: "4px",
        },
        iconSizeMedium: {
          width: "15px",
          height: "auto",
        },
        iconSizeLarge: {
          width: "15px",
          height: "auto",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--paper-color)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 700,
          borderBottom: "1px solid var(--secondary-border-color)",
          borderTop: "1px solid var(--secondary-border-color)",
          color: "var(--primary-font-color)",
          paddingLeft: "10px",
          paddingRight: "10px",
          justifyContent: "center",
        },
        sizeMedium: {
          padding: "13px 16px 13px 16px",
        },
        head: {
          backgroundColor: "var(--table-header-color)",
          fontSize: "12px",
          color: "var(--primary-font-color)",
          fontWeight: 900,
        },
      },
    },
  },
});

export default theme;
