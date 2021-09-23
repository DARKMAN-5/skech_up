import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navbar-logo">
            <i className="fab fa-react"></i> Sketch UP
          </h1>
        </Link>

        <div className="wrapper">
          <i className="fa fa-search fa-lg search-icon" aria-hidden="true"></i>
          <input
            className="search"
            placeholder="Search Item here"
            type="text"
          />
          {/* <i className="fa fa-times fa-lg clear-icon" aria-hidden="true"></i> */}
        </div>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
