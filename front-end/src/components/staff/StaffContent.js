import {Container, Grid} from "@mui/material";
import {transactionAction, staffAction} from "@modules/utils/config";
import DashboardActions from "@modules/components/DashboardActions";

export default function StaffContent(){
    return(
        <Container>
            <Grid container spacing={3} >
                {/* Chart */}
                {/* Recent Transaction */}
                {staffAction.map((action, index) => (
                    <Grid item xs={12} md={4} lg={3} style={{margin: "1rem"}} key={index}>

                        <DashboardActions width={action.width} title={action.title} url={action.url} icon={action.icon} link={action.link}/>

                    </Grid>
                ))}



            </Grid>

        </Container>
    )
}