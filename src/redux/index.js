import { configureStore } from "@reduxjs/toolkit";
import {
  UserData,
  SetUser,
  SetToken,
  SetPlaylists,
  SetCurrentPlaylistID,
  SetCurrentPlaylist,
  SetCurrentSong,
  SetCurrentSongID,
  SetCategories,
  SetFeaturedPlaylists,
} from "./slices/UserDataSlice";
// import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    // player: playerReducer,
    UserData: UserData,
  },
});

export {
  UserData,
  SetUser,
  SetToken,
  SetPlaylists,
  SetCurrentPlaylistID,
  SetCurrentPlaylist,
  SetCurrentSong,
  SetCurrentSongID,
  SetCategories,
  SetFeaturedPlaylists,
};
