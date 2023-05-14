import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import Sales from "@modules/components/dashboard/Sales";
import RecentMembers from "@modules/components/dashboard/RecentMembers";
import {memberActions} from "@modules/utils/config";
import DashboardActions from "@modules/components/DashboardActions";
export default function MembersContent(){
    return(
        <Container>
            <Grid container spacing={3} >
                {/* Chart */}
                {/* Recent Sales */}
                {memberActions.map((action, index) => (
                    <Grid item xs={12} md={4} lg={3} style={{margin: "1rem"}}>

                            <DashboardActions width={action.width} title={action.title} url={action.url} icon={action.icon}/>

                    </Grid>
                ))}



            </Grid>

        </Container>
    )
}