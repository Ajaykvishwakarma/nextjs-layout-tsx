import React, { useRef, useState, useEffect } from 'react';
import { Grid, Stack, Typography, Box, Divider, Button, InputAdornment, TextField, CircularProgress, IconButton, FormControlLabel, Radio } from "@mui/material";

function LoginAuthForm() {
    

    return (
        <React.Fragment>
            <Box
                sx={{
                    minWidth: "300px",
                    width: "60%",
                    '@media (max-width:1200px)': {
                        width: "70%",
                    },
                    '@media (max-width: 900px)': {
                        width: "90%",
                    },
                    '@media (max-width: 600px)': {
                        width: "95%",
                    },
                }}
            >
                <form >
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
                            >Sign in to Joinee</Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    textAlign: "center",
                                    color: "#737373"
                                }}
                            >Sign in as Job Seeker</Typography>
                        </Stack>
                        <Stack
                            direction="column"
                            spacing={2}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={3}
                            >
                                <Button component="label" variant="text" 
                                    sx={{
                                        border: "1px solid #DFE1E6",
                                        color: "#000",
                                        borderRadius: "8px",
                                        width: "50%"
                                    }}
                                >
                                    <Box sx={{
                                        textTransform: "none",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                    }}>
                                        Sign In with Google
                                    </Box>
                                </Button>
                                <Button component="label" variant="text" 
                                    sx={{
                                        border: "1px solid #DFE1E6",
                                        color: "#000",
                                        borderRadius: "8px",
                                        width: "50%"
                                    }}
                                >
                                    <Box sx={{
                                        textTransform: "none",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                    }}>
                                        Sign In with Apple
                                    </Box>
                                </Button>
                            </Stack>
                            <Stack>
                                <Divider sx={{ fontSize: "11px" }}>Or with email</Divider>
                            </Stack>
                            <Stack
                                direction="column"
                                spacing={1.5}
                            >
                                <Box>
                                    <TextField
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email (i.e: example@example.xyz)"
                                        autoFocus
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        id="password"
                                        name="password"
                                    />
                                </Box>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={3}
                                >
                                    <Box>
                                        <FormControlLabel
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 17,
                                                    color: "var(--app-button-color1)"
                                                },
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize: "13px",
                                                    fontWeight: "700"
                                                }

                                            }}
                                            control={
                                                <Radio />
                                            }
                                            label="Remember me"
                                        />
                                    </Box>
                                    <Box>
                                        {/* <Link to="../forget-password">
                                            <span
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "700",
                                                    color: "#000"
                                                }}
                                            >Forgot Password?</span>
                                        </Link> */}
                                    </Box>
                                </Stack>
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
                                    padding: "7px"
                                }}
                            >
                               Sign In
                            </Button>
                        </Stack>
                        <Stack>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "400",
                                    color: "#737373",
                                    textAlign: "center"
                                }}
                            >
                                Don’t have an account?
                            </Typography>

                        </Stack>
                    </Stack>
                </form>
            </Box>
        </React.Fragment>
    )
}

export default LoginAuthForm