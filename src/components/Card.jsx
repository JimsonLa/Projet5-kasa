import React from "react";
import "../style/gallery.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/cards.scss";
// import logements from "../logements.json";

const Card = ({ fichierjson }) => {
  return (
    <div className="gallery">
      {fichierjson.map((fichier) => (
        <Link
          to={`/fichierjson/${fichier.id}`}
          className="card"
          key={fichier.id}
        >
          <div className="container-image">
            <img src={fichier.cover} alt={fichier.title} />
            <div className="title">
              <h2>{fichier.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

Card.propTypes = {
  fichier: PropTypes.array.isRequired,
};
export default Card;
