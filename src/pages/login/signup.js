import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

class Sign extends Component {
  render() {
    return (
      <div className="loginBody">
        <h1>Sign Up</h1>
        <form action="" method="get" className="formlBody">
          <div className="form-ex">
            <label htmlFor="name">Enter your name </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-ex">
            <label htmlFor="email">Enter your Email Id </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Id"
              required
            />
          </div>
          <div className="form-ex">
            <label htmlFor="pswd">Password </label>
            <br />
            <input
              type="password"
              name="pswd"
              id="pswd"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-ex">
            <label htmlFor="rpswd">Confirm Password </label>
            <br />
            <input
              type="password"
              name="rpswd"
              id="rpswd"
              placeholder="Re-Enter Password"
              required
            />
          </div>
          <div className="log-button-flex">
            <div className="form-ex3">
              <input type="submit" value="Sign Up" />
            </div>
            <Link className="button-5" to="/Login">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Sign;
