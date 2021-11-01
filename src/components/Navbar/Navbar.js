import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(props);

  function handleClick(event) {
    props.onSet({});
    window.localStorage.clear();
    console.log("working");
  }

  console.log(props.isUser);
  return (
    <nav className="NavbarItems navbar navbar-expand-md navbar-light">
      <div className="container-fluid ml-auto">
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
        </div>
        <ul className="navbar-nav ml-auto">
          {MenuItems.map((item, index) => {
            return (
              <li
                className="nav-item"
                key={index}
                onClick={index === 4 ? handleClick : null}
              >
                <Link
                  className={
                    props.isUser
                      ? index === 3
                        ? "hidden-button"
                        : item.cName
                      : index === 2 || index === 4 || index === 1
                      ? "hidden-button"
                      : item.cName
                  }
                  to={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
