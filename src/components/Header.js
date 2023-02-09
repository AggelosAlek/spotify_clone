import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SetUser } from "../redux";
import { Routes, Route, useLocation } from "react-router-dom";
import HeadNav from "./HeadNav";

function Header() {
  const location = useLocation();
  const { user, token } = useSelector((state) => {
    return {
      user: state.UserData.user,
      token: state.UserData.token,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      dispatch(SetUser(response.data));
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className="header">
      <div className="header_left">
        {location.pathname.includes("search") && (
          <div className="searchbar">
            <SearchIcon />
            <input
              placeholder="Search for Artist, Playlist or Songs"
              type="text"
            />
          </div>
        )}
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="RQ" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
