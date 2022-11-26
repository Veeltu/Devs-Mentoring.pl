import Contact from "./contact/contact";
import React from "react";
import Links from "./links/links";
import NameLogo from "./name-logo-address/name-logo-address";
import "./footer.css";
import Data from "./data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nameLogo">
        <NameLogo data={Data.company} socials={Data.socials}/>
      </div>
      <div className="contact">
        <Contact data={Data.socials}/>
      </div>
      <div className="links">
        <Links data={Data.links}/>
      </div>
    </div>
  );
};

export default Footer;
