import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SetCurrentPlaylist, SetCurrentSongID, SetCurrentSong } from "../redux";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Body() {
  const dispatch = useDispatch();
  const { currentPlaylist, currentPlaylistID, token } = useSelector((state) => {
    return {
      currentPlaylistID: state.UserData.currentPlaylistID,
      currentPlaylist: state.UserData.currentPlaylist,
      token: state.UserData.token,
    };
  });

  useEffect(() => {
    if (currentPlaylistID) {
      const getCurrentPlaylist = async () => {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${currentPlaylistID}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        const selectedPlaylist = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description.startsWith("<a")
            ? ""
            : response.data.description,
          image: response.data.images[0].url,
          tracks: response.data.tracks.items.map(({ track }) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map((artist) => artist.name),
            image: track.album.images[2].url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number,
          })),
        };
        dispatch(SetCurrentPlaylist(selectedPlaylist));
      };

      getCurrentPlaylist();
    }
  }, [currentPlaylistID, dispatch, token]);

  const handleClick = (id, name, artists, image) => {
    dispatch(SetCurrentSong({ id, name, artists, image }));
  };

  const renderedItems = currentPlaylist?.tracks.map((song, i) => {
    const min = Math.floor((song.duration / 1000 / 60) << 0);
    const sec = Math.floor(song.duration % 60);
    const duration = min + ":" + sec;
    return (
      <div
        key={song.id}
        className="row song_hover"
        onClick={() =>
          handleClick(song.id, song.name, song.artists, song.image)
        }
      >
        <div className="index">{i + 1}</div>
        <div className="title">
          <div className="title_img">
            <img src={song.image} alt="1" />
          </div>
          <div className="details_wrapper">
            <div className="song_name">{song.name}</div>
            <div className="artist">{song.artists}</div>
          </div>
        </div>
        <div className="album">{song.album}</div>
        <div className="date">Dec 14, 2022</div>
        <div className="duration">{duration}</div>
      </div>
    );
  });

  return (
    <div className="body">
      <Header />
      <div className="body_info">
        <img src={currentPlaylist?.image} alt="" />
        <div className="body_infoText">
          <div>PLAYLIST</div>
          <h2>{currentPlaylist?.name}</h2>
          <p>{currentPlaylist?.description}</p>
        </div>
      </div>
      <div className="table_wrapper">
        <div className="row table_header">
          <div className="index">#</div>
          <div className="title">TITLE</div>
          <div className="album">ALBUM</div>
          <div className="date">DATE ADDED</div>
          <div className="duration">
            <AccessTimeIcon />
          </div>
        </div>
        {renderedItems}
      </div>
    </div>
  );
}

export default Body;
