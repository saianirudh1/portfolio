import { useEffect, useState } from "react";
import classes from "./styles/contact.module.css";

export default function Contact() {
  const [transform, setTransform] = useState({});

  useEffect(() => {
    const transition = setTimeout(() => {
      setTransform({ transform: "none", opacity: 1 });
    }, 300);

    return () => {
      clearTimeout(transition);
    };
  }, []);

  return (
    <section className={classes.contact} style={transform}>
      <div className={classes.socials}>
        <a
          href="https://linkedin.com/in/sai-anirudh"
          rel="noreferrer"
          target="_blank"
        >
          <div className={`fa fa-linkedin-square ${classes.logo}`} />
        </a>
        <a
          href="https://github.com/saianirudh1"
          rel="noreferrer"
          target="_blank"
        >
          <div className={`fa fa-github ${classes.logo}`} />
        </a>
        <a
          href="https://www.instagram.com/__anirudh_/"
          rel="noreferrer"
          target="_blank"
        >
          <div className={`fa fa-instagram ${classes.logo}`} />
        </a>
      </div>
      <div className={classes["form-container"]}>
        <form
          action="https://formsubmit.co/b.anirudh10@gmail.com"
          method="POST"
          autoComplete="off"
          className={classes.form}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://bsaianirudh.com/thankyou"
          />
          <div className={classes["form-inputs"]}>
            <label>.setName()</label>
            <input type="text" name="name" required />
          </div>
          <div className={classes["form-inputs"]}>
            <label>.setEmail()</label>
            <input type="email" name="email" required />
          </div>
          <div className={classes["form-inputs"]}>
            <label>.setMessage()</label>
            <textarea
              type="text"
              name="messge"
              rows="8"
              cols="20"
              required
            ></textarea>
          </div>
          <button type="submit">send()</button>
        </form>
      </div>
    </section>
  );
}
