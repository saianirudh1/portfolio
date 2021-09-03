import { useContext, useEffect } from "react";

import Intro from "./ui/Intro";
import NavBar from "./NavBar";

import classes from "./styles/layout.module.css";

import { ThemeContext } from "../context/theme-context";

export default function Layout(props) {
  const intro = useContext(ThemeContext).intro;
  const theme = useContext(ThemeContext).theme;
  const setIntro = useContext(ThemeContext).setIntro;

  useEffect(() => {
    setIntro(true);

    const introTime = setTimeout(() => {
      setIntro(false);
    }, 4250);

    return () => {
      clearTimeout(introTime);
    };
  }, [setIntro]);

  return (
    <div className={classes.layout} data-theme={theme}>
      {intro && <Intro />}
      {!intro && <NavBar />}
      <main>{!intro && props.children}</main>
    </div>
  );
}
