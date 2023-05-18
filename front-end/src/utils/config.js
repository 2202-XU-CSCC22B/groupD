import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { handleLogoutClick } from "@modules/utils/functions";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import SportsGymnasticsRoundedIcon from "@mui/icons-material/SportsGymnasticsRounded";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TableViewIcon from "@mui/icons-material/TableView";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import PeopleIcon from "@mui/icons-material/People";
import { styled } from "@mui/system";
import { Container } from "@mui/material";
import cardImage1 from "../../public/images/card1.png"
import cardImage2 from  "../../public/images/card2.png"
import cardImage3 from  "../../public/images/card3.png"

const fontSize = "50px";

const dashboardData = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <DashboardRoundedIcon />,
    tooltip: "View Dashboard",
  },
  {
    name: "Member",
    link: "/dashboard/member",
    icon: <PeopleRoundedIcon />,
    tooltip: "View Member",
  },
  {
    name: "Transaction",
    link: "/dashboard/transactions",
    icon: <PointOfSaleRoundedIcon />,
    tooltip: "View Transaction",
  },
  {
    name: "Staff",
    link: "/dashboard/staff",
    icon: <AssignmentIndRoundedIcon />,
    tooltip: "View Staff",
  },
];

export const logoutButton = {
  name: "Logout",
  onClick: handleLogoutClick,
  tooltip: "Click to logout",
  icon: <LogoutRoundedIcon />,
};

export const memberSummary = [
  {
    name: "Total Members",
    icon: <Diversity3OutlinedIcon sx={{ fontSize: fontSize }} />,
    value: 134,
    color: "#FFE2E6",
    tooltip: "Number of all registered users",
  },
  {
    name: "Monthly Members",
    icon: <FitnessCenterRoundedIcon sx={{ fontSize: fontSize }} />,
    value: 20,
    color: "#DCFCE7",
    tooltip: "Number of all active monthly users",
  },
  {
    name: "Muaythai Students",
    icon: <SportsGymnasticsRoundedIcon sx={{ fontSize: fontSize }} />,
    value: 10,
    color: "#FFF4DE",
    tooltip: "Number of total enrolled monthly students",
  },
];

export const memberActions = [
  {
    title: "New Member",
    url: "/images/AddAMember.jpg",
    width: "100%",
    icon: <AddCircleIcon />,
    link: "/dashboard/member/new",
  },

  {
    title: "All Member",
    url: "/images/AllMembers.jpg",
    width: "100%",
    icon: <TableViewIcon />,
    link: "/dashboard/member/all",
  },
];
export const member = {
  breadcrumbs: [],
  name: "Member",
};
export const newMemberBreadCrumbs = {
  breadcrumbs: [{ name: "Member", link: "/member" }],
  name: "New",
};

export const transactionAction = [
  {
    title: "New Transaction",
    url: "/images/AddSale.png",
    width: "100%",
    icon: <AddCircleIcon />,
    link: "/dashboard/transactions/new",
  },
  {
    title: "All Transactions",
    url: "/images/ViewTransactions.jpg",
    width: "100%",
    icon: <TableViewIcon />,
    link: "/dashboard/transactions/all",
  },
];

export const staffAction = [
  {
    title: "New Staff",
    url: "/images/Staff.jpg",
    width: "100%",
    icon: <AddCircleIcon />,
    link: "/dashboard/staff/new",
  },
  {
    title: "All Staff",
    url: "/images/ViewAllStaff.jpg",
    width: "100%",
    icon: <TableViewIcon />,
    link: "/dashboard/staff/all",
  },
];

export const backGroundImage = {
  url: "/images/background.jpg",
};

export const PTFunction = () => {
  alert("PT has been clicked!");
};

export const MTFunction = () => {
  alert("MT has been clicked!");
};

export const CBFunction = () => {
  alert("CB has been clicked!");
};
export const productDescription = [
  {
    title: "Personal Training",
    description:
      "Our experienced trainers will design a program tailored to your fitness goals and guide you through each workout.",
    function: PTFunction,
    icon: <FitnessCenterIcon />,
  },
  {
    title: "Muay Thai/Boxing",
    description:
      "Join our Muay Thai/Boxing classes to meet other gym-goers and challenge yourself with a different workout.",
    function: MTFunction,
    icon: <SportsMmaIcon />,
  },
  {
    title: "Community Building",
    description:
      "Our experienced trainers will create a customized meal plan to help you achieve your fitness goals.",
    function: CBFunction,
    icon: <PeopleIcon />,
  },
];

export const StyledContainer = styled(Container)`
  background-image: url("../../public/images/background.jpg");
  background-size: cover;
  background-position: center;
`;

export const allMembersColumnDef = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "membershipStatus",
    headerName: "Membership",
    width: 130,
    renderCell: (params) => (
      <span
        className={`font-semibold px-2 py-1 rounded text-xs ${
          params.value === "ACTIVE"
            ? " bg-emerald-100 text-emerald-700"
            : params.value === "INACTIVE"
            ? " bg-rose-100 text-rose-700"
            : " bg-gray-100 text-gray-700"
        }`}
      >
        {params.value}
      </span>
    ),
  },
  {
    field: "monthlySubscriptionStatus",
    headerName: "Monthly",
    width: 130,
    renderCell: (params) => (
      <span
        className={`font-semibold px-2 py-1 rounded text-xs ${
          params.value === "ACTIVE"
            ? " bg-emerald-100 text-emerald-700"
            : params.value === "INACTIVE"
            ? " bg-rose-100 text-rose-700"
            : " bg-gray-300 text-gray-700"
        }`}
      >
        {params.value}
      </span>
    ),
  },
  {
    field: "studentStatus",
    headerName: "Student",
    width: 130,
    renderCell: (params) => (
      <span
        className={`font-semibold  px-2 py-1 rounded text-xs ${
          params.value === "ACTIVE"
            ? " bg-emerald-100 text-emerald-700"
            : params.value === "INACTIVE"
            ? " bg-rose-100 text-rose-700"
            : " bg-gray-300 text-gray-700"
        }`}
      >
        {params.value}
      </span>
    ),
  },
];
export default dashboardData;


export const cardContents = [ 
  {
    title: 'Personal Training',
    description: 'Our experienced trainers will design a program tailored to your fitness goals and guide you through each workout.',
    image: cardImage1
  },
  {
    title: 'Muay Thai/Boxing',
    description: 'Join our Muay Thai/Boxing classes to meet other gym-goers and challenge yourself with a different workout.',
    image: cardImage2
  },
  {
    title: 'Community Building',
    description: 'Engage in group challenges, and find motivation and support in reaching your fitness goals together.',
    image: cardImage3
  },
]
