import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../constant/color";
import React, { Suspense, lazy, useState } from "react";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog=lazy(()=>import ("../specific/Search"))
const NotificationDialog=lazy(()=>import ("../specific/Notification"))
const NewGroupDialog=lazy(()=>import ("../specific/NewGroup"))


const Header = () => {

  
  const navigate = useNavigate();
  const [isMobile,setIsMobile]=useState(false);
  const [isSearch,setIsSearch]=useState(false);
  const [isNotification,setIsNotification]=useState(false);
  const [isNewGroup,setIsNewGroup]=useState(false);

  const handleMobile = () => {
    setIsMobile((prev)=>!prev);
  };
  const OpenSearchDialog = () => {
    setIsSearch((prev)=>!prev);
  };
  const OpenNewGroup = () => {
    setIsNewGroup((prev)=>!prev);
  };
  const navigateTogroup = () => navigate("/groups");
  const logoutHandler = () => {
    console.log("logout");
  };
  const OpenNotification = () => {
    setIsNotification((prev)=>!prev);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              chattu
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Box>
              <Tooltip title="search">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={OpenSearchDialog}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="New group">
                <IconButton color="inherit" size="large" onClick={OpenNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title=" manage group">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={navigateTogroup}
                >
                  <GroupIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title=" notification">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={OpenNotification}
                >
                  <NotificationsIcon/>
                </IconButton>
              </Tooltip>
            
              <Tooltip title=" logout">
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={logoutHandler}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
   {
    isSearch &&(
      <Suspense fallback={<Backdrop open/>}><SearchDialog/></Suspense>
    )
   }
   {
    isNotification &&(
      <Suspense fallback={<Backdrop open/>}><NotificationDialog/></Suspense>
    )
   }
   {
    isNewGroup &&(
      <Suspense fallback={<Backdrop open/>}><NewGroupDialog/></Suspense>
    )
   }
    </>
  );
};

export default Header;
