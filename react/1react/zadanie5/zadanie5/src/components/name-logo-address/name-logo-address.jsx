import "./name-logo-address.css";
import Data from "../data";

const NameLogo = () => {
  return (
    <div>
      <div className="companyName"><h2>{Data.company.name}</h2></div>
      <div className="logo">{Data.company.logo}</div>
      <div className="address1">{Data.company.addressLine1}</div>
      <div className="address2">{Data.company.addressLine2}</div>
    </div>
  );
};

export default NameLogo;
