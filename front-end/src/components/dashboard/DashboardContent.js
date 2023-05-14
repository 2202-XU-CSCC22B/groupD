import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {Container, Grid, Paper} from "@mui/material";
import Chart from "@modules/components/dashboard/Chart";
import Sales from "@modules/components/dashboard/Sales";
import RecentMembers from "@modules/components/dashboard/RecentMembers";
import {Copyright} from "@mui/icons-material";
import MemberSummary from "@modules/components/dashboard/MemberSummary";

export default function DashboardContent(){
    return(
            <Container>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 300,
                            }}
                        >
                            <MemberSummary/>
                        </Paper>
                    </Grid>
                    {/* Recent Transaction */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 300,
                            }}
                        >
                            <Sales />
                        </Paper>
                    </Grid>
                    {/* Recent RecentMembers */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <RecentMembers />
                        </Paper>
                    </Grid>
                </Grid>

            </Container>

    )
}