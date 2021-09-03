import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
  theme: "",
  intro: "",
  setIntro: () => {},
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

  return (
    <ThemeContext.Provider
      value={{
        theme: currTheme,
        intro: intro,
        toggleTheme: toggleCurrTheme,
        setIntro: setIntro,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
