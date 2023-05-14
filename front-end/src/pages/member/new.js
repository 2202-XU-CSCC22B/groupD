import {Typography} from "@mui/material";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import MyCustomBreadCrumbs from "@modules/components/MyCustomBreadCrumbs";
import {newMemberBreadCrumbs} from "@modules/utils/config";
import GoBackButton from "@modules/components/GoBackButton";
import NewMembersContent from "@modules/components/members/new/NewMembersContent";

export default function NewMember(){
    return(
        <DashboardLayout>
           <NewMembersContent/>
        </DashboardLayout>

    )
}