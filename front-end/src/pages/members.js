import {Button, Container, Typography} from "@mui/material";
import Link from "next/link";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PageLayout from "@modules/components/layouts/PageLayout";

export default function Members(){
    return(
        <DashboardLayout>
            <Head>
                <title>Members</title>
            </Head>
            <PageLayout>
                <Container sx={{display: "flex", flexDirection: "column"}}>
                    <Typography> Members here!</Typography>
                    <Button variant="contained">Click to add members!</Button>
                    <Button variant="contained">Click to add view all members!</Button>
                    <Button variant="contained">Click to add delete members!</Button>
                </Container>
            </PageLayout>

        </DashboardLayout>

    )
}