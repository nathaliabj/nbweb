
import type { AppProps } from "next/app";
import React from "react";


import { ThemeProvider } from "styled-components";
import ThemeToggler from "../src/components/theme-toggler";
import GlobalStyle from "../src/theme/globalStyles";
import useDarkTheme from "../src/hooks/useDarkMode";
import theme from "../src/theme";
import darkTheme from "../src/theme/dark";
import lightTheme from "../src/theme/light";



const _App = ({ Component, pageProps }: AppProps): JSX.Element => {

    const [theme, themeToggler] = useDarkTheme();
    const selectedTheme = theme === "light" ? lightTheme : darkTheme;


  return (
    <>
      {/* this legacy context will need to be removed once we migrate the section navigation to next*/}

      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <ThemeToggler themeToggler={themeToggler} />
        {/* https://github.com/vercel/next.js/issues/9992#issuecomment-784133959 */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default _App;
