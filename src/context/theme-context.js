import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
  theme: "",
  intro: "",
  toggleIntro: () => {},
  toggleTheme: () => {},
});

const ThemeProvider = (props) => {
  const [currTheme, setCurrTheme] = useState("");
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setCurrTheme(dark ? "dark" : "light");
  }, []);

  const toggleCurrTheme = function () {
    setCurrTheme((currTheme) => {
      const nextTheme = currTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  const toggleIntro = function () {
    setIntro(true);

    const introTime = setTimeout(() => {
      setIntro(false);
    }, 4000);

    return () => {
      clearTimeout(introTime);
    };
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currTheme,
        intro: intro,
        toggleTheme: toggleCurrTheme,
        toggleIntro: toggleIntro,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
