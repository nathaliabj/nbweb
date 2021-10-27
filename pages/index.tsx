import Layout from "../src/components/layout/layout";
import Header from "../src/components/header/header";
import React, { useEffect, useRef, useState } from "react";
import GlobalStyle from "../src/global-styles";
import MainContent from "../src/components/main-content/main-content";
import AboutMe from "../src/components/about-section/about";
import Portfolio from "../src/components/portfolio-section/portfolio";
import Links from "../src/components/links-section/links";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LoaderWrapper, Loader, HomeWrapper } from "./home.sc";

const Home = () => {
  const [preloader, setPreloader] = useState<Boolean>(true);

  const [timer, setTimer] = useState(2);

  const homeRef= useRef<any>(null);

  const clear = () => {
    window.clearInterval(homeRef.current);
    setPreloader(false);
  };

  useEffect(() => {
    homeRef.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <LoaderWrapper>
          <Loader>NB WEB</Loader>
        </LoaderWrapper>
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            multiplier: 1,
            class: "isReveal"
          }}
          ref={homeRef ? homeRef : null}
        >
          <HomeWrapper ref={homeRef} data-scroll-container>
            <GlobalStyle />
            <Layout>
              <Header />
              <MainContent />
              <AboutMe />
              <Portfolio />
              <Links />
            </Layout>
          </HomeWrapper>
        </LocomotiveScrollProvider>
      )}
    </>
  );
};

export default Home;
