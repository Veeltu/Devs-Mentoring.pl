import Contact from "./contact/contact";
import React from "react";
import Links from "./links/links";
import NameLogo from "./name-logo-address/name-logo-address";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nameLogo">
        <NameLogo />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="links">
        <Links />
      </div>
    </div>
  );
};

export default Footer;
