import type { AppProps } from "next/app";
import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/theme/globalStyles";
import darkTheme from "../src/theme/dark";
import lightTheme from "../src/theme/light";
import Header from '../src/components/header/header';

const _App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [isLight, setIsLight] = useState<boolean>(false);

  const selectedTheme = !!isLight ? lightTheme : darkTheme;

  return (
    <>
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <Header themeToggler={() => setIsLight((prev) => !prev)} />
          <Component {...pageProps} />
        </ThemeProvider>
    </>
  );
};

export default _App;