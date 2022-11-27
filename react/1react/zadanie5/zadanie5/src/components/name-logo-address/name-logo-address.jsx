import "./name-logo-address.css";

const NameLogo = ({data}) => {
  return (
    <div>
      <div className="companyName"><h2>{data.name}</h2></div>
      <div className="logo">{data.logo}</div>
      <div className="address1">{data.addressLine1}</div>
      <div className="address2">{data.addressLine2}</div>
    </div>
  );
};

export default NameLogo;
