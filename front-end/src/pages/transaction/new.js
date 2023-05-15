import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import GoBackButton from "@modules/components/GoBackButton";
import {Typography} from "@mui/material";

export default function NewTransaction(){
    return (
        <DashboardLayout>
            <Head>
                <title>New Transactions</title>
            </Head>
            <GoBackButton link={"/transaction"}/>
            <Typography>New Transaction</Typography>
        </DashboardLayout>
    )
}