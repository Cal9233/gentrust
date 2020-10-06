import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import pic1 from "../images/img-1.jpg";
import pic2 from "../images/img-2.jpg";
import pic3 from "../images/img-3.jpg";
import pic4 from "../images/img-4.jpg";
import pic5 from "../images/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>What we do</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pic1}
              text="EXAMPLE"
              label="Aerospace"
              path="/contact"
            />
            <CardItem
              src={pic2}
              text="EXAMPLE"
              label="Airplane"
              path="/contact"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={pic3}
              text="EXAMPLE"
              label="Aerospace"
              path="/contact"
            />
            <CardItem
              src={pic4}
              text="EXAMPLE"
              label="Adventure"
              path="/contact"
            />
            <CardItem
              src={pic5}
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
