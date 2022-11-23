// import React from "react";
import "./cardSection.css";

const CardSection = (props) => {
  return (
    <div className="card">
      <div className="card-icon"><img src={props.icon} alt="card-icon"></img></div>
      <div className="card-topic"><h1>{props.topic}</h1></div>
      <div className="card-p"><p>{props.p}</p></div>
      <div className="card-button"><button className="button">Learn More</button></div>
    </div>
  );
};

export default CardSection;
