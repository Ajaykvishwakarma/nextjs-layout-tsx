'use client'

import React from 'react';
import { Grid, Stack, Typography, Box, Divider } from "@mui/material";
import Link from 'next/link'
import { useRouter } from 'next/router'
import XIcon from '@mui/icons-material/X';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    footerPolicyLinks: {
        color: "#000",
        fontSize: "12px",
        fontWeight: "500",
    },
    footerSocialIcon: {
        background: "#00000014",
        borderRadius: "5px",
        height: "35px",
        width: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

});


export default function GlobalFooter() {

    // const navigate = useRouter();

    const classes = useStyles();

    return (
        <Grid container sx={{ paddingTop: "50px", paddingBottom: "50px", width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12}>
                <Box
                    sx={{
                        fontSize: "180px",
                        fontWeight: "500",

                        textAlign: "center",
                        "@media (max-width: 1200px)": {
                            fontSize: "100px",
                        },
                        "@media (max-width: 900px)": {
                            fontSize: "50px",
                        },
                        "@media (max-width: 600px)": {
                            fontSize: "40px",
                        },

                    }}
                >
                    {/* Cape-Markt */}
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} mb={2}
                sx={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "30px",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600"
                            }}
                        >
                            Get Started
                        </Typography>
                        <Stack
                            direction="column"
                            spacing={1}
                            mt={1}
                        >
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Login
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Join Now
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600"
                            }}
                        >
                            Company Login
                        </Typography>
                        <Stack
                            direction="column"
                            spacing={1}
                            mt={1}
                        >
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Login
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Join Now
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600"
                            }}
                        >
                            Account Manager Login
                        </Typography>
                        <Stack
                            direction="column"
                            spacing={1}
                            mt={1}
                        >
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Login
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Join Now
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600"
                            }}
                        >
                            Technical Partner Login
                        </Typography>
                        <Stack
                            direction="column"
                            spacing={1}
                            mt={1}
                        >
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Login
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Join Now
                            </Link>
                        </Stack>
                    </Box>
                    <Box>

                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600"
                            }}
                        >
                            Trending Jobs
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "10px",
                                "@media (max-width: 900px)": {
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "10px",
                                },
                            }}
                            mt={1}
                        >
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                React Developer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                UI Designer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Angular Developer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Flutter Developer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Full Stack Developer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                UI Developer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Human Resources
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                UX Designer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Product Manager
                            </Link>

                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Design Director
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                UX/UI Designer
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Product Designer
                            </Link>
                        </Box>
                    </Box>
                    <Box>

                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: "600"
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Stack
                            direction="column"
                            justifyContent="flex-end"
                            spacing={1}
                            mt={1}
                        >
                            <Link
                                href="/"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                href="../blogs"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                               Blogs
                            </Link>
                            <Link
                                href="#"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Refer
                            </Link>
                            <Link
                                href="../company"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Companies
                            </Link>
                            <Link
                                href="../about-us"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                About
                            </Link>
                            <Link
                                href="../careers"
                                style={{
                                    color: "#43595E",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                Careers
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Divider flexItem />
                <Grid container mt={2}
                    sx={{
                        "@media (max-width: 900px)": {
                            flexDirection: "column-reverse"
                        },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={8}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{
                                height: "100%",
                                "@media (max-width: 900px)": {
                                    justifyContent: "center",
                                },
                            }}
                        >
                            <Link
                                href="#"
                                className={classes?.footerPolicyLinks}
                            >
                                Terms
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className={classes?.footerPolicyLinks}
                            >
                                Privacy
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerPolicyLinks}
                            >
                                Disclosures
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerPolicyLinks}
                            >
                                Accessibility
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerPolicyLinks}
                            >
                                CA Notice at Collection
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerPolicyLinks}
                            >
                                Cookie Settings
                            </Link>

                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            spacing={3}
                            sx={{
                                "@media (max-width: 900px)": {
                                    justifyContent: "center",
                                    marginBottom: "20px"
                                },
                            }}
                        >
                            
                            <Link
                                href="#"
                                className={classes?.footerSocialIcon}
                            >
                                <XIcon />
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerSocialIcon}
                            >
                                <XIcon />
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerSocialIcon}
                            >
                                <XIcon />
                            </Link>
                            <Link
                                href="#"
                                className={classes?.footerSocialIcon}
                            >
                                <XIcon />
                            </Link>
                        </Stack>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
