import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div id="navbar">
        <header>
          <h1 id="header">
            <Link to="/">
              Foodieland
              <span className="text-[#ff6363]">.</span>
            </Link>
          </h1>
        </header>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <a href="#">
              <img src="001-facebook.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="003-twitter.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="instagram.svg" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
