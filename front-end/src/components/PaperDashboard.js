import {Paper} from "@mui/material";

export default function PaperDashboard(props){
    const { color } = props;

    return(
        <Paper style={{width: 250, height: 250, borderRadius: "25px", backgroundColor: color}} variant={"outlined"} square >

        </Paper>
    )
}