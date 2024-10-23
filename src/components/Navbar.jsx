import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" id="logo" />
      <ul id="navbarul">
        <li class="navbarli">
          <a href="/">Acceuil</a>
        </li>
        <li class="navbarli">
          <a href="/about">A propos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
