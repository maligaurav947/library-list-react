import { React } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import data from "./asst/Libarydata";
function PopularList() {
  return (
    <>
      <div className="main-popular bg-screen">
        <h2 className="section-title">Here Are Some Popular Libary</h2>
        <div className="main-popular__div">
          <div className="main-libary__list__item__items__div" key={data[0].id}>
            <div className="main-libary__list__item__items__div__cat">
              <h2>{data[0].cat}</h2>
            </div>
            <h3 className="main-libary__list__item__items__div__title">
              {data[0].title}
            </h3>
            <p className="main-libary__list__item__items__div__info">
              {data[0].info}
            </p>
            <a
              className="main-libary__list__item__items__div__button"
              href={data[0].link}
              target={"_blank"}
            >
              Learn More
              <HiOutlineArrowNarrowRight />
            </a>
          </div>

          <div className="main-libary__list__item__items__div" key={data[3].id}>
            <div className="main-libary__list__item__items__div__cat">
              <h2>{data[3].cat}</h2>
            </div>
            <h3 className="main-libary__list__item__items__div__title">
              {data[3].title}
            </h3>
            <p className="main-libary__list__item__items__div__info">
              {data[3].info}
            </p>
            <a
              className="main-libary__list__item__items__div__button"
              href={data[3].link}
              target={"_blank"}
            >
              Learn More
              <HiOutlineArrowNarrowRight />
            </a>
          </div>
          <div className="main-libary__list__item__items__div" key={data[7].id}>
            <div className="main-libary__list__item__items__div__cat">
              <h2>{data[7].cat}</h2>
            </div>
            <h3 className="main-libary__list__item__items__div__title">
              {data[7].title}
            </h3>
            <p className="main-libary__list__item__items__div__info">
              {data[7].info}
            </p>
            <a
              className="main-libary__list__item__items__div__button"
              href={data[7].link}
              target={"_blank"}
            >
              Learn More
              <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </div>
        <div className="btn-group">
          <Link to="/library-list-react/List">
            <button className="button-17">Load More</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PopularList;
