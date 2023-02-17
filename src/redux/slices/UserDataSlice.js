import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
  name: "UserData",
  initialState: {
    user: null,
    playlists: [],
    playing: false,
    currentPlaylist: null,
    currentPlaylistID: null,
    token:
      "BQBUYHrUGEkh7HdXuAzZZOUjcN1yrtIX2rSrjNewwIm-3e179Rq2Cy0bKwaXL9uytWSO5t--umtssTKsizthoIScUo2nLbVOGnrxHMYLNhLo_7FutPPWMrf9-VAEiVoMQ1OnEeHNHsacoYDNp3xK9bynUsK-B0gpvKMbJlX-EF-sfIX9_bRBDBqRxkKt7JTYVRY8BR2ta8A_TGM7Tu-4h1fx8ASJhOc",
    currentSongID: null,
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
