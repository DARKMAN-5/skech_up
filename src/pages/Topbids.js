import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topbids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 8,
      check: 0,
    };
  }

  render() {
    const address = "http://localhost:3000";
    return (
      <>
        <div className="Bids">
          {this.props.data.slice(0, this.state.count).map((item, index) => {
            return (
              <>
                <Link
                  key={"Topbidsbox" + index}
                  className="Topbidsbox"
                  to={{
                    pathname: `/itemdetail/${item._id}`,
                    stateUse: this.props.data,
                  }}
                >
                  <img
                    key={"im2" + index}
                    src={address + item.path}
                    alt={item.name}
                  ></img>
                  <div className="Pointer1" key={"Pointer1" + index}>
                    {" "}
                    <strong key={"strong1" + index}> {item.name}</strong>{" "}
                  </div>
                  <div className="Pointer2" key={"Pointer2" + index}>
                    <div>
                      {" "}
                      <strong key={"strong2" + index}>{item.__v}</strong>
                    </div>
                    <div key={"item.eth" + index}>{item.__v}</div>
                  </div>
                </Link>
              </>
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
