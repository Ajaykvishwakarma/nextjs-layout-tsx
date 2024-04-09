import SignupFormSection from "@/containers/auth-page/signup-page/form-section";
import React, { FC } from "react";
import { Grid, Stack, Typography } from "@mui/material";

interface SignupPageProps { }

const SignupPage: FC<SignupPageProps> = ({ }) => {
  return (
    <React.Fragment>
      <Grid container
        sx={{
          background: "linear-gradient(120deg,rgba(250, 204, 21, 0.08), #ffffff 75%, rgba(219, 248, 231, 0.48))",
          minHeight: "100vh",
          margin: "auto",
          // paddingLeft: { xs: "40px", sm: "40px", md: "80px", lg: "80px" },
          paddingLeft: "5%",
          paddingRight: "5%"

        }}
      >
        <Grid item xs={12} sm={12}>
          <SignupFormSection />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SignupPage;
