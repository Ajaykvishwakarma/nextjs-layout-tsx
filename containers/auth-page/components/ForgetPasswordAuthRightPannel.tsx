import React, { useRef } from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import ForgetPasswordAuthForm from './ForgetPasswordAuthForm';
 

function ForgetPasswordAuthRightPannel() {


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
                    <ForgetPasswordAuthForm />
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default ForgetPasswordAuthRightPannel