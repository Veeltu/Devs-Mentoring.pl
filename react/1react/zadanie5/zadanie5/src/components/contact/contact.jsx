import "./contact.css";
import Socials from "./socials";
import Data from "../data";

const Contact = () => {
  return (
    <div>
      <div>
        <h2>Contact</h2>
        <div className="phone">{Data.company.phone} </div>
        <div className="mail">{Data.company.mail}</div>
      </div>

      <div>
        <h2>Socials</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
