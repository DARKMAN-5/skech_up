import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i className="fab fa-react"></i> Sketch UP
        </h1>

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
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
