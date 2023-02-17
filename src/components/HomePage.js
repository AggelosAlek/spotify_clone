import axios from "axios";
import { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { SetFeaturedPlaylists, SetCurrentPlaylistID } from "../redux";
import CollectionItem from "./CollectionItem";

function HomePage() {
  const dispatch = useDispatch();
  const { token, featuredPlaylists } = useSelector((state) => {
    return {
      token: state.UserData.token,
      featuredPlaylists: state.UserData.featuredPlaylists,
    };
  });

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/featured-playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(SetFeaturedPlaylists(response.data));
    };

    getFeaturedPlaylists();
  }, [dispatch, token]);

  const handleClick = (id) => {
    dispatch(SetCurrentPlaylistID(id));
  };

  const renderedItems = featuredPlaylists?.playlists?.items?.map((playlist) => {
    return (
      <CollectionItem
        onClick={() => handleClick(playlist.id)}
        img={playlist.images[0].url}
        title={playlist.name}
        creator={playlist.owner.display_name}
        key={playlist.id}
        to="playlist"
      />
    );
  });

  return (
    <div className="body">
      <Header />
      <div className="categories_container">
        <h2>{featuredPlaylists.message}</h2>
        <div className="playlists_container">{renderedItems}</div>
      </div>
    </div>
  );
}

export default HomePage;
