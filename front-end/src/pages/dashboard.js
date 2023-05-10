import {Container, Typography} from "@mui/material";
import Link from "next/link";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";

export default function dashboard(){
    return(
        <DashboardLayout>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Container sx={{display: "flex", flexDirection: "column"}}>
                <Typography> Dashboard here!!!</Typography>
                <Link href={"/members"}> <Typography variant={"h3"}> Members</Typography></Link>
                <Link href={"/sales"}> <Typography variant={"h3"}> Sales</Typography></Link>
                <Link href={"/staff"}> <Typography variant={"h3"}> Staff</Typography></Link>
            </Container>
        </DashboardLayout>

    )
}