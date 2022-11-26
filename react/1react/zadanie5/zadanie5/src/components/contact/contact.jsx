import "./contact.css";
import Socials from "./socials";

const Contact = ({data}) => {
  return (
    <div>
      <div>
        <h2>Contact</h2>
        <div className="phone">{data.phone} </div>
        <div className="mail">{data.mail}</div>
      </div>

      <div>
        <h2>Socials</h2>
        <Socials data={data} />
      </div>
    </div>
  );
};

export default Contact;
