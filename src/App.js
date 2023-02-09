import { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromUrl, remove_hash_from_url } from "./components/Spotify";
import Body from "./pages/body";
import { useDispatch, useSelector } from "react-redux";
import { SetUser, SetToken, SetPlaylists, SetCurrentPlaylist } from "./redux";

function App() {
  const dispatch = useDispatch();
  const { token, currentPlaylistID } = useSelector((state) => {
    return {
      token: state.UserData.token,
      currentPlaylistID: state.UserData.currentPlaylistID,
    };
  });
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.history.pushState({}, document.title, "/" + "");
    const _token = hash.access_token;

    if (_token) {
      dispatch(SetToken(_token));
    }
  }, [dispatch]);

  return <div>{token ? <Body /> : <Login />}</div>;
}
export default App;
