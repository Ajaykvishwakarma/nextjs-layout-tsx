import React, { useRef, useState, useEffect, useReducer } from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Divider,
  Button,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Radio,
  CircularProgress,
  TextField
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
 

function RegisterAuthForm() {
  

  return (
    <React.Fragment>
      <Box
        sx={{
          minWidth: "300px",
          width: "60%",
          "@media (max-width:1200px)": {
            width: "70%",
          },
          "@media (max-width: 900px)": {
            width: "90%",
          },
          "@media (max-width: 600px)": {
            width: "95%",
          },
        }}
      >
        <form>
          <Stack
            sx={{
              width: "100%",
              gap: "35px",
            }}
          >
            <Stack>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                Sign Up to Joinee
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  textAlign: "center",
                  color: "#737373",
                }}
              >
                Sign up as Job Seeker
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
              >
                <Button
                  component="label"
                  variant="text"
                  sx={{
                    border: "1px solid #DFE1E6",
                    color: "#000",
                    borderRadius: "8px",
                    width: "50%",
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Sign up with Google
                  </Box>
                </Button>
                <Button
                  component="label"
                  variant="text"
                  sx={{
                    border: "1px solid #DFE1E6",
                    color: "#000",
                    borderRadius: "8px",
                    width: "50%",
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Sign up with Apple
                  </Box>
                </Button>
              </Stack>
              <Stack>
                <Divider sx={{ fontSize: "11px" }}>Or with email</Divider>
              </Stack>
              <Stack direction="column" spacing={1.5}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Box
                    sx={{
                      width: "50%",
                    }}
                  >
                    <TextField
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      autoFocus
                      
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                    }}
                  >
                    <TextField
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      
                    />
                  </Box>
                </Stack>
                <Box>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email (i.e: example@example.xyz)"
                    
                  />
                </Box>
                <Box>
                  <TextField
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack>
              <Button
                variant="outlined"
                type="submit"
                style={{
                  fontSize: "16px",
                  border: "0px",
                  color: "#fff",
                  background: "#044B36",
                  borderRadius: "50px",
                  padding: "7px",
                }}
              >
                Sign Up
              </Button>
            </Stack>
            {/* <Stack>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#737373",
                  textAlign: "center",
                }}
              >
                Already have an account?
                <Link
                  to="../login"
                  style={{
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  {" "}
                  Sign In
                </Link>
              </Typography>
            </Stack> */}
          </Stack>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default RegisterAuthForm;
