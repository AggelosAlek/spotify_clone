import React from "react";
import { Link } from "react-router-dom";

function HeadNav({ title, to }) {
  return (
    <Link to={to} className="HeadNav_link">
      <p>{title}</p>
    </Link>
  );
}

export default HeadNav;
