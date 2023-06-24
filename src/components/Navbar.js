import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="logo">My Website</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
