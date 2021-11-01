import React from "react";
import "./Body.css";
import mainImage from "./img/1.jpg";
import Carousel1 from "./Carousel1";
import Topbids from "../Topbids";
// import axios from "axios";

function Body(props) {
  console.log(props.art);
  return (
    <div className="mainBody">
      <div className="upperBody">
        <img className="frontimg" src={mainImage} alt="fireSpot" />
      </div>
      <div className="middleBody">
        <h1>
          <strong>Top Sellers</strong>
        </h1>
        <Carousel1 />
      </div>
      <div className="lowerBody">
        <h1>
          <strong>Hot Bids</strong>
        </h1>
        {props.art ? <Topbids data={props.art.art} /> : null}
      </div>
    </div>
  );
}

export default Body;
