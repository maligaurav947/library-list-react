import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

function Header() {
  return (
    <>
      <header className="main-header bg-screen">
        <div className="main-header__logo">
          <p>LibraryL</p>
        </div>
        <div className="mian-header__list">
          <ul className="main-header__list__navbar">
            <Link to="/" exact>
              <li className="main-header__list__navbar__item">Home</li>
            </Link>
            <Link to="/List" exact>
              <li className="main-header__list__navbar__item">List</li>
            </Link>
            <Link to="/About" exact>
              <li className="main-header__list__navbar__item">About</li>
            </Link>
            <Link to="/Contact" exact>
              <li className="main-header__list__navbar__item">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="main-header__icon">
          <a
            href="https://github.com/maligaurav947/library-list-react"
            target={"_blank"}
          >
            <AiOutlineStar size={35} color="blue" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
