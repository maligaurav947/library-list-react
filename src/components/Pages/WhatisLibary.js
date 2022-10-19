import React from "react";

function WhatisLibary() {
  return (
    <>
      <section className="main-what">
        <h2 className="section-title center">Why You Use Libary</h2>
        <main className="main-what">
          <div className="main-what__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ogg_vorbis_libs_and_application_dia.svg/675px-Ogg_vorbis_libs_and_application_dia.svg.png" />
          </div>
          <div className="main-what__text">
            <p className="main-what__text__info">
              In computer science, a library is a collection of non-volatile
              resources used by computer programs, often for software
              development. These may include configuration data, documentation,
              help data, message templates, pre-written code and subroutines,
              classes, values or type specifications. In IBM's OS/360 and its
              successors they are referred to as partitioned data sets. A
              library is also a collection of implementations of behavior,
              written in terms of a language, that has a well-defined interface
              by which the behavior is invoked. For instance, people who want to
              write a higher-level program can use a library to make system
              calls instead of implementing those system calls over and over
              again.
            </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default WhatisLibary;
