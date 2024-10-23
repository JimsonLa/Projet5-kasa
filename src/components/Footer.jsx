import React from "react";
import logo from "../images/logo.png";
import "../style/footer.scss";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div id="footer-content">
          <img src={logo} alt="logo Kasa" />
          <p>
            <span>©</span>
            {new Date().getUTCFullYear()} Kasa .All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
