import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import Sales from "@modules/components/dashboard/Sales";
import RecentMembers from "@modules/components/dashboard/RecentMembers";
import {member, memberActions} from "@modules/utils/config";
import DashboardActions from "@modules/components/DashboardActions";
import MyCustomBreadCrumbs from "@modules/components/MyCustomBreadCrumbs";
export default function MembersContent(){
    return(
        <Container>
            <MyCustomBreadCrumbs breadcrumbs={member.breadcrumbs} name={member.name}/>
                <Grid container spacing={3} >
                    {/* Chart */}
                    {/* Recent Transaction */}
                    {memberActions.map((action, index) => (
                        <Grid item xs={12} md={4} lg={3} style={{margin: "1rem"}}>

                            <DashboardActions width={action.width} title={action.title} url={action.url} icon={action.icon} link={action.link}/>

                        </Grid>
                    ))}



                </Grid>


        </Container>
    )
}