import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {handleLogoutClick} from "@modules/utils/functions";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TableViewIcon from '@mui/icons-material/TableView';
const fontSize = '50px';

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
    {name: "Total Members", icon: <Diversity3OutlinedIcon sx={{fontSize:fontSize}}/>, value: 134, color: "#FFE2E6", tooltip: "Number of all registered users"},
    {name: "Monthly Members", icon: <FitnessCenterRoundedIcon sx={{fontSize:fontSize}}/>, value: 20, color: "#DCFCE7", tooltip: "Number of all active monthly users"},
    {name: "Muaythai Students", icon: <SportsGymnasticsRoundedIcon sx={{fontSize:fontSize}}/>, value: 10, color: "#FFF4DE", tooltip: "Number of total enrolled monthly students"},

]

export const memberActions=[
    {title: "New Member", url:"/images/AddAMember.jpg", width:'100%', icon: <AddCircleIcon/>},
    {title: "All Members", url:"/images/AllMembers.jpg", width:'100%', icon:<TableViewIcon/>}
]

export const salesAction=[
    {title: "New Transaction", url:"/images/AddSale.png", width:'100%', icon: <AddCircleIcon/>},
    {title: "All Transactions", url:"/images/ViewTransactions.jpg", width:'100%', icon:<TableViewIcon/>}
]

export const staffAction=[
    {title: "New Staff", url:"/images/Staff.jpg", width:'100%', icon: <AddCircleIcon/>},
    {title: "All Staff", url:"/images/ViewAllStaff.jpg", width:'100%', icon:<TableViewIcon/>}
]


export default dashboardData;