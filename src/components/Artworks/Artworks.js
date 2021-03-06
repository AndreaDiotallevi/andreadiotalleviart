import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import artworks from "../../utils/artworks";

const Artworks = () => {
  return (
    <div id="artworks-component">
      <ul id="artworks-container">
        {artworks.map((artwork) => (
          <li className="artwork" key={artwork.id}>
            <Link
              to={`/portfolio/${artwork.title.replace(" ", "-")}`}
              className="artwork-link"
              onClick={() => {
                ReactGA.event({
                  category: "portfolio",
                  action: `click on ${artwork.title}`,
                });
              }}
            >
              <img
                id={`artwork-image-${artwork.id}`}
                className="artwork-image"
                src={require(`../../assets/${artwork.title.replace(
                  " ",
                  "-"
                )}-0.png`)}
                alt={artwork.title}
              ></img>
              <p id={`artwork-title-${artwork.id}`} className="artwork-title">
                {artwork.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artworks;
