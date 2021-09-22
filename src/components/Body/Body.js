import React, { Component } from "react";
import "./Body.css";
import mainImage from "./1.jpg";
import Carousel1 from "./Carousel1";
import Topbids from "./Topbids";

class Body extends Component {
  render() {
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
          <Topbids />
        </div>
      </div>
    );
  }
}

export default Body;
