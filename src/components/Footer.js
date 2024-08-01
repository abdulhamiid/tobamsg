import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col justify-items-center items-center mx-[6%]">
      <div className="bg w-[100%] bg-[#e7f9fd] rounded-[50px]">
        <div className="flex flex-col gap-4 text-center  w-[100%] p-[70px]">
          <h2>Deliciousness to your inbox</h2>
          <p className="w-[49%] mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqut enim ad minim
            {' '}
          </p>
          <form>
            <input type="email" placeholder="Your email address..." className="bg-white px-5 py-8 m-7 rounded-[25px]" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <nav className="w-[100%]">
        <div className="flex w-[100%] justify-between items-center">
          <header className="flex flex-col gap-4 my-8">
            <h1 id="header"><Link to="/">Foodieland</Link></h1>
            <small className="text-gray-500">Lorem ipsum dolor sit amet, consectetuipisicing elit, </small>
          </header>
          <ul className="nav-links">
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
        </div>
      </nav>
      <div className="flex justify-between items-center w-[50%] mx-auto my-12">
        <p>
          © 2020 Flowbase. Powered by
          {' '}
          <span className="text-[#ff6363]"> Webflow</span>
        </p>
        <ul className="flex justify-items-center items-center gap-8">
          <li>
            <a href="#">
              <img src="001-facebook.svg" alt="fb" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="003-twitter.svg" alt="X" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="instagram.svg" alt="intagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
