import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {handleLogoutClick} from "@modules/utils/functions";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
const dashboardData =  [
    {name: "Dashboard", link: "/dashboard", icon: <DashboardRoundedIcon/>, tooltip: "View Dashboard" },
    {name: "Members", link: "/members", icon: <PeopleRoundedIcon/> , tooltip: "View Members"},
    {name: "Sales", link: "/sales", icon: <PointOfSaleRoundedIcon/>, tooltip: "View Sales"},
    {name:"Staff", link: "/staff", icon: <AssignmentIndRoundedIcon/>, tooltip: "View Staff"}
]

export const logoutButton = {
    name: "Logout",
    onClick : handleLogoutClick,
    tooltip: "Click to logout",
    icon: <LogoutRoundedIcon/>
}

export default dashboardData;