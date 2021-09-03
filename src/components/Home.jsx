import { Fragment, useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ThemeContext } from "../context/theme-context";

import ReactLogo from "./resources/ReactLogo";
import NextLogo from "./resources/NextLogo";
import ReduxLogo from "./resources/ReduxLogo";
import JavaScriptLogo from "./resources/JavaScripitLogo";
import TypeScriptLogo from "./resources/TypeScriptLogo";
import HtmlLogo from "./resources/HtmlLogo";
import CssLogo from "./resources/CssLogo";
import SassLogo from "./resources/SassLogo";
import AndroidLogo from "./resources/AndroidLogo";
import Java from "./resources/JavaLogo";
import SpringLogo from "./resources/SpringLogo";
import KotlinLogo from "./resources/KotlinLogo";

import classes from "./styles/index.module.css";

const texts = [
  { text: "Software Developer", article: "a", curr: 0, next: 1 },
  { text: "Full-Stack Developer", article: "a", curr: 1, next: 2 },
  { text: "Android Developer", article: "an", curr: 2, next: 3 },
  { text: "from India! 🙏", article: "", curr: 3, next: 0 },
];

export default function Home() {
  const theme = useContext(ThemeContext).theme;
  const [spanObject, setSpanObject] = useState(texts[0]);
  const [translate, setTranslate] = useState({ transform: "translateY(5%)" });

  const sectionTwoAnimation = function () {
    const sectionTimeline = gsap.timeline({
      defaults: { duration: 1 },
    });

    sectionTimeline
      .from(`.${classes.title}`, {
        opacity: 0,
        rotateX: 90,
        x: 40,
        translateY: -50,
        translateX: 35,
        duration: 1,
      })
      .from(`.${classes["description-title"]}`, {
        opacity: 0,
        rotateX: 90,
        x: 40,
        translateY: -50,
        translateX: 35,
        duration: 1,
      })
      .from(`.${classes["description-text"]}`, {
        opacity: 0,
        rotateX: 90,
        x: 40,
        translateY: -50,
        translateX: 35,
        duration: 1,
      })
      .from(`.${classes["skills-container"]}`, {
        opacity: 0,
        rotateX: 90,
        x: 40,
        translateY: -50,
        translateX: 35,
        duration: 1,
      })
      .from(`.${classes.skills}`, {
        opacity: 0,
        rotateX: 90,
        x: 40,
        translateY: -50,
        translateX: 35,
        duration: 1,
      });
  };

  useEffect(() => {
    sectionTwoAnimation();
    const timer = setTimeout(() => {
      setTranslate({ transform: "none" });
      setInterval(() => {
        setSpanObject((spanObject) => texts[spanObject.next]);
      }, 6250);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [setSpanObject]);

  return (
    <Fragment>
      <section className={classes["section-1"]} style={translate}>
        <div className={`${classes.border} ${classes[`${theme}-border`]}`} />
        <div className={classes["greeting-container"]}>
          <h2 className={classes.greeting}>hello there! I'm Anirudh.</h2>
          <div className={classes.header}>
            <div className={classes["static-text"]}>
              <h2>
                I'm <span>{spanObject.article}</span>
              </h2>
            </div>
            <ul>
              <li>
                <span
                  className={classes["dynamic-text"]}
                  data-item={spanObject.curr}
                >
                  {spanObject.text}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${classes.border} ${classes[`${theme}-border`]}`}
          style={{ transform: "rotate(0.5turn)" }}
        />
      </section>
      <section className={classes.content}>
        <div className={classes["experience-container"]}>
          <h2 className={classes.title}>{".experience[ "}</h2>
          <div className={classes.description}>
            <h3 className={classes["description-title"]}>
              tcs :<br />
              {"{"}
            </h3>
            <p className={classes["description-text"]}>
              years: "2019-present", <br />
              <br /> summary: "Since the last two years I have helped{" "}
              <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">
                @tcs
              </a>{" "}
              to satisfy multiple clients by building reliable back-end and
              front-end systems"
            </p>
            <h3 className={classes["description-title"]}>{"}"}</h3>
          </div>
          <h2 className={classes.title}>{"]"}</h2>
        </div>
        <div className={classes["skills-container"]}>
          <h2 className={classes.title}>{".skills( ) {"}</h2>
          <div className={classes.skills}>
            <ReactLogo className={classes.img} />
            <ReduxLogo className={classes.img} />
            <NextLogo className={classes.img} />
            <JavaScriptLogo className={classes.img} />
            <TypeScriptLogo className={classes.img} />
            <HtmlLogo className={classes.img} />
            <CssLogo className={classes.img} />
            <SassLogo className={classes.img} />
            <AndroidLogo className={classes.img} />
            <Java className={classes.img} />
            <SpringLogo className={classes.img} />
            <KotlinLogo className={classes.img} />
          </div>
          <h2 className={classes.title}>{"}"}</h2>
        </div>
      </section>
    </Fragment>
  );
}
