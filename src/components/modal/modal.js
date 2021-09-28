import React, { Component } from "react";
import "./modal.css";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-bg">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Check Out
                </h5>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row modal-row1">
                    <div className="col-md-9">
                      <strong>Item</strong>
                    </div>
                    <div
                      className="col-md-3 ms-auto ml-auto"
                      style={{ textAlign: "right" }}
                    >
                      <strong>Subtotal</strong>
                    </div>
                  </div>
                  <div className="row modal-row1">
                    <div className="col-md-9">
                      <img
                        className="modal-buy-img"
                        src={this.state.image}
                        alt="art"
                      />
                      <div>
                        <strong>{this.state.title}</strong>
                      </div>
                      <div>{this.state.title}</div>
                    </div>
                    <div
                      className="col-md-3 ms-auto ml-auto"
                      style={{ textAlign: "right" }}
                    >
                      {this.state.eth}
                    </div>
                  </div>
                  <div className="row modal-row1">
                    <div className="col-md-9">
                      <strong>Total</strong>
                    </div>
                    <div
                      className="col-md-3 ms-auto ml-auto"
                      style={{ textAlign: "right" }}
                    >
                      {this.state.eth}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn buy-button"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  className="btn offer-button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-bg">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel2">
                  Payment Successful
                </h5>
              </div>
              <div className="modal-body" style={{ textAlign: "center" }}>
                <img
                  className="modal-buy-img1"
                  src={this.state.image}
                  alt="art"
                  style={{ margin: "2% 0% 5%" }}
                />
                <div style={{ width: "70%", margin: "0 auto" }}>
                  You Successfully purchased <strong>{this.state.title}</strong>{" "}
                  form <strong>{this.state.title}</strong>.
                </div>
              </div>
              <div className="modal-footer">
                <h5
                  className="col-12"
                  style={{ textAlign: "center", margin: "2% 0% 5%" }}
                >
                  Share
                </h5>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-telegram-plane fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;