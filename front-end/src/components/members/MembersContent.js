import {Button, Container, Grid, Paper, Typography} from "@mui/material";

import {member, memberActions} from "@modules/utils/config";
import DashboardActions from "@modules/components/DashboardActions";

export default function MembersContent(){
    return(
        <Container>
                <Grid container spacing={3} >
                    {/* Chart */}
                    {/* Recent Transaction */}
                    {memberActions.map((action, index) => (
                        <Grid item xs={12} md={4} lg={3} style={{margin: "1rem"}} key={index}>

                            <DashboardActions width={action.width} title={action.title} url={action.url} icon={action.icon} link={action.link}/>

                        </Grid>
                    ))}



                </Grid>


        </Container>
    )
}