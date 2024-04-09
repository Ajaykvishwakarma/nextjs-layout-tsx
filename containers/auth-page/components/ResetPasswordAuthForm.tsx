import React, { useRef, useState, useEffect } from 'react';
import { Grid, Stack, Typography, Box, Divider, Button, InputAdornment, CircularProgress, IconButton, FormControlLabel, Radio } from "@mui/material";
import TextField from '../../../components/formElements/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { resetPassword } from '../../../helpers/dataFetcher/auth';
import { updateUserAccount } from '../../../pages/Accounts/accountSlice';

function ResetPasswordAuthForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const resetToken = searchParams.get("token");

    if (!resetToken || resetToken === "") {
        toast.error("Invalid token");
        navigate("/forget-password")
    }

    const {
        register,
        handleSubmit,
        setError,
        setValue,
        watch,
        getValues,
        formState: { errors },
    } = useForm();


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };


    const loginFunc = async data => {
        setLoginStatus(true);
        const { status, data: loginObj } = await resetPassword(
            { password: data?.password },
            searchParams?.get("token")
        );
        if([200, 201].includes(status)) {
            toast.success(loginObj?.data ?? "Password Reset Successfully");
            setLoginStatus(false);
            navigate("/login");
        }
        if ([400, 401].includes(status)) {
            setLoginStatus(false);
            toast.error(loginObj?.data ?? "Something went wrong");
        }
    };


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
                <form onSubmit={handleSubmit(loginFunc)}>
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
                            >Reset your password</Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    textAlign: "center",
                                    color: "#737373"
                                }}
                            >Enter your new password and confirm it</Typography>
                        </Stack>
                        <Stack
                            direction="column"
                            spacing={2}
                        >
                            <Stack
                                direction="column"
                                spacing={1.5}
                            >
                                <Box>
                                    <TextField
                                        id="password"
                                        name="password"
                                        type={showNewPassword ? "text" : "password"}
                                        placeholder="New password"
                                        useFormRef={{
                                            ...register("password", {
                                                required: true,
                                                required: "New password is required",
                                                minLength: {
                                                    value: 5,
                                                    message: "New password must be at least 5 characters",
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message: "New password must not exceed 15 characters",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                                                    message: "New password must contain at least one capital letter, one numeric, and one special character",
                                                },
                                            })
                                        }}
                                        error={Boolean(errors.password)}
                                        helperText={
                                            errors.password
                                                ? errors.password.message
                                                : null
                                        }
                                        endAdornment={
                                            <InputAdornment position="end"
                                                sx={{
                                                    paddingRight: "10px"
                                                }}
                                            >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowNewPassword}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    {showNewPassword ? (
                                                        <VisibilityOff fontSize="inherit" />
                                                    ) : (
                                                        <Visibility fontSize="inherit" />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        id="cpassword"
                                        name="cpassword"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm password"
                                        error={errors?.cpassword?.type === "required" || errors?.cpassword?.type === "validate" ? true : false}
                                        useFormRef={{ ...register("cpassword", { required: true, validate: (value) => value !== "" ? value === watch("password") : false }) }}
                                        helperText={
                                            errors?.cpassword?.type === "required" ? "Confirm Password is required" : "New Password and Confirm Password should match"
                                        }
                                        endAdornment={
                                            <InputAdornment position="end"
                                                sx={{
                                                    paddingRight: "10px"
                                                }}
                                            >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff fontSize="inherit" />
                                                    ) : (
                                                        <Visibility fontSize="inherit" />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
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
                                    padding: "7px"
                                }}
                                disabled={loginStatus}
                            >
                                {loginStatus ? <CircularProgress color="success" size={25} /> : (
                                    <span
                                        style={{
                                            textTransform: "none",
                                            fontWeight: "600",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Submit
                                    </span>
                                )}
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
                                Go back to login?
                                <Link to="../login"
                                    style={{
                                        fontWeight: "700",
                                        color: "#000"
                                    }}
                                > Sign In
                                </Link>
                            </Typography>

                        </Stack>
                    </Stack>
                </form>
            </Box>
        </React.Fragment>
    )
}

export default ResetPasswordAuthForm