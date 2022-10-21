import React from "react";
import Fotter from "./asst/Fotter";
import Header from "./asst/Header";
const done = document.getElementById("done");
function Contact() {
  function handleSubmit() {
    done.style.display = "block";
  }
  return (
    <>
      <Header />

      <main className="main-contact">
        <div className="main-contact__img">
          <img src="https://blush.design/api/download?shareUri=krBWItBK9TCncKDf&c=Clothing_0%7E02bad3-0.2%7E02bad3-0.3.0.0.2.0%7Eff8333&w=800&h=800&fm=png" />
        </div>
        <form className="main-contact__form" onSubmit={handleSubmit}>
          <div className="main-contact__form__input">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              id="input"
              className="main-contact__form__input__name"
              required
            />
          </div>
          <div className="main-contact__form__input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="main-contact__form__input__email"
              required
            />
          </div>
          <div className="main-contact__form__input">
            <textarea
              placeholder="Your message"
              name="message"
              className="main-contact__form__input__message"
              required
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="button-17">
              Send
            </button>
          </div>
          <div className="aftersubmting" id="done">
            <p>Thank you!</p>
            <p>We'll be in touch soon.</p>
          </div>
        </form>
      </main>
      <Fotter />
    </>
  );
}

export default Contact;
