import {Container, Grid} from "@mui/material";
import {memberActions, salesAction} from "@modules/utils/config";
import DashboardActions from "@modules/components/DashboardActions";

export default function SalesContent(){
    return(
        <Container>
            <Grid container spacing={3} >
                {/* Chart */}
                {/* Recent Sales */}
                {salesAction.map((action, index) => (
                    <Grid item xs={12} md={4} lg={3} style={{margin: "1rem"}}>

                        <DashboardActions width={action.width} title={action.title} url={action.url} icon={action.icon}/>

                    </Grid>
                ))}



            </Grid>

        </Container>
    )
}