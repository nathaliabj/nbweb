import { useState } from "react";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const useDarkTheme = () => {
  const [theme, setTheme] = useState(THEMES.DARK);
  const themeToggler = () => {
    theme === THEMES.DARK ? setTheme(THEMES.LIGHT) : setTheme(THEMES.DARK);
  };
  return [theme, themeToggler];
};

export default useDarkTheme;
