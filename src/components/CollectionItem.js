import React from "react";
import { Link } from "react-router-dom";

function CollectionItem({ img, title, creator, ...rest }) {
  return (
    <Link {...rest} className="collection_item">
      <img src={img} alt="1" />
      <h4>{title}</h4>
      <p>By {creator}</p>
    </Link>
  );
}

export default CollectionItem;
