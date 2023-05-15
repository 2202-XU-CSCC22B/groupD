import PageLayout from "@modules/components/layouts/PageLayout";
import GoBackButton from "@modules/components/GoBackButton";
import {
    Container, FilledInput,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography
} from "@mui/material";
import DashboardPageLayout from "@modules/components/dashboard/DashboardPageLayout";
import FormPaperComponent from "@modules/components/FormPaperComponent";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import Sales from "@modules/components/dashboard/Sales";
import RecentMembers from "@modules/components/dashboard/RecentMembers";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

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
                           <FormControl variant="standard">
                               <InputLabel htmlFor="component-simple">Name</InputLabel>
                               <Input id="component-simple" defaultValue="Composed TextField" />
                           </FormControl>
                           <FormControl variant="standard">
                               <InputLabel htmlFor="component-helper">Name</InputLabel>
                               <Input
                                   id="component-helper"
                                   defaultValue="Composed TextField"
                                   aria-describedby="component-helper-text"
                               />
                               <FormHelperText id="component-helper-text">
                                   Some important helper text
                               </FormHelperText>
                           </FormControl>
                           <FormControl disabled variant="standard">
                               <InputLabel htmlFor="component-disabled">Name</InputLabel>
                               <Input id="component-disabled" defaultValue="Composed TextField" />
                               <FormHelperText>Disabled</FormHelperText>
                           </FormControl>
                           <FormControl error variant="standard">
                               <InputLabel htmlFor="component-error">Name</InputLabel>
                               <Input
                                   id="component-error"
                                   defaultValue="Composed TextField"
                                   aria-describedby="component-error-text"
                               />
                               <FormHelperText id="component-error-text">Error</FormHelperText>
                           </FormControl>
                           <FormControl>
                               <InputLabel htmlFor="component-outlined">Name</InputLabel>
                               <OutlinedInput
                                   id="component-outlined"
                                   defaultValue="Composed TextField"
                                   label="Name"
                               />
                           </FormControl>
                           <FormControl variant="filled">
                               <InputLabel htmlFor="component-filled">Name</InputLabel>
                               <FilledInput id="component-filled" defaultValue="Composed TextField" />
                           </FormControl>
                       </Box>
                   </FormPaperComponent>


                </Grid>

            </Grid>

        </Container>




    )
}