import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import LightBulb from "./ui/LightBulb";
import BurgerMenu from "./ui/BurgerMenu";

import classes from "./styles/navBar.module.css";

function NavBar() {
  const location = useLocation();
  const name =
    location.pathname.slice(1).length === 0 ? "is" : location.pathname.slice(1);
  const [heading, setHeading] = useState(`.${name}()`);

  const [navStyle, setNavStyle] = useState({});
  const [sideBar, setSideBar] = useState({});
  const [toggled, setToggled] = useState(false);
  const [headingStyle, setHeadingStyle] = useState({});

  useEffect(() => {
    const navStyleFunction = setTimeout(() => {
      setNavStyle({ top: "0px" });
    }, 300);

    const applyTransition = setTimeout(() => {
      setHeadingStyle({ left: "0%" });
    }, 300);

    return () => {
      clearTimeout(navStyleFunction);
      clearTimeout(applyTransition);
    };
  }, []);

  const headerTransition = function (e) {
    setHeadingStyle({});
    setTimeout(() => {
      setHeading(e.target.textContent);
      setHeadingStyle({ left: "0%" });
      setToggled(true);
      toggleSideBar();
      setToggled(false);
    }, 250);
  };

  const toggleSideBar = function () {
    setSideBar((sideBar) => {
      return !sideBar.transform ? { transform: "none" } : {};
    });
  };

  return (
    <nav className={classes.nav}>
      <h1 className={classes["nav-heading"]} style={headingStyle}>
        {heading}
      </h1>
      <div className={classes["nav-selector"]}>
        <ul className={classes["nav-list"]} style={navStyle}>
          <li className={classes["nav-item"]} onClick={headerTransition}>
            <Link to="/">.is()</Link>
          </li>
          <li className={classes["nav-item"]} onClick={headerTransition}>
            <Link to="/work">.work()</Link>
          </li>
          <li className={classes["nav-item"]} onClick={headerTransition}>
            <Link to="/contact">.contact()</Link>
          </li>
          <li className={classes["nav-img"]}>
            <LightBulb />
          </li>
        </ul>
      </div>
      <div className={classes.burger} style={sideBar}>
        <LightBulb className={classes["burger-img"]} />
        <div className={classes["burger-menu"]}>
          <ul>
            <li className={classes["nav-item"]} onClick={headerTransition}>
              <Link to="/">.is()</Link>
            </li>
            <li className={classes["nav-item"]} onClick={headerTransition}>
              <Link to="/work">.work()</Link>
            </li>
            <li className={classes["nav-item"]} onClick={headerTransition}>
              <Link to="/contact">.contact()</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["burger-toggle"]} style={navStyle}>
        <BurgerMenu onClick={toggleSideBar} opened={toggled} />
      </div>
    </nav>
  );
}

export default NavBar;
