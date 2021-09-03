import { useContext } from "react";

// import Intro from "./UI/Intro";
import NavBar from "./NavBar";

import classes from "./styles/layout.module.css";

import { ThemeContext } from "../context/theme-context";

export default function Layout(props) {
  const intro = useContext(ThemeContext).intro;
  const theme = useContext(ThemeContext).theme;
  // const setIntro = useContext(ThemeContext).toggleIntro;

  // useEffect(() => {
  //   setIntro();
  // }, []);

  return (
    <div className={classes.layout} data-theme={theme}>
      {/* {intro && <Intro />} */}
      {/* {!intro && <NavBar />} */}
      <NavBar />
      <main>{!intro && props.children}</main>
    </div>
  );
}
