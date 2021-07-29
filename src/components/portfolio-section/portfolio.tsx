import React, { FC } from "react";
import {
  PortfolioContainer,
  Title,
  Image,
  Project,
  Content,
  ImageOverlay,
  ImageContainer,
} from "./portfolio.sc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SideTitle from "../side-title/side-title";

const DATA = [
  {
    title: "Tray.io, Documentation",
    url: "https://tray.io/documentation/",
    image: "/photos/documentation.png",
  },
  {
    title: "Tray.io, Academy",
    url: "https://tray.io/academy/",
    image: "/photos/academy.png",
  },
];

const carouselProps = {
  emulateTouch: true,
  swipeable: true,
  showIndicators: false,
  showStatus: false,
  showArrows: false,
  autoPlay: false,
  interval: 36000000,
};

const Portfolio: FC = () => {
  return (
    <PortfolioContainer>
      <SideTitle>WRK</SideTitle>
      <Content>
        <Carousel {...carouselProps}>
          {DATA.map((project, i) => (
            <Project key={`portfolio-project-${i}`}>
              <Title href={project.url} target="__blank">
                {project.title}
              </Title>
              <ImageContainer>
                <Image src={project.image} />
                <ImageOverlay />
              </ImageContainer>
            </Project>
          ))}
        </Carousel>
      </Content>
    </PortfolioContainer>
  );
};

export default Portfolio;
