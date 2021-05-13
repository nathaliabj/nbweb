import React, { FC, useRef } from "react";
import {
  PortfolioContainer,
  Content,
  Project,
  Title,
  Image,
} from "./portfolio.sc";
import SideTitle from "../side-title/side-title";

const Portfolio: FC = () => {
  return (
    <PortfolioContainer>
      <SideTitle>WRK</SideTitle>
      <Content>
        <Project>
          <Title>Tray.io, Academy</Title>
          <Image src="/photos/academy.png" />
        </Project>
        <Project>
          <Title>Tray.io, Documentation</Title>
          <Image src="/photos/academy.png" />
        </Project>
      </Content>
    </PortfolioContainer>
  );
};

export default Portfolio;
