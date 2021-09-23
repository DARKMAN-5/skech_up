import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { Topsellerdata } from "./Topsellerdata";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 150, itemsToShow: 2 },
  { width: 300, itemsToShow: 3 },
  { width: 450, itemsToShow: 4 },
  // { width: 600, itemsToShow: 5 },
];

class Carousel1 extends Component {
  render() {
    return (
      <>
        <div className="carousel">
          <Carousel breakPoints={breakPoints}>
            {Topsellerdata.map((item, index) => {
              return (
                <div className="topsellerbox" key={"topsellerbox" + index}>
                  <div className="Pointer" key={"Pointer" + index}>
                    {index + 1}
                  </div>
                  <img
                    key={"im" + index}
                    src={item.image}
                    alt={item.title}
                  ></img>
                  <div key={"item.title" + index}>
                    {" "}
                    <strong> {item.title}</strong>{" "}
                  </div>
                  <div key={"item.eth" + index}>{item.eth}</div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </>
    );
  }
}
export default Carousel1;
