import React, { useEffect } from 'react';
import Link from 'next/link'
import FullLogoLight from "../../../public/assets/images/common/FullLogoLight.png"
import { Grid, Box, Stack } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from 'next/image'

interface GlobalSidebarProps {
    anchor?: 'left' | 'right' | 'top' | 'bottom'; 
    toggleDrawer: any;
  }

function GlobalSidebar({ anchor, toggleDrawer }: GlobalSidebarProps) {
    let token;


    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            token = localStorage.getItem("token");
        }
    }, []);


    const routes = [
        {
            id: 1,
            name: "Dashoard",
            link: "/dashboard",
        },
        {
            id: 2,
            name: "Profile",
            link: "/profile",
        },
        {
            id: 3,
            name: "Referred Me",
            link: "/refered-jobs",
        },
        {
            id: 4,
            name: "Interviews",
            link: "/interviews",
        },
        {
            id: 5,
            name: "Applied Jobs",
            link: "/applied-jobs",
        },
        {
            id: 6,
            name: "Saved Jobs",
            link: "/my-savedjobs",
        },
        {
            id: 7,
            name: "Chats",
            link: "/demochat",
        },
        {
            id: 9,
            name: "Leadership board",
            link: "/leadership-board",
        },
        {
            id: 10,
            name: "My Earning",
            link: "/myearning",
        },
        {
            id: 11,
            name: "Settings",
            link: "/settings",
        },
        {
            id: 12,
            name: "Logout",
            link: "/logout",
        },
    ];
    const sidebarMain = [
        { id: 1, name: "Discover Jobs", link: "/jobs-list"},
    ];


    return (
        <Grid container
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                minHeight: "100vh",
                overflow: "auto",
                background: "#cde2e7",
            }}
        >
            <Grid item xs={12} sm={12}>
                <Box
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List style={{ background: "#cde2e7", minHeight: "fit-content" }}>
                        <Link href="/" className="d-flex">
                            <Image
                                src={FullLogoLight}
                                alt="Logo"
                                width={100}
                                height={undefined}

                            />
                        </Link>
                        {sidebarMain.map((text, index) => (
                            <ListItem key={text?.id} disablePadding>
                                <ListItemButton>
                                    <Link href={`${text.link}`} style={{ color: "#066a4c" }}>
                                        <ListItemText primary={text?.name} />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider />
                    </List>
                    {!token && (
                        <List
                            style={{ background: "#cde2e7", height: "fit-content", overflow: "auto" }}
                        >
                            {routes.map((text, index) => (
                                <ListItem key={text?.id} disablePadding>
                                    <ListItemButton>
                                        <Link href={`${text.link}`} style={{ color: "#066a4c" }}>
                                            <ListItemText primary={text?.name} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            </Grid>



        </Grid>
    )
}

export default GlobalSidebar;