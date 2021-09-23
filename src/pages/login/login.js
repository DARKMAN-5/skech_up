import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="loginBody">
        <h1>Connect</h1>
        <form action="" method="get" className="formlBody">
          <div className="form-ex">
            <label htmlFor="name">Enter your name </label>
            <br />
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form-ex">
            <label htmlFor="email">Enter your Email Id </label>
            <br />
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-ex">
            <label htmlFor="pswd">Password </label>
            <br />
            <input type="password" name="pswd" id="pswd" required />
          </div>
          <div className="form-ex">
            <label htmlFor="rpswd">Re-Enter Password </label>
            <br />
            <input type="password" name="rpswd" id="rpswd" required />
          </div>
          <div className="form-ex1">
            <input type="submit" value="Connect" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
