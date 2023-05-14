import Box from "@mui/material/Box";
import {Copyright} from "@mui/icons-material";
import * as React from "react";

export default function DashboardPageLayout({children}){
    return(
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                width: '100vw',
                p: '1rem',
            }}
        >
            {children}

            <Copyright sx={{ pt: 4 }} />
        </Box>
    )
}