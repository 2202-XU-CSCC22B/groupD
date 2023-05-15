import Head from "next/head";
import GoBackButton from "@modules/components/GoBackButton";
import {Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";

export default function AllStaff(){
    return (
        <DashboardLayout>
            <Head>
                <title>All Staff</title>
            </Head>
            <GoBackButton link={"/staff"}/>
            <Typography>All Staff</Typography>
        </DashboardLayout>
    )
}