import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>What we do</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../images/aerospace1.jpg"
              text="EXAMPLE"
              label="Aerospace"
              path="/contact"
            />
            <CardItem
              src="../images/airline.jpg"
              text="EXAMPLE"
              label="Airplane"
              path="/contact"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../images/Background1.jpg"
              text="EXAMPLE"
              label="Aerospace"
              path="/contact"
            />
            <CardItem
              src="../images/Background2.jpg"
              text="EXAMPLE"
              label="Adventure"
              path="/contact"
            />
            <CardItem
              src="../images/background3.jpg"
              text="EXAMPLE"
              label="Account"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
