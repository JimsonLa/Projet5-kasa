import React from "react";
import { Link } from "react-router-dom";
import "../style/error.scss";

const Error = () => {
  return (
    <div>
      <section className="error">
        <h2 id="errorCode">404</h2>
        <p id="errorMsg">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">
          <p id="returnHome">Retourner sur la page d'acceuil</p>
        </Link>
      </section>
    </div>
  );
};

export default Error;
