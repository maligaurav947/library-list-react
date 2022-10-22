import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import Fotter from "./asst/Fotter";
import Header from "./asst/Header";
function ContactForm() {
  const [state, handleSubmit] = useForm("xknevayw");
  if (state.succeeded) {
    return (
      <div className="after-submit">
        <p>Thanks for joining!</p>
        <Link to="/library-list-react/" exact>
          <button type="submit" className="button-17">
            Home
          </button>
        </Link>
      </div>
    );
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
            <div>Email:</div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="main-contact__form__input">
            <div> Message:</div>
            <textarea id="message" name="message" placeholder="Your Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="button-17"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </main>
      <Fotter />
    </>
  );
}
export default ContactForm;
