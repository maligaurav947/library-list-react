import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
function Header() {
  return (
    <header className="main-header">
      <div className="main-header__logo">
        <p>Libary List</p>
      </div>
      <div className="mian-header__list">
        <ul className="main-header__list__navbar">
          <Link to="/">
            <li className="main-header__list__navbar__item">Home</li>
          </Link>
          <Link to="/list">
            <li className="main-header__list__navbar__item">List</li>
          </Link>
          <Link to="/about">
            <li className="main-header__list__navbar__item">About</li>
          </Link>
          <Link to="/contact">
            <li className="main-header__list__navbar__item">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="main-header__icon">
        <a href="https://github.com/maligaurav947/toy-shop" target={"_blank"}>
          <AiOutlineStar size={35} color="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
