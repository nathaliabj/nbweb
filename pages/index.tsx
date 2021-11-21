import Layout from "../src/components/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import MainContent from "../src/components/main-content/main-content";
import AboutMe from "../src/components/about-section/about";
import Portfolio from "../src/components/portfolio-section/portfolio";
import Links from "../src/components/links-section/links";
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
        <HomeWrapper ref={homeRef} data-scroll-container>
          <Layout>
              <MainContent />
              <AboutMe />
              <Portfolio />
              <Links />
          </Layout>
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
