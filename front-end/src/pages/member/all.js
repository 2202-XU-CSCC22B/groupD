import {Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";

import GoBackButton from "@modules/components/GoBackButton";
import Head from "next/head";
import AllMembersContent from "@modules/components/members/new/AllMembersContent";

export default function AllMembers(){
    return(
        <DashboardLayout>
            <Head>
                <title>All Members</title>
            </Head>
            <GoBackButton link={"/member"}/>
            <AllMembersContent/>
        </DashboardLayout>
    )
}