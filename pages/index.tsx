import Layout from "../src/components/layout/layout";
import Header from "../src/components/header/header";
import React from "react";
import GlobalStyle from "../src/global-styles";
import MainContent from "../src/components/main-content/main-content";
import AboutMe from "../src/components/about-section/about";
import Portfolio from "../src/components/portfolio-section/portfolio";
import Links from "../src/components/links-section/links";

const Home = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Header />
      <MainContent />
      <AboutMe />
      <Portfolio />
      <Links />
    </Layout>
  </>
);

export default Home;
