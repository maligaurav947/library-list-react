import React from "react";
import Header from "./Header";
import PopularList from "./PopularList";
import WhatisLibary from "./WhatisLibary";

function Home() {
  return (
    <>
      <Header />
      <section className="main-home">
        <main className="main-home__main">
          <div className="main-home__main__text">
            <h2 className="main-home__main__text__title section-title">
              Libary List
            </h2>
            <p className="main-home__main__text__info section-info">
              In computer science, a library is a collection of non-volatile
              resources used by computer programs, often for software
              development. These may include configuration data, documentation,
              help data, message templates, pre-written code and subroutines,
              classes, values or type specifications.
            </p>
            <button className="button-17">Learn More</button>
          </div>
          <div className="main-home__main__img">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-trobe-reading-room-of-state-library-of-victoria-royalty-free-image-1654023827.jpg" />
          </div>
        </main>
      </section>
      <PopularList />
      <WhatisLibary />
    </>
  );
}

export default Home;
