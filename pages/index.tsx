import Layout from "../src/components/layout/layout";
import Header from "../src/components/header/header";
import React from "react";
import GlobalStyle from "../src/global-styles";
import MainContent from "../src/components/main-content/main-content";

const Home = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Header />
      <MainContent />
    </Layout>
  </>
);

export default Home;
