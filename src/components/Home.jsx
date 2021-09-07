import { Fragment, useContext, useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
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

import photo from "../img/photo3.jpg";

import classes from "./styles/home.module.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const initialSpanAnimation = {
  crypto: { animation: "none" },
  ball: { animation: "none" },
};

export default function Home() {
  const theme = useContext(ThemeContext).theme;
  const [translate, setTranslate] = useState({ transform: "translateY(5%)" });
  const [opacity, setOpacity] = useState({ opacity: 0 });
  const [spanAnimation, setAnimation] = useState(initialSpanAnimation);

  useEffect(() => {
    const sectionTimeline = gsap.timeline({
      defaults: { duration: 1 },
    });

    const animation = {
      opacity: 0,
      rotateX: 90,
      x: 40,
      translateY: -50,
      translateX: 35,
      duration: 1,
    };

    const mobile = function () {
      sectionTimeline
        .fromTo(
          `.${classes.scroll}`,
          {
            opacity: 1,
          },
          {
            duration: 1,
            opacity: 0,
          }
        )
        .from(`.${classes["summary-title"]}`, {
          duration: 1,
          ...animation,
        })
        .from(`.${classes["summary-description"]}`, {
          duration: 1,
          ...animation,
        })
        .to(`.${classes.profile}`, {
          duration: 1,
          opacity: 1,
          y: 0,
        })
        .from(`.${classes["experience-title"]}`, {
          duration: 1,
          ...animation,
        })
        .from(`.${classes.description}`, {
          duration: 1,
          ...animation,
        })
        .from(`.${classes.title}`, {
          duration: 1,
          ...animation,
        })
        .from(`.${classes.skills}`, {
          duration: 1,
          opacity: 0,
        })
        .from(`.${classes["interests-title"]}`, {
          duration: 1,
          ...animation,
        })
        .from(`.${classes.interests}`, { duration: 1, ...animation });
    };

    const desktop = function () {
      sectionTimeline
        .fromTo(
          `.${classes.scroll}`,
          {
            opacity: 1,
          },
          {
            duration: 1,
            opacity: 0,
            scrollTrigger: {
              toggleActions: "play none none reset",
            },
          }
        )
        .from(`.${classes["summary-title"]}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes["summary-title"]}`,
            start: "top-=200 center",
            end: "bottom center",
            scrub: true,
          },
        })
        .from(`.${classes["summary-description"]}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes["summary-description"]}`,
            start: "top-=200 center",
            end: "bottom center",
            scrub: true,
          },
        })
        .to(`.${classes.profile}`, {
          duration: 1,
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: `.${classes.profile}`,
            toggleActions: "play none none reset",
            start: "top center",
            end: "bottom center",
          },
        })
        .from(`.${classes["experience-title"]}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes["experience-title"]}`,
            start: "top-=350 center",
            end: "bottom center",
            scrub: true,
          },
        })
        .from(`.${classes.description}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes.description}`,
            start: "top-=250 center",
            end: "bottom-=100 center",
            scrub: true,
          },
        })
        .from(`.${classes.title}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes.title}`,
            start: "top-=350 center",
            end: "bottom-=200 center",
            scrub: true,
          },
        })
        .from(`.${classes.skills}`, {
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: `.${classes.skills}`,
            toggleActions: "play none none reset",
            start: "top-=350 center",
          },
        })
        .from(`.${classes["interests-title"]}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes["interests-title"]}`,
            start: "top-=300 center",
            end: "bottom center",
            scrub: true,
          },
        })
        .from(`.${classes.interests}`, {
          duration: 1,
          ...animation,
          scrollTrigger: {
            trigger: `.${classes.interests}`,
            start: "top-=300 center",
            end: "bottom-=100 center",
            scrub: true,
          },
        });
    };

    ScrollTrigger.matchMedia({
      "(min-width: 810px)": function () {
        desktop();
        return mobile;
      },

      "(max-width: 810px)": function () {
        mobile();
        return desktop;
      },
    });

    const timer = setTimeout(() => {
      setTranslate({ transform: "none" });
      setOpacity({ opacity: 1 });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const addAnimation = function (e) {
    const selector = e.target.dataset.name;

    let newAnimation = {};
    let time = 0;
    if (selector === "crypto") {
      newAnimation = {
        ...spanAnimation,
        crypto: { animation: `${classes.toTheMoon} 2.5s linear` },
      };

      time = 2600;

      setAnimation(newAnimation);
    }

    if (selector === "ball") {
      newAnimation = {
        ...spanAnimation,
        ball: { animation: `${classes.ball} 1s linear forwards` },
      };

      time = 1500;

      setAnimation(newAnimation);
    }

    setTimeout(() => {
      setAnimation(initialSpanAnimation);
    }, time);
  };

  return (
    <Fragment>
      <section className={classes["section-1"]} style={translate}>
        <div className={`${classes.border} ${classes[`${theme}-border`]}`} />
        <div className={classes["greeting-container"]}>
          <h2 className={classes.greeting}>hello there! I'm Anirudh.</h2>
          <div className={classes.header}>
            <div className={classes["static-text"]}>
              <h2>I'm</h2>
            </div>
            <ul>
              <li>
                <Typewriter
                  options={{
                    strings: [
                      "",
                      "a Software Developer",
                      "a Full-Stack Developer",
                      "an Android Developer",
                      "from India!",
                    ],
                    autoStart: true,
                    pauseFor: 1500,
                    loop: true,
                    wrapperClassName: classes["dynamic-text"],
                    cursorClassName: classes["dynamic-cursor"],
                  }}
                />
              </li>
            </ul>
          </div>
          <div className={classes.scroll}>
            <h2 className={classes["scroll-content"]} style={opacity}>
              Scroll Down <span>&#x5e;</span>
            </h2>
          </div>
        </div>
        <div
          className={`${classes.border} ${classes[`${theme}-border`]}`}
          style={{ transform: "rotate(0.5turn)" }}
        />
      </section>
      <section>
        <div className={classes.content}>
          <div className={classes["about-container"]}>
            <h2 className={classes["summary-title"]}>{".about( ) {"}</h2>
            <p className={classes["summary-description"]}>
              I'm an experienced software engineer who constantly seeks out
              innovative solutions to everyday problems. In my years in this
              industry, I've honed my analytical thinking and collaboration
              skills, and I love working with a team. I also dedicate my time to
              learn new technologies whenever I can.
            </p>
            <h2 className={classes["summary-title"]}>{"}"}</h2>
          </div>
          <div className={classes["experience-container"]}>
            <h2 className={classes["experience-title"]}>{".experience [ "}</h2>
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
            <h2 className={classes["experience-title"]}>{"]"}</h2>
          </div>
          <div className={classes.profile}>
            <img
              className={classes["profile-pic"]}
              src={photo}
              alt="Sai Anirudh"
            />
          </div>
        </div>
        <div className={classes["skills-container"]}>
          <h2 className={classes.title}>{".skills ["}</h2>
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
          <h2 className={classes.title}>{"]"}</h2>
        </div>
        <div className={classes["interests-container"]}>
          <h2 className={classes["interests-title"]}>{".interests ["}</h2>
          <ul className={classes.interests}>
            <li>
              <h3>
                Cryptocurrenices{" "}
                <span
                  className={classes.crypto}
                  onMouseEnter={addAnimation}
                  style={spanAnimation.crypto}
                  data-name="crypto"
                >
                  🚀
                </span>
              </h3>
            </li>
            <li>
              <h3>
                Stocks <span>📈</span>
              </h3>
            </li>
            <li>
              <h3>
                Gaming <span>🎮</span>
              </h3>
            </li>
            <li>
              <h3>
                Music <span>🎵</span>
              </h3>
            </li>
            <li>
              <h3>
                Basketball{" "}
                <span
                  className={classes.ball}
                  onMouseEnter={addAnimation}
                  style={spanAnimation.ball}
                  data-name="ball"
                >
                  🏀
                </span>
              </h3>
            </li>
          </ul>
          <h2 className={classes["interests-title"]}>{"]"}</h2>
        </div>
      </section>
    </Fragment>
  );
}
