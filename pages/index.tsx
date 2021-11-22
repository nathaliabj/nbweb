import Layout from "../src/components/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import MainContent from "../src/components/main-content/main-content";
import AboutMe from "../src/components/about-section/about";
import Portfolio from "../src/components/portfolio-section/portfolio";
import Links from "../src/components/links-section/links";
import { LoaderWrapper, Loader, HomeWrapper, Bbackground } from "../src/components/home.sc";
import { useMobileSize } from '../src/hooks/useResize';

const Home = () => {
  const [preloader, setPreloader] = useState<Boolean>(true);

  const [timer, setTimer] = useState(2);
  const isMobile = useMobileSize();

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
        { !isMobile && <Bbackground
            width="1506"
            height="2154"
            viewBox="0 0 1506 2154"
            fill="none"
          >
            <path
              d="M1326 960C1293 924 1257 891 1218 861C1287 768 1323 657 1323 537C1323 393 1269 258 1167 156C1065 54 927 0 783 0H0V12H66V2145H0V2154C0 2154 789 2154 792 2154C897 2154 996 2133 1089 2088C1179 2046 1260 1986 1326 1911C1440 1779 1506 1611 1506 1437C1506 1260 1440 1092 1326 960ZM255 12H783C1077 12 1314 246 1314 537C1314 654 1278 762 1209 855C1089 765 945 717 792 717C789 717 786 717 786 717C645 717 513 660 411 564C312 465 255 333 255 192V12ZM1161 1989C1062 2088 930 2145 792 2145C789 2145 786 2145 786 2145H255V288C273 396 327 492 405 570C507 669 642 726 786 726C786 726 789 726 792 726C867 726 939 744 1008 774C1074 804 1131 849 1179 903C1266 996 1314 1119 1317 1248V1623C1314 1761 1260 1893 1161 1989Z"
              fill="white"
            />
          </Bbackground>}
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
