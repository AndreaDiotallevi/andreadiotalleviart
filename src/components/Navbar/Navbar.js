import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);
  const getClassName = (route) => {
    if (props.location.pathname === "/") {
      return "home";
    }
  };

  return (
    <div id="navbar-component" className={`navbar-component ${getClassName()}`}>
      <div id="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <h1 id="navbar-title" className={`navbar-title ${getClassName()}`}>
              ANDREA DIOTALLEVI
            </h1>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/portfolio">
            <p
              id="navbar-portfolio"
              className={`navbar-text ${getClassName()}`}
            >
              Dev Portfolio
            </p>
          </Link>
          <a
            href="https://medium.com/@andreadiotallevi"
            target="_blank"
            rel="noopener noreferrer"
            className={`blog-link ${getClassName()}`}
          >
            Blog
          </a>
          <Link to="/art">
            <p id="navbar-artworks" className={`navbar-text ${getClassName()}`}>
              Generative Art
            </p>
          </Link>
          <Link to="/contact">
            <p id="navbar-contact" className={`navbar-text ${getClassName()}`}>
              Contact
            </p>
          </Link>
          {/* <Link to="/">
            <p id="navbar-home" className={`navbar-text ${getClassName("/")}`}>
              Home
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
