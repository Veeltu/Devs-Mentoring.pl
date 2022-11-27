// import React from "react";
import "./fullCard.css";
import "../cardSection/cardSection.jsx";
import CardSection from "../cardSection/cardSection.jsx";
import { Data } from "../data/data";

const FullCard = () => {
  // TODO: Zmienic na map

  return (
    <div className="fullCard">
      {Data.map((el) => (
        <CardSection
          id={el.name}
          key={el.name}
          topic={el.name}
          icon={el.icon}
          p={el.p}
        ></CardSection>
      ))}
    </div>
  );
};

export default FullCard;
