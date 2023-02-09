import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Playlist from "../components/Playlist";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Search from "../components/Search";
import YourPlaylists from "../components/YourPlaylists";

function Body() {
  return (
    <div className="containt">
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection">
          <Route index path="*" element={<YourPlaylists />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default Body;
