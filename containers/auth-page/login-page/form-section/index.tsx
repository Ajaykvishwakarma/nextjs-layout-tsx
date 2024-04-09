"use client"
import { Grid } from "@mui/material";
import React, { FC } from "react";
import LoginAuthRightPannel from '../../components/LoginAuthRightPannel';

interface LoginFormSectionProps {}

const LoginFormSection: FC<LoginFormSectionProps> = ({}) => {
  return (
    <React.Fragment>
    <Grid container
        sx={{
            minHeight: "100vh",
            margin: "auto",
        }}
    >
        {/* Auth Left Section */}
        <Grid item xs={12} sm={5.7}
            sx={{
                padding: "5px",
                "@media (max-width: 600px)": {
                    display: "none"
                },
            }}
        >
            {/* <AuthLeftPannel /> */}
        </Grid>

        {/* Auth Right Section */}
        <Grid item xs={12} sm={6.3} sx={{ padding: "5px" }}>
            <LoginAuthRightPannel />
        </Grid>
    </Grid>
</React.Fragment>
  );
};

export default LoginFormSection;
