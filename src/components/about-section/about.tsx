import React, { FC, useEffect, useRef } from "react";
import { AboutContainer, ContentContainer,LinkWrapper, Link,Underline, Text } from "./about.sc";
import SideTitle from "../side-title/side-title";
import { animateEntry } from "../../utils/animate-text";
import { useInView } from "react-intersection-observer";

const AboutMe: FC = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
    trackVisibility: false,
    triggerOnce: true,
  });

  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useEffect(() => {
    if (inView && entry) {

      animateEntry(textRef1.current, 0.1);
      animateEntry(textRef2.current, 0.3);
      animateEntry(textRef3.current, 0.5);
    }
  }, [inView]);

  return (
    <AboutContainer>
      <SideTitle>ABT</SideTitle>
      <ContentContainer ref={ref}>
        <Text ref={textRef1} $isInView={inView}>
          Originally from{" "}
          <LinkWrapper>
            <Link
              href="https://www.google.com/search?q=quindio+colombia&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5yeD2uMXwAhUN2BQKHZ3SA_0Q_AUoAnoECAEQBA&biw=1440&bih=716"
              target="__blank"
            >
              Colombia
            </Link>
            <Underline />
          </LinkWrapper>
          , I moved to London 7 years ago. Passionate about travel, different
          cultures &amp; food, I entered the tech-scene 3+ years ago as I taught
          myself how to code.
        </Text>
        <Text ref={textRef2} $isInView={inView}>
          Currently front-end engineering at{" "}
          <LinkWrapper>
            <Link href="https://tray.io/" target="__blank">
              Tray.io
            </Link>
            <Underline />
          </LinkWrapper>
          , I enjoy creating well crafted experiences with a focus on good
          design.{" "}
        </Text>
        <Text ref={textRef3} $isInView={inView}>
          Get my{" "}
          <LinkWrapper>
            <Link href="/Nathi-cv.pdf" download="nathalia-buitrago">
              CV
            </Link>
            <Underline />
          </LinkWrapper>
          .
        </Text>
      </ContentContainer>
    </AboutContainer>
  );
};

export default AboutMe;
