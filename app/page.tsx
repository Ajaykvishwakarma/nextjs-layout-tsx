import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import HeroSection from '@/containers/home-page/hero-section/HeroSection';
import CardSection from '@/containers/home-page/card-section/CardSection';

//Importing home-page compoent to this page for getting ("/") routes as making home page

export default function Home() {
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
          <HeroSection />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CardSection />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
