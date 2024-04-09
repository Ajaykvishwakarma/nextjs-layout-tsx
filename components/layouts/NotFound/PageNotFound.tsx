import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import not_found from "../../../app/assets/images/not_found.svg";
import Image from 'next/image'
import Link from 'next/link'

function PageNotFound() {
    return (
        <React.Fragment>
            <Box style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Stack
                    sx={{
                        height: "100%",
                        gap: "10px"
                    }}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image
                        src={not_found}
                        alt="page not found"
                        width="400"
                        height={undefined}
                    />
                    <Typography textAlign="center">
                        Page Not Found
                    </Typography>
                    <Link href="/"
                        style={{
                            background: "0 0",
                            border: "2px solid",
                            borderRadius: "50px",
                            color: "#2294b5",
                            display: "inline-block",
                            fontSize: "14px",
                            fontWeight: "700",
                            marginTop: "30px",
                            padding: "10px 40px",
                            textDecoration: "none",
                            textTransform: "uppercase",
                            transition: "all .2s"
                        }}
                    >Return Home</Link>
                </Stack>
            </Box>
        </React.Fragment>
    );
}

export default PageNotFound;
