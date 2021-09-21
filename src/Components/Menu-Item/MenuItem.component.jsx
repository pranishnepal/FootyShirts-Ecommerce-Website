import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import "./MenuItem.style.scss";

const MenuItem = ({ title, imageURL, linkURL }) => {
  const history = useHistory();
  const { path, url } = useRouteMatch();

  return (
    <div className="menu-item" onClick={() => history.push(`${url}${linkURL}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageURL})` }}
      />

      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">SHOP NOW!</div>
      </div>
    </div>
  );
};

export default MenuItem;
