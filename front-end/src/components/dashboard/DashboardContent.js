
import {Container, Grid, Paper} from "@mui/material";
import Sales from "@modules/components/dashboard/Sales";
import RecentMembers from "@modules/components/dashboard/RecentMembers";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import PendingRegistrationContent from "@modules/components/members/new/PendingRegistrationContent";

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
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <PendingRegistrationContent />
                        </Paper>
                    </Grid>
                </Grid>

            </Container>

    )
}