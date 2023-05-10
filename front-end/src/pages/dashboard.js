import {Container, Paper, Typography} from "@mui/material";
import Link from "next/link";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import Head from "next/head";
import PaperDashboard from "@modules/components/PaperDashboard";
import {memberSummary} from "@modules/utils/config";
export default function dashboard(){
    return(
        <DashboardLayout>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Container sx={{display: "flex", flexDirection: "column"}}>

                <Paper  style={{padding:"1rem"}} elevation={24}>
                    {/*<Typography variant="h6" display="block" gutterBottom> Overview</Typography>*/}

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        gap: "10px",
                        margin: "10px",
                        maxWidth: "1000px",}}>
                        {memberSummary.map(summary => (
                            <PaperDashboard key={summary.name} color={summary.color} />
                        ))}
                    </div>
                </Paper>

            </Container>
        </DashboardLayout>

    )
}

