import React, { Component } from "react";
import bck2 from "./Body/img/parag2.jpg";
import { Modal } from "../components/modal/modal";

class Itemdeatail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.location.props.title,
      url: this.props.location.props.url,
      image: this.props.location.props.image,
      eth: this.props.location.props.eth,
      cName: this.props.location.props.cName,
    };
  }

  render() {
    return (
      <>
        <div className="mainBody">
          <div className="item-detail-align">
            <img
              src={this.state.image}
              alt="myname"
              className="item-detail-image"
            />
            <span className="item-detail-part2">
              <h2>{this.state.title}</h2>
              <h6>Creater</h6>
              <div className="inner-item-detail-part2">
                <img src={bck2} alt="myname" className="item-user-profile" />
                <h5>Parag Thakre</h5>
              </div>
              <h4>Detail</h4>
              <h4>Offers</h4>
              <h4>History</h4>
              <hr />
              <p className="item-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit iste sapiente alias harum? Soluta voluptatem labore
                fugiat, ipsa, praesentium magni laudantium deserunt pariatur sit
                odio exercitationem mollitia facere ipsam illum!
              </p>
              <p className="item-offer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit iste sapiente alias harum? Soluta voluptatem labore
                fugiat, ipsa, praesentium magni laudantium deserunt pariatur sit
                odio exercitationem mollitia facere ipsam illum!
              </p>

              <p className="item-history">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit iste sapiente alias harum? Soluta voluptatem labore
                fugiat, ipsa, praesentium magni laudantium deserunt pariatur sit
                odio exercitationem mollitia facere ipsam illum!
              </p>
              <div className="bottom-item-detail-part2">
                <div
                  className="buy-button"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Buy the Art
                </div>
                <div className="offer-button">Make Offer</div>
                <Modal data={this.state} />
              </div>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Itemdeatail;
