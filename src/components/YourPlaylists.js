import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import CollectionItem from "./CollectionItem";

function YourPlaylists() {
  const dispatch = useDispatch();
  const { token, playlists } = useSelector((state) => {
    return {
      token: state.UserData.token,
      playlists: state.UserData.playlists,
    };
  });

  const renderedItems = playlists?.items?.map((playlist) => {
    return (
      <CollectionItem
        img={playlist.images[0].url}
        title={playlist.name}
        creator={playlist.owner.display_name}
        key={playlist.id}
      />
    );
  });

  return (
    <div className="body">
      <Header />
      <div className="categories_container">
        <h2>Playlists</h2>
        <div className="playlists_container">{renderedItems}</div>
      </div>
    </div>
  );
}

export default YourPlaylists;
