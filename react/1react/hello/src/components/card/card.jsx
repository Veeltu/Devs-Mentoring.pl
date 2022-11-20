import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="background">
      <img src={props.backgroundImg} alt="img" id="img" />
      <div className="card">
        <div className="person">
          <h2>{`${props.name} ${props.surname}`}</h2>
          <div className="avatar-div">
            <img
              className="avatar"
              src={props.avatar}
              alt="avatar"
              id="avatar"
            ></img>
          </div>
        </div>
        <div className="line"></div>
        <div className="rewards">
          <h2>Rewards</h2>
          <div className="medals">
            <div className="medals-bronze">
              <div className="number">
                <h1>{props.bronze}</h1>
              </div>
              <div className="number-text">Bronze</div>
            </div>
            <div className="medals-silver">
              <div className="number">
                <h1>{props.silver}</h1>
              </div>
              <div className="number-text">Silver</div>
            </div>
            <div className="medals-gold">
              <div className="number">
                <h1>{props.gold}</h1>
              </div>
              <div className="number-text">Gold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
