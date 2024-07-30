import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <header>
          <h1><Link to="/">Foodieland</Link></h1>
        </header>
        <ul className="navbar">
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
        <ul>
            <li>
                <a>
                    <img src="001-facebook.svg" />
                </a>
            </li>
            <li>
                <a>
                    <img src="003-twitter.svg" />
                </a>
            </li>
            <li>
                <a>
                    <img src="004-instagram.svg" />
                </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;