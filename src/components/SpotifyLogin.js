function SpotifyLogin() {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://localhost:3000/";
  const clientId = "d460d2cf48384757b5ac8677ecfea2dd";

  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});
  };

  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  return (
    <div className="h-screen flex flex-col gap-16 justify-center">
      <img
        className="w-2/4 mx-auto w-full"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="logo"
      />
      <div className="mx-auto px-16 py-5 rounded-full bg-green font-bold text-l text-center cursor-pointer">
        <a href={loginUrl}>Log in with Spotify</a>
      </div>
    </div>
  );
}

export const { getTokenFromUrl, loginUrl } = SpotifyLogin;
export default SpotifyLogin;
