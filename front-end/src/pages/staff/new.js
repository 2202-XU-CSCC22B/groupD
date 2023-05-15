import Head from "next/head";
import GoBackButton from "@modules/components/GoBackButton";
import {Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";

export default function NewStaff(){
    return (
        <DashboardLayout>
            <Head>
                <title>New Staff</title>
            </Head>
            <GoBackButton link={"/staff"}/>
            <Typography>New Staff</Typography>
        </DashboardLayout>
    )
}