import React, { useRef, useState, useEffect } from 'react';
import { Grid, Stack, Typography, Box, Divider, Button, InputAdornment, CircularProgress, IconButton, FormControlLabel, Radio } from "@mui/material";
import TextField from '../../../components/formElements/TextField';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    getUserByToken,
    getUserWithToken,
    login,
} from "../../../helpers/dataFetcher/profile/profile";
import { useDispatch } from "react-redux";
import { forgetPassword } from '../../../helpers/dataFetcher/auth';
import { updateUserAccount } from '../../../pages/Accounts/accountSlice';

function ForgetPasswordAuthForm() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        getValues,
        formState: { errors },
    } = useForm();


    const loginFunc = async data => {
        setLoginStatus(true);
        const { status, data: loginObj } = await forgetPassword(data?.email);
        if ([200, 201]?.includes(status)) {
            setError(false);
            toast.success(loginObj?.data);
        }
        if (status === 422) {
            setError(true);
            toast.error(loginObj?.data ?? "Something went wrong");
        }
        if (status === 400) {
            setError(true);
            toast.error(loginObj?.data ?? "Something went wrong");
        }
        setLoginStatus(false);
        return;
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
                            >Change Password</Typography>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    textAlign: "center",
                                    color: "#737373"
                                }}
                            >Change password as Job Seeker</Typography>
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
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email (i.e: example@example.xyz)"
                                        autoFocus
                                        error={errors?.email?.type === "required" ? true : false}
                                        useFormRef={{ ...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }) }}
                                        helperText={
                                            errors?.email?.type === "required" ? "Email is required" : errors?.email?.type === "pattern" ? "Invalid value" : null
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

export default ForgetPasswordAuthForm