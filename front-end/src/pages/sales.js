import {Button, Container, Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PageLayout from "@modules/components/layouts/PageLayout";
import SalesContent from "@modules/components/sales/SalesContent";

export default function Sales(){
    return(
        <DashboardLayout>
            <Head>
                <title>Sales</title>
            </Head>
            {/*<PageLayout>*/}
            {/*    <Container sx={{display: "flex", flexDirection: "column"}}>*/}
            {/*        <Typography> Sales here here!</Typography>*/}
            {/*        <Button variant="contained">Click to add a transaction!</Button>*/}
            {/*        <Button variant="contained">Click to add view all transactions</Button>*/}
            {/*    </Container>*/}
            {/*</PageLayout>*/}
            <SalesContent/>

        </DashboardLayout>

    )
}