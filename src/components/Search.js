import { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CategorieItem from "./CategorieItem";
import { SetCategories } from "../redux";

function Search() {
  const dispatch = useDispatch();
  const { token, categories } = useSelector((state) => {
    return {
      token: state.UserData.token,
      categories: state.UserData.categories,
    };
  });

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/categories",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const items = response.data;
      dispatch(SetCategories(items));
    };
    getCategories();
  }, [dispatch, token]);

  const renderedItems = categories?.categories.items.map((categorie) => {
    return (
      <CategorieItem
        title={categorie.name}
        image={categorie.icons[0].url}
        key={categorie.id}
      />
    );
  });

  return (
    <div className="body">
      <Header />
      <div className="categories_container">
        <h2>Browse all</h2>
        <div className="categories">{renderedItems}</div>
      </div>
    </div>
  );
}

export default Search;
