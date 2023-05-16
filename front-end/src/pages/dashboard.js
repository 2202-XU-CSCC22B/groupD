import {Container, Paper, Typography} from "@mui/material";
import Link from "next/link";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PaperDashboard from "@modules/components/PaperDashboard";
import {memberSummary} from "@modules/utils/config";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import DashboardContent from "@modules/components/dashboard/DashboardContent";
export default function dashboard(){
    return(
        <DashboardLayout>
            <Head>
                <title>Dashboard</title>
            </Head>

                <DashboardContent/>
            

     
        </DashboardLayout>

    )
}

