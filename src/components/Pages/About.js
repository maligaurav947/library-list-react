import React from "react";
import Fotter from "./asst/Fotter";
import Header from "../Pages/asst/Header";

function About() {
  return (
    <>
      <Header />
      <main className="main-about">
        <div className="main-about__img">
          <img
            src="https://blush.design/api/download?shareUri=DmVD0iHRBSOOrYtb&c=Skin_0%7Eedb98a&w=800&h=800&fm=png"
            alt="Its Me"
          />
        </div>
        <div className="main-about__text">
          <h3 className="section-title">Mali Gaurav</h3>
          <p className="main-about__text__info">
            My name is Mali Gaurav Bhausaheb I have completed my diploma in
            computer engineering and currently pursuing my BTech in computer
            engineering at Jayakumar college of engineering and technology in my
            BTech college every two or three year they host completion called
            Who is Best And I Have Nominated For First Price For Best Website. I
            have worked as a lead generation executive at MSys Technologies for
            around 1 year in that Experience I have learned more about the
            industry & how things Work On a Big Level and in that one year of
            experience I have also gained marketing skills. and lastly i have
            chose web developement because you can talk to your customer without
            really talking to them this think that keep me pushing. Thank You
          </p>
        </div>
      </main>
      <Fotter />
    </>
  );
}

export default About;
