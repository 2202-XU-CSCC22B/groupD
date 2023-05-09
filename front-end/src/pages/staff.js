import {Button, Container, Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PageLayout from "@modules/components/layouts/PageLayout";

export default function Sales(){
    return(
        <DashboardLayout>
            <Head>
                <title>Staff!</title>
            </Head>
            <PageLayout>
                <Container sx={{display: "flex", flexDirection: "column"}}>
                    <Typography> Staff here!</Typography>
                    <Button variant="contained">Click to add staff</Button>
                    <Button variant="contained">Click to delete staff</Button>
                    <Button variant="contained">Click to view all staff</Button>
                </Container>
            </PageLayout>

        </DashboardLayout>

    )
}