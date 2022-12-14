import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import data from "./asst/Libarydata";
import Header from "../Pages/asst/Header";
import Fotter from "./asst/Fotter";
function LibaryList() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <section className="main-libary bg-screen">
        <main className="main-libary__search">
          <input
            name="name"
            className="main-libary__search__input"
            id="searchinput"
            pattern="[a-z]*"
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="main-libary__search__list">
            <div className="main-libary__search__list__div">Popular</div>
            <div className="main-libary__search__list__div">visualization</div>
            <div className="main-libary__search__list__div">animation</div>
            <div className="main-libary__search__list__div">DataBase</div>
            <div className="main-libary__search__list__div">Graphical</div>
          </div>
        </main>
        <main className="main-libary__list">
          <div className="main-libary__list__item">
            <div className="main-libary__list__item__items">
              {data
                .filter((data) => data.title.toLowerCase().includes(query))
                .map((data) => (
                  <div
                    className="main-libary__list__item__items__div"
                    key={data.id}
                  >
                    <div className="main-libary__list__item__items__div__cat">
                      <h2>{data.cat}</h2>
                    </div>
                    <h3 className="main-libary__list__item__items__div__title">
                      {data.title}
                    </h3>
                    <p className="main-libary__list__item__items__div__info">
                      {data.info}
                    </p>
                    <a
                      className="main-libary__list__item__items__div__button"
                      href={data.link}
                      target={"_blank"}
                    >
                      Learn More
                      <HiOutlineArrowNarrowRight className="move" />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </section>
      <Fotter />
    </>
  );
}

export default LibaryList;
