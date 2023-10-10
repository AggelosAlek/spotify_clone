import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
  name: "UserData",
  initialState: {
    user: null,
    playlists: [],
    playing: false,
    currentPlaylist: null,
    currentPlaylistID: null,
    token: null,
    currentSong: null,
    categories: null,
    featuredPlaylists: [],
    requestLink: null,
  },
  reducers: {
    SetUser(state, action) {
      state.user = action.payload;
    },
    SetToken(state, action) {
      state.token = action.payload;
    },
    SetPlaylists(state, action) {
      state.playlists = action.payload;
    },
    SetCurrentPlaylistID(state, action) {
      state.currentPlaylistID = action.payload;
    },
    SetCurrentPlaylist(state, action) {
      state.currentPlaylist = action.payload;
    },
    SetCurrentSongID(state, action) {
      state.currentSongID = action.payload;
    },
    SetCurrentSong(state, action) {
      state.currentSong = action.payload;
    },
    SetCategories(state, action) {
      state.categories = action.payload;
    },
    SetFeaturedPlaylists(state, action) {
      state.featuredPlaylists = action.payload;
    },
  },
});
export const UserData = UserDataSlice.reducer;
export const {
  SetUser,
  SetToken,
  SetPlaylists,
  SetCurrentPlaylistID,
  SetCurrentPlaylist,
  SetCurrentSongID,
  SetCurrentSong,
  SetCategories,
  SetFeaturedPlaylists,
} = UserDataSlice.actions;
