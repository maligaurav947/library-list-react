import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { GiNightSleep } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
function Header() {
  return (
    <>
      <header className="main-header bg-screen">
        <div className="main-header__logo">
          <p>LibraryL</p>
        </div>
        <div className="mian-header__list">
          <ul className="main-header__list__navbar">
            <Link to="/library-list-react/" exact>
              <li className="main-header__list__navbar__item">Home</li>
            </Link>
            <Link to="/library-list-react/List" exact>
              <li className="main-header__list__navbar__item">List</li>
            </Link>
            <Link to="/library-list-react/About" exact>
              <li className="main-header__list__navbar__item">About</li>
            </Link>
            <Link to="/library-list-react/Contact" exact>
              <li className="main-header__list__navbar__item">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="main-header__icon">
          <a
            href="https://github.com/maligaurav947/library-list-react"
            target={"_blank"}
          >
            <AiOutlineStar size={35} color="" />
          </a>
        </div>
        <div className="toogle">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={document.addEventListener("change", () => {
              document.body.classList.toggle("dark");
            })}
          />
          <label for="checkbox" className="label">
            <FiSun color="yellow" />
            <GiNightSleep color="pink" />
            <div className="ball"></div>
          </label>
        </div>
      </header>
    </>
  );
}

export default Header;
