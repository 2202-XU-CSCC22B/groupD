import {Paper} from "@mui/material";
import {memberSummary} from "@modules/utils/config";
import PaperDashboard from "@modules/components/PaperDashboard";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import BasicComponent from "@modules/components/layouts/BasicComponent";

export default function MemberSummary(){
    return(
        <Paper  style={{padding:"1rem"}} elevation={24}>
            <Typography variant="h6" display="block" gutterBottom> Member's summary</Typography>

           <BasicComponent>
               {memberSummary.map(summary => (
                   <PaperDashboard
                       key={summary.name}
                       color={summary.color}
                       name={summary.name}
                       icon={summary.icon}
                       value={summary.value}
                       tooltip={summary.tooltip} />
               ))}
           </BasicComponent>


        </Paper>
    )
}