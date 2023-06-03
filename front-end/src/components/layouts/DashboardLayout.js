import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import dashboardData from "@modules/utils/config";
import { Tooltip } from "@mui/material";
import DashboardPageLayout from "@modules/components/dashboard/DashboardPageLayout";
import { useState, useEffect } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import EmailModal from "./dashboard/email-modal";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {getAllStaff} from "@modules/components/staff/all-staff-table";
const drawerWidth = 240;
import { useRouter } from 'next/navigation';
import {getAllMembers} from "@modules/utils/axiosApi";


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MessageDrawer = ({ openDrawer, toggleDrawer }) => {
  return (
    <Drawer anchor={"bottom"} open={openDrawer} onClose={toggleDrawer}>
      Hello!
    </Drawer>
  );
};

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const router = useRouter();


  useEffect(() => {
    // Get the token and role from session storage
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    // Check if token exists and if role is not Admin or SuperAdmin
    if (!token && (role !== "Admin" || role !== "SuperAdmin")) {
      // Redirect to "/"
      router.push("/");
    }
  }, []);


  const handleLogoutClick = (href, options) => {
    alert("Logout clicked");
    sessionStorage.clear();
    router.push("/");
  };


  const { allMembers } = useQuery({
    queryKey: ["all_members"],
    queryFn: getAllMembers,
  });

  const {allStaff} = useQuery({
    queryKey: ["all_staff"],
    queryFn: getAllStaff,
  });


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setIsEmailModalOpen(!isEmailModalOpen);
  };
  const dashBoardAction = [
    // {
    //   name: "Email",
    //   onClick: toggleDrawer,
    //   tooltip: "Click to send email",
    //   icon: <EmailRoundedIcon />,
    // },
    {
      name: "Logout",
      onClick: handleLogoutClick,
      tooltip: "Click to logout",
      icon: <LogoutRoundedIcon />,
    },
  ];

  return (

  <Box sx={{display: "flex"}}>
    <CssBaseline/>
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && {display: "none"}),
            }}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {process.env.companyName}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
              <ChevronRightIcon/>
          ) : (
              <ChevronLeftIcon/>
          )}
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <List>
        {dashboardData.map((page, index) => (
            <Tooltip key={index} title={page.tooltip}>
              <ListItem
                  key={page?.name}
                  disablePadding
                  sx={{display: "block"}}
              >
                <Link
                    href={page.link}
                    passHref
                    style={{textDecoration: "none", color: "black"}}
                >
                  <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                  >
                    <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                    >
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={page?.name}
                        sx={{opacity: open ? 1 : 0}}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            </Tooltip>
        ))}
      </List>
      <Divider/>
      <List className=" space-y-4">
        {dashBoardAction.map((page, index) => (
            <Tooltip title={page.tooltip}>
              <ListItem key={index} disablePadding sx={{display: "block"}}>
                <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={() => page.onClick()}
                >
                  <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                  >
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText
                      primary={page?.name}
                      sx={{opacity: open ? 1 : 0}}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
        ))}
      </List>
    </Drawer>
    <MessageDrawer/>
    <Box component="main">
      <DrawerHeader/>
      <DashboardPageLayout>{children}</DashboardPageLayout>
    </Box>

    <EmailModal
        isEmailModalOpen={isEmailModalOpen}
        setIsEmailModalOpen={setIsEmailModalOpen}
        allMembers={allMembers?.data}
        allStaff={allStaff?.data.all}
    />
  </Box>

  );
}
