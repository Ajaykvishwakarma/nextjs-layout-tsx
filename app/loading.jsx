

import CircularLoading from "../components/layouts/Loadings/CircularLoading";
import { Grid } from "@mui/material";

export default function NotFound() {
    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <CircularLoading />
            </Grid>
        </Grid>
    )
}