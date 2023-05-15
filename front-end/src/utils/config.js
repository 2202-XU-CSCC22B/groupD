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
    {name: "Member", link: "/member", icon: <PeopleRoundedIcon/> , tooltip: "View Member"},
    {name: "Transaction", link: "/transaction", icon: <PointOfSaleRoundedIcon/>, tooltip: "View Transaction"},
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
    {title: "New Member", url:"/images/AddAMember.jpg", width:'100%', icon: <AddCircleIcon/>, link: "/member/new"},

    {title: "All Member", url:"/images/AllMembers.jpg", width:'100%', icon:<TableViewIcon/>, link: "/member/all"}
]
export const member={
breadcrumbs:[],
    name: "Member"
}
export const newMemberBreadCrumbs={
        breadcrumbs: [
            {name: "Member", link: "/member"}
        ],
    name: "New"
}

export const transactionAction=[
    {title: "New Transaction", url:"/images/AddSale.png", width:'100%', icon: <AddCircleIcon/> , link: "/transaction/new"},
    {title: "All Transactions", url:"/images/ViewTransactions.jpg", width:'100%', icon:<TableViewIcon/> , link: "/transaction/all"}
]

export const staffAction=[
    {title: "New Staff", url:"/images/Staff.jpg", width:'100%', icon: <AddCircleIcon/> , link: "/staff/new"},
    {title: "All Staff", url:"/images/ViewAllStaff.jpg", width:'100%', icon:<TableViewIcon/> , link: "/staff/all"}
]


export default dashboardData;