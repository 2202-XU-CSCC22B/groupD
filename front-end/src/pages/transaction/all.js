import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import GoBackButton from "@modules/components/GoBackButton";
import {Typography} from "@mui/material";

export default function AllTransaction(){
    return (
        <DashboardLayout>
            <Head>
                <title>All Transactions</title>
            </Head>
            <GoBackButton link={"/transaction"}/>
            <Typography>All Transactions</Typography>
        </DashboardLayout>
    )
}