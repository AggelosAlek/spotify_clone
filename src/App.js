import { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/Spotify";
import Body from "./pages/body";
import { useDispatch, useSelector } from "react-redux";
import { SetToken } from "./redux";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => {
    return {
      token: state.UserData.token,
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
