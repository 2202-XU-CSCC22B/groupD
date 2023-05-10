import {Container, Typography} from "@mui/material";
import Link from "next/link";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import Head from "next/head";

export default function forgotPassword(){
    return (
        <ResponsiveAppBar>
            <Head>
                <title>Password Reset</title>
            </Head>
            <Container sx={{display: "flex", flexDirection: "column"}}>
                <Typography> Forgot Password here</Typography>
                <Link href={"/"}> <Typography variant={"h3"}> Go back to Landing Page!</Typography></Link>
            </Container>
        </ResponsiveAppBar>

    )
}