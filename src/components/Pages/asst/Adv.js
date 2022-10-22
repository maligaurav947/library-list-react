import React from "react";

function Adv() {
  return (
    <>
      <div className="main-adv">
        <div className="main-adv__left">
          <div className="main-adv__left__text">
            <h3 className="main-adv__left__text__title">
              advantages of using libraries :-
            </h3>
            <p className="main-adv__left__text__info">
              <ul className="main-add__left__text__info__ul">
                <li className="main-add__left__text__info__ul__items">
                  <span className="bold">Domain expertise</span>: Authors are
                  usually experts in the domain covered by the library. This
                  will ensure that you will get the most appropriate
                  implementation. A good example is SharpMap. The main
                  committers are experts in geospacial software.
                </li>
                <li className="main-add__left__text__info__ul__items">
                  <span className="bold">Stability</span>: These libraries have
                  the big advantage of being used by other people as well as
                  you, and in many cases, hundreds if not many thousands of
                  developers worldwide. Most of the early problems have already
                  been encountered by others and fixed by authors. If they don’t
                  fix them, it’s a good opportunity for you to contribute and
                  give back to the community!
                </li>
                <li className="main-add__left__text__info__ul__items">
                  <span className="bold">Knowledge</span>: You will learn from
                  others’ code and design. Many popular libraries are written by
                  top notch developers and are usually great examples of good
                  coding practices and design. You will learn by just using
                  them.
                </li>
                <li className="main-add__left__text__info__ul__items">
                  <span className="bold">Finance</span>: You save tons of money.
                  The equivalent of hundreds if not thousands of man days of
                  work for free or, at the very worst, the cost of one man day
                  for commercial libraries.
                </li>
                <li className="main-add__left__text__info__ul__items">
                  <span className="bold">New features</span>: They will appear
                  automatically, without effort, in your product. If you are
                  using the reporting engine from vendor X, and vendor X
                  releases the new feature Y, you will be able to provide the
                  new Y feature to your customer at no cost, with very low
                  effort. You can consider the authors of your libraries as
                  other teams working for you, for free or for very little
                  money!
                </li>
                <li className="main-add__left__text__info__ul__items">
                  <span className="bold">Support</span>: Paid libraries usually
                  come with free support from top class developers that you can
                  contact 24h a day. Many developers of free libraries also
                  provide that level of support. Exposing your team to these
                  developers will be beneficial for them.
                </li>
                <p className="credit">
                  <a href="https://www.mindfulhacker.com/6-advantages-using-third-party-libraries-over-developing-your-own/">
                    ©mindfulhacker
                  </a>
                </p>
              </ul>
            </p>
          </div>
        </div>
        <div className="main-adv__right">
          <div className="main-adv__right__text">
            <h3 className="main-adv__right__text__title">
              disadvantage of using libraries :-
            </h3>
            <p className="main-adv__right__text__info">
              <ul className="main-add__right__text__info__ul">
                <li className="main-add__right__text__info__ul__items">
                  <span className="bold">Dependency</span> : Relying on a
                  third-party library means that your code is tied to that
                  library. If at some point, you are forced to switch libraries,
                  your code might have to undergo significant changes in order
                  to adapt it to the new library.
                </li>
                <li className="main-add__right__text__info__ul__items">
                  <span className="bold">Lack of Support</span> : Another
                  possible risk is that a library could be abandoned by its
                  author. This is especially problematic in platforms like
                  Android, where new versions come out frequently.
                </li>
                <li className="main-add__right__text__info__ul__items">
                  <span className="bold">Overuse</span> : Using too many
                  libraries can also cause problems, such as dependency
                  conflicts, which are hard to pinpoint and fix.
                </li>
                <li className="main-add__right__text__info__ul__items">
                  <span className="bold">Security Issues</span> : Last but not
                  least, the use of third-party libraries might raise some
                  security concerns as vulnerabilities in open source libraries
                  are increasingly targets for hackers.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adv;
