import React, { useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { SetCurrentPlaylistID, SetPlaylists } from "../redux";
import { Link } from "react-router-dom";

function SideBar() {
  const dispatch = useDispatch();
  const { playlists, token } = useSelector((state) => {
    return {
      playlists: state.UserData.playlists,
      token: state.UserData.token,
    };
  });

  useEffect(() => {
    const getPlaylists = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(SetPlaylists(response.data));
    };
    getPlaylists();
  }, [token, dispatch]);

  const handleClick = (id) => {
    dispatch(SetCurrentPlaylistID(id));
  };

  const renderedItems = playlists?.items?.map((playlist) => {
    return (
      <Link to="playlist" key={playlist.id}>
        <div onClick={() => handleClick(playlist.id)} className="playlist_item">
          {playlist.name}
        </div>
      </Link>
    );
  });

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="logo"
      />
      <Nav to="/" Icon={HomeIcon} title="Home" />
      <Nav to="search" Icon={SearchIcon} title="Search" />
      <Nav to="collection" Icon={LibraryMusicIcon} title="Your Library" />
      <div className="playlist_Title"></div>
      <div className="playlists">{renderedItems}</div>
    </div>
  );
}

export default SideBar;
