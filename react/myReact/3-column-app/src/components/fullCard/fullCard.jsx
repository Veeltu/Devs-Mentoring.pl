// import React from "react";
import "./fullCard.css";
import "../cardSection/cardSection.jsx";
import CardSection from "../cardSection/cardSection.jsx";
import { Data } from "../data/data";
import imgSedans from "../images/icon-sedans.svg"
import imgLuxury from "../images/icon-luxury.svg"
import imgSuvs from '../images/icon-suvs.svg'


const FullCard = () => {
  const topic = Data.map((e) => e.name)
  const p = Data.map((e) => e.p)

  return (
    <div className="fullCard">
      <div className="card card1">
        <CardSection topic={topic[0]} icon={imgSedans} p={p[0]} />
      </div>
      <div className="card card2">
        <CardSection topic={topic[1]} icon={imgLuxury} p={p[1]} />
      </div>
      <div className="card card3">
        <CardSection topic={topic[2]} icon={imgSuvs} p={p[2]} />
      </div>
    </div>
  );
};

export default FullCard;
