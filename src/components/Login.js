import React from "react";
import { loginUrl } from "./Spotify";

export default function Login() {
  return (
    <div className="login">
      <img
        className="login_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="logo"
      />
      <div className="login_button">
        <a href={loginUrl}>Log in with Spotify</a>
      </div>
    </div>
  );
}
