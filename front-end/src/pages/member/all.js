import {Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import MyCustomBreadCrumbs from "@modules/components/MyCustomBreadCrumbs";
import {memberActions} from "@modules/utils/config";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import Link from "next/link";
import GoBackButton from "@modules/components/GoBackButton";
import Head from "next/head";

export default function AllMembers(){
    return(
        <DashboardLayout>
            <Head>
                <title>All Members</title>
            </Head>
            <GoBackButton link={"/member"}/>
            <Typography>All members</Typography>
        </DashboardLayout>
    )
}