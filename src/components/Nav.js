import React from "react";
import { Link } from "react-router-dom";

function Nav({ title, Icon, to }) {
  return (
    <Link to={to} className="nav hover">
      {Icon && <Icon className="sidebar_icon" fontSize="large" />}

      <p>{title}</p>
    </Link>
  );
}

export default Nav;
