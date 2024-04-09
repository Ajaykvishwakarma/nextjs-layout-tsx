import React from 'react';
import { Stack, CircularProgress } from "@mui/material";


function CircularLoading() {
    return (
        <Stack>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: "#589B87"
                }}
                thickness={3}
                size={100}
            />
        </Stack>
    )
}

export default CircularLoading