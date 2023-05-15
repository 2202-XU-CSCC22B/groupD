
import {
    Container, FilledInput,
    FormControl,
    FormHelperText, Grid,
    Input,
    InputLabel,
    OutlinedInput,
    Paper, TextField,
    Typography
} from "@mui/material";
import DashboardPageLayout from "@modules/components/dashboard/DashboardPageLayout";
import FormPaperComponent from "@modules/components/FormPaperComponent";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import Sales from "@modules/components/dashboard/Sales";
import RecentMembers from "@modules/components/dashboard/RecentMembers";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import RegistrationForm from "@modules/components/members/new/RegistrationForm";

export default function NewMembersContent(){
    return(
        <Container>

            <Grid container spacing={3}>

                {/* Recent Transaction */}
                <Grid item xs={12} >
                   <FormPaperComponent>
                    <Typography variant={"h5"}>Membership Registration Form</Typography>
                       <Divider/>
                       <Box
                           component="form"
                           sx={{
                               '& > :not(style)': { m: 1 },
                           }}
                           noValidate
                           autoComplete="off"
                       >

                         <RegistrationForm/>




                       </Box>
                   </FormPaperComponent>


                </Grid>

            </Grid>

        </Container>




    )
}