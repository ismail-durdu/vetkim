import React from "react";
import logo from "../assets/vetkim-logo.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { GoBell } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { FaBookmark } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { IoMdPersonAdd } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";
import Logo from "../assets/avatar.png";
import { logout } from "../store/appSlice";

function header() {
  const login = useSelector((state: RootState) => state.app.login);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logout());
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header flex flex-row justify-between items-center px-4 py-2 text-sm lg:text-md lg:px-20 lg:py-3">
      <Link to={"/"}>
        <div className="flex flex-row items-center">
          <img className="mr-1" src={logo} alt="" />
          <p className="font-semibold">VETKİM</p>
        </div>
      </Link>
      {login ? (
        <div className="hidden lg:flex text-xl flex-row gap-10">
          <Link to={"/"} className="transition-colors duration-300 hover:text-purple-400">Home</Link>
          <Link to={"/clinics"} className="transition-colors duration-300 hover:text-purple-400">Veterinary Clinics</Link>
          <Link to={"/pethealth"} className="transition-colors duration-300 hover:text-purple-400">Pet Health</Link>
          <Link to={"/calendar"} className="transition-colors duration-300 hover:text-purple-400">Calendar</Link>
        </div>
      ) : (
        <div className="hidden lg:flex text-xl flex-row gap-5">
          <Link to={"/"} className="transition-colors duration-300 hover:text-purple-400">Home</Link>
          <Link to={"/aboutus"} className="transition-colors duration-300 hover:text-purple-400">About Us</Link>
          <Link to={"/features"} className="transition-colors duration-300 hover:text-purple-400">Features</Link>
          <Link to={"/clinics"} className="transition-colors duration-300 hover:text-purple-400">Veterinary Clinics</Link>
          <Link to={"/pethealth"} className="transition-colors duration-300 hover:text-purple-400">Pet Health</Link>
        </div>
      )}
      {login ? (
        <React.Fragment>
          <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Badge className="text-lg pt-1 cursor-pointer" badgeContent={4} color="secondary">
              <GoBell color="action" />
            </Badge>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  <img src={Logo} alt="" />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link to={"/profile"}>
              <MenuItem onClick={handleClose}>
                <Avatar />
                Profile
              </MenuItem>
            </Link>

            <MenuItem className="flex flex-row gap-2" onClick={handleClose}>
              <span className="opacity-50">
                <FaBookmark />
              </span>
              Saved Blogs
            </MenuItem>
            <MenuItem className="flex flex-row gap-2" onClick={handleClose}>
              <span className="opacity-50">
                <TbVaccine />
              </span>
              My Vet
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IoMdPersonAdd />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AiFillSetting />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={exit}>
              <ListItemIcon>
                <MdLogout />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      ) : (
        <div className="flex flex-row gap-2">
          <Link
            className="bg-purple-400 px-3 py-1 rounded cursor-pointer"
            to={"/login"}
          >
            Log in
          </Link>

          <Link
            className="bg-purple-400 px-3 py-1 rounded cursor-pointer"
            to={"/signup"}
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}

export default header;
