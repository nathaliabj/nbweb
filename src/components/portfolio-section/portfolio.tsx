import React, { FC, useState, useRef, useEffect } from "react";
import {
  PortfolioContainer,
  Content,
  Project,
  Title,
  Image,
  Carousel,
  Projects,
} from "./portfolio.sc";
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

const Portfolio: FC = () => {
  const [shifting, setShifting] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const academyRef = useRef<HTMLDivElement>(null);
  const projects = [docsRef, academyRef];


  const slide = () => {
    let posX1 = 0;
      let posX2 = 0;
      let posInitial;
      let posFinal;
      let threshold = 100;
      let slides = projects;
      let slidesLength = slides.length;
      let slideSize = docsRef.current?.offsetWidth;
      let firstSlide = docsRef.current;
      let lastSlide = slides[slidesLength - 1].current;
      let cloneFirst = firstSlide.cloneNode(true);
      let cloneLast = lastSlide.cloneNode(true);
      let index = 0;
      let allowShift = true;

      const dragStart = (e) => {
        e = e || window.event;
        e.preventDefault();
        posInitial = carouselRef.current.offsetLeft;

        if (e.type == "touchstart") {
          posX1 = e.touches[0].clientX;
        } else {
          posX1 = e.clientX;
          document.onmouseup = dragEnd;
          document.onmousemove = dragAction;
        }
      };

      const dragAction = (e) => {
        e = e || window.event;

        if (e.type == "touchmove") {
          posX2 = posX1 - e.touches[0].clientX;
          posX1 = e.touches[0].clientX;
        } else {
          posX2 = posX1 - e.clientX;
          posX1 = e.clientX;
        }
        carouselRef.current.style.left =
          carouselRef.current.offsetLeft - posX2 + "px";
      };

      const dragEnd = (e) => {
        posFinal = carouselRef.current.offsetLeft;
        if (posFinal - posInitial < -threshold) {
          shiftSlide(1, "drag");
        } else if (posFinal - posInitial > threshold) {
          shiftSlide(-1, "drag");
        } else {
          carouselRef.current.style.left = posInitial + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
      };

      const shiftSlide = (dir, action) => {
        setShifting(true);

        if (allowShift) {
          if (!action) {
            posInitial = carouselRef.current.offsetLeft;
          }

          if (dir == 1) {
            carouselRef.current.style.left = posInitial - slideSize + "px";
            index++;
          } else if (dir == -1) {
            carouselRef.current.style.left = posInitial + slideSize + "px";
            index--;
          }
        }

        allowShift = false;
      };

      const checkIndex = () => {
        setShifting(false);

        if (index == -1) {
          carouselRef.current.style.left = -(slidesLength * slideSize) + "px";
          index = slidesLength - 1;
        }

        if (index == slidesLength) {
          carouselRef.current.style.left = -(1 * slideSize) + "px";
          index = 0;
        }

        allowShift = true;
      };

    // Clone first and last slide
    carouselRef.current.appendChild(cloneFirst);
    carouselRef.current.insertBefore(cloneLast, firstSlide);
    contentRef.current.classList.add("loaded");

    // Mouse and Touch events
    carouselRef.current.onmousedown = dragStart;

    // Touch events
    carouselRef.current.addEventListener("touchstart", dragStart);
    carouselRef.current.addEventListener("touchend", dragEnd);
    carouselRef.current.addEventListener("touchmove", dragAction);

    // Transition events
    carouselRef.current.addEventListener("transitionend", checkIndex);

  };

  if (contentRef.current && carouselRef.current && docsRef.current && academyRef.current) {
    slide();
  }
  
  return (
    <PortfolioContainer>
      <SideTitle>WRK</SideTitle>
      <Content ref={contentRef}>
        <Projects>
          <Carousel $shifting={shifting} ref={carouselRef}>
            <Project draggable="true" ref={docsRef}>
              <Title href={DATA[0].url} target="__blank">
                {DATA[0].title}
              </Title>
              <Image src={DATA[0].image} />
            </Project>
            <Project draggable="true" ref={academyRef}>
              <Title href={DATA[1].url} target="__blank">
                {DATA[1].title}
              </Title>
              <Image src={DATA[1].image} />
            </Project>
          </Carousel>
        </Projects>
      </Content>
    </PortfolioContainer>
  );
};

export default Portfolio;
