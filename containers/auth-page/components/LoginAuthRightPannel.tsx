import React, { useRef } from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import LoginAuthForm from './LoginAuthForm';
 

function LoginAuthRightPannel() {


    return (
        <React.Fragment>
            <Grid container
                sx={{
                    minHeight: "100%",
                    minWidth: "100%",
                    margin: "auto",
                    padding: "5px",
                }}
            >
                {/*Auth Right Main */}
                <Grid item xs={12} sm={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <LoginAuthForm />
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default LoginAuthRightPannel