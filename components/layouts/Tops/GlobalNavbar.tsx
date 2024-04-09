'use client'

import React, { useState, useEffect, FC } from "react";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import {
    MenuOutlined,
    NotificationsActive
} from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { Grid, Box, Stack, IconButton } from "@mui/material";
import GlobalSidebar from "./GlobalSidebar";
import Image from 'next/image';
import FullLogoLight from "../../../public/assets/images/common/FullLogoLight.png"

interface GlobalNavbar { }

const GlobalNavbar: FC<GlobalNavbar> = () => {

    const [drawer, setDrawer] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    let token;


    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            token = localStorage.getItem("token");
        }
    }, []);

    /**
     * Redux dispatch
     */
    const dispatch = useDispatch();

    /**
     * Toggle Drawer
     */
    const toggleDrawer = (open: boolean) => {
        setDrawer(open);
    };
    



    return (
        <>
            <Grid container
                sx={{
                    // background: ({ scrollnav }) => (scrollnav ? "white" : location === "/" ? "#cde2e7" : 'white'),
                    // boxShadow: ({ changevalue }) => changevalue >= 60 ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" : "none",

                    background: "rgba(255, 255, 255, 0.14)",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                    backdropFilter: "blur(5px)",
                    webkitBackdropFilter: "blur(5px)",
                    // border: "1px solid rgba(255, 255, 255, 0.3)",
                    height: "70px",
                    display: "flex",
                    margin: "auto",
                    marginTop: "0px",
                    paddingTop: "0px",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: "20px",
                    fontWeight: "bold",
                    position: "sticky",
                    top: "0",
                    zIndex: "1000",
                }}
            >
                <Grid item xs={4} sm={2.2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            "@media (max-width: 800px)": {
                                marginLeft: "20px",
                            },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}
                    >
                        <Link href="/">
                            <Image
                                src={FullLogoLight}
                                alt="Logo"
                                width={100}
                                height={undefined}

                            />
                        </Link>
                    </Box>

                </Grid>

                <Grid item xs={8} sm={9.8} >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        sx={{
                            height: "100%"
                        }}
                        spacing={2}
                        pr={3}
                    >
                        <Box
                            sx={{
                                height: "fit-content",
                                color: "black",
                                "@media screen and (max-width: 1050px)": {
                                    display: "none"
                                }
                            }}
                        >
                            <Link href="../jobs-list"
                                style={{
                                    color: "black",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "15px",
                                    }}
                                >Discover Jobs</span>
                            </Link>
                        </Box>
                        <Box
                        sx={{
                            height: "fit-content",
                            color: "black",
                            "@media screen and (max-width: 1050px)": {
                                display: "none"
                            }
                        }}
                    >
                        <Link href="../about-us"
                            style={{
                                color: "black",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "15px",
                                }}
                            >About us</span>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            height: "fit-content",
                            color: "black",
                            "@media screen and (max-width: 1050px)": {
                                display: "none"
                            }
                        }}
                    >
                        <Link href="../careers"
                            style={{
                                color: "black",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "15px",
                                }}
                            >Careers</span>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            height: "fit-content",
                            color: "black",
                            "@media screen and (max-width: 1050px)": {
                                display: "none"
                            }
                        }}
                    >
                        <Link href="../blogs"
                            style={{
                                color: "black",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "15px",
                                }}
                            >Blogs</span>
                        </Link>
                    </Box>  
                        {/* Authorised Menus */}
                        {token && (
                            <>
                                {/* <Box
                                sx={{
                                    height: "fit-content",
                                    color: "black",
                                    "@media screen and (max-width: 1050px)": {
                                        display: "none"
                                    }
                                }}
                            >
                                <Link className="nav_items_link" href="../jobs-list">
                                    <span className="header_items">Discover Jobs</span>
                                </Link>
                            </Box> */}
                            </>
                        )}


                        {/* Global action menus */}

                        <Box sx={{
                            height: "fit-content",
                            "@media screen and (max-width: 1050px)": {
                                display: "none"
                            }
                        }}>
                            <Link href="/company"
                                style={{
                                    border: "1px solid black",
                                    color: "black",
                                    padding: "6px 15px",
                                    fontSize: "15px",
                                    borderRadius: "50px"
                                }}
                            >
                                Company
                            </Link>
                        </Box>

                        {/* Private Action menus */}
                        {token ? (
                            <>
                                <Box sx={{ height: "fit-content" }}>
                                    <IconButton onClick={() => toggleDrawer(true)}>
                                        <NotificationsActive fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box sx={{ height: "fit-content" }}>
                                    <IconButton onClick={() => toggleDrawer(true)}>
                                        <NotificationsActive fontSize="medium" />
                                    </IconButton>
                                </Box>
                            </>
                        )}
                        <Box
                            sx={{
                                display: "none",
                                "@media screen and (max-width: 1050px)": {
                                    display: "block",
                                    top: "0",
                                    cursor: "pointer",
                                    margin: "0",
                                }
                            }}
                        >
                            <IconButton onClick={() => toggleDrawer(true)}>
                                <MenuOutlined fontSize="medium" />
                            </IconButton>
                        </Box>
                        <Drawer
                            anchor={"left"}
                            open={drawer}
                            onClose={() => {
                                    setDrawer(false);
                            }}
                            sx={{
                                ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
                                    background: "#cde2e7",
                                },
                            }}
                        >
                            <GlobalSidebar anchor="left" toggleDrawer={toggleDrawer} />
                        </Drawer>

                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default GlobalNavbar;