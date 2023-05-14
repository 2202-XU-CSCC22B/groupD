import {Button, Container, Typography} from "@mui/material";
import Link from "next/link";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PageLayout from "@modules/components/layouts/PageLayout";
import MembersContent from "@modules/components/members/MembersContent";

export default function Members(){
    return(
        <DashboardLayout>
            <Head>
                <title>Members</title>
            </Head>
           <MembersContent/>

        </DashboardLayout>

    )
}