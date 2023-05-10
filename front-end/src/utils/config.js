import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {handleLogoutClick} from "@modules/utils/functions";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

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

export const memberSummary =[
    {name: "Total Members", icon: <Diversity3OutlinedIcon/>, value: 134, color: "#FFE2E6", tooltip: "Number of all registered users"},
    {name: "Monthly Members", icon: <FitnessCenterRoundedIcon/>, value: 20, color: "#DCFCE7", tooltip: "Number of all active monthly users"},
    {name: "Muaythai Students", icon: <SportsGymnasticsRoundedIcon/>, value: 10, color: "#FFF4DE", tooltip: "Number of total enrolled monthly students"},

]



export default dashboardData;