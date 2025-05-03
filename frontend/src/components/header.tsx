import React, { useEffect, useState } from "react";
import logo from "../assets/vetkim-logo.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { FaCalendarAlt } from "react-icons/fa";

import Tooltip from "@mui/material/Tooltip";
import { IoMdPersonAdd } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

import { logout } from "../store/appSlice";
import avatarMale from "../assets/avatars/male.png";
import avatarFemale from "../assets/avatars/female.png";
import avatar from "../assets/avatar.png";
import "../css/headerbutton.css";
import "../css/navbarbutton.css";

interface User {
  user_email: string;
  user_name: string;
  user_lastname: string;
  user_old: number;
  user_phone: string;
  user_gender: string;
  user_country: string;
  location_id: number;
  user_province: string;
}

function header() {
  const login = useSelector((state: RootState) => state.app.login);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>(null!);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:8000/api/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Profil verisi alınamadı");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data.user);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);

  const exit = () => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Logout başarıyla gönderildi:", data);
        })
        .catch((err) => {
          console.error("Logout sırasında hata:", err);
        });
    }

    dispatch(logout());
    localStorage.removeItem("token");
    handleClose();
    navigate("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getAvatar = () => {
    if (userData?.user_gender === "Erkek") {
      return avatarMale;
    } else if (userData?.user_gender === "Kadin") {
      return avatarFemale;
    }
    return avatar;
  };
  return (
    <div className="header flex flex-row py-2 justify-between items-center px-4  text-sm lg:text-md lg:px-20 lg:py-2">
      <Link to={"/"}>
        <div className="flex flex-row items-center">
          <img className="mr-1" src={logo} alt="" />
          <p className="font-semibold">VETKİM</p>
        </div>
      </Link>

      <div className="hidden lg:flex text-xl flex-row gap-5">
        <Link to={"/"} className="headerbutton">
          Home
        </Link>
        <Link to={"/aboutus"} className="headerbutton">
          About Us
        </Link>
        <Link to={"/features"} className="headerbutton">
          Features
        </Link>
        <Link to={"/clinics"} className="headerbutton">
          Veterinary Clinics
        </Link>
        <Link to={"/blog"} className="headerbutton">
          Blogs
        </Link>
      </div>

      {login ? (
        <React.Fragment>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip className="absolute" title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 30, height: 30 }}>
                  <img src={getAvatar()} alt="" />
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

            <Divider />
            <Link to={"/calendar"}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FaCalendarAlt />
                </ListItemIcon>
                Calendar
              </MenuItem>
            </Link>

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
        <div className="flex flex-row gap-2 my-1.5">
          <Link className="button" to={"/login"}>
            Log in
          </Link>

          <Link className="button" to={"/signup"}>
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}

export default header;
