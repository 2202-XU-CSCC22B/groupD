import {Button, Container, Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PageLayout from "@modules/components/layouts/PageLayout";
import TransactionContent from "@modules/components/transactions/TransactionContent";

export default function Transaction(){
    return(
        <DashboardLayout>
            <Head>
                <title>Sales</title>
            </Head>
            {/*<PageLayout>*/}
            {/*    <Container sx={{display: "flex", flexDirection: "column"}}>*/}
            {/*        <Typography> Transaction here here!</Typography>*/}
            {/*        <Button variant="contained">Click to add a transaction!</Button>*/}
            {/*        <Button variant="contained">Click to add view all transactions</Button>*/}
            {/*    </Container>*/}
            {/*</PageLayout>*/}
            <TransactionContent/>

        </DashboardLayout>

    )
}