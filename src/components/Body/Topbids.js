import React, { Component } from "react";
import { Topbidsdata } from "./Topbidsdata";

class Topbids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 8,
      check: 0,
    };
  }

  render() {
    return (
      <>
        <div className="Bids">
          {Topbidsdata.slice(0, this.state.count).map((item, index) => {
            return (
              <div key={"Topbidsbox" + index} className="Topbidsbox">
                <img
                  key={"im2" + index}
                  src={item.image}
                  alt={item.title}
                ></img>
                <div className="Pointer1" key={"Pointer1" + index}>
                  {" "}
                  <strong> {item.title}</strong>{" "}
                </div>
                <div className="Pointer2" key={"Pointer2" + index}>
                  <div>
                    {" "}
                    <strong>{item.eth}</strong>
                  </div>
                  <div key={item.eth + index}>{item.eth}</div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={this.state.check === 0 ? "Loadbutton" : "hidebutton"}
          onClick={() =>
            this.setState({
              count: this.state.count + 8,
              check: this.state.check + 1,
            })
          }
        >
          Load More
        </button>
        <button
          className={this.state.check === 1 ? "Loadbutton" : "hidebutton"}
          onClick={() =>
            this.setState({
              count: this.state.count - 8,
              check: this.state.check - 1,
            })
          }
        >
          Show Less
        </button>
      </>
    );
  }
}
export default Topbids;
