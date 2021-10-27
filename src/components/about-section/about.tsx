import React, { FC, useEffect, useRef, useState } from "react";
import { AboutContainer, ContentContainer, Link, Text } from "./about.sc";
import SideTitle from "../side-title/side-title";
import { animateParagraph } from "../../utils/animate-text";
import { useInView } from "react-intersection-observer";

import SplitText from "../../utils/Split3.min.js";

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
      const split1 = new SplitText(textRef1.current, { type: "lines" });
      const split2 = new SplitText(textRef2.current, { type: "lines" });
      const split3 = new SplitText(textRef3.current, { type: "lines" });

      animateParagraph(split1.lines, 0.1);
      animateParagraph(split2.lines, 0.1);
      animateParagraph(split3.lines, 0.1);
    }
  }, [inView]);

  return (
    <AboutContainer data-scroll-section>
      <SideTitle>ABT</SideTitle>
      <ContentContainer ref={ref}>
        <Text ref={textRef1} $isInView={inView}>
          Originally from{" "}
          <Link
            href="https://www.google.com/search?q=quindio+colombia&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5yeD2uMXwAhUN2BQKHZ3SA_0Q_AUoAnoECAEQBA&biw=1440&bih=716"
            target="__blank"
          >
            Colombia
          </Link>
          , I moved to London 7 years ago. Passionate about travel, different
          cultures &amp; food, I entered the tech-scene 3 years ago as I taught
          myself how to code.
        </Text>
        <Text ref={textRef2} $isInView={inView}>
          Currently front-end engineering at{" "}
          <Link href="https://tray.io/" target="__blank">
            Tray.io
          </Link>
          , I enjoy creating well crafted experiences with a focus on good
          design.{" "}
        </Text>
        <Text ref={textRef3} $isInView={inView}>
          Read my thoughts on{" "}
          <Link href="https://twitter.com/NathaliaBJurado" target="__blank">
            Twitter
          </Link>
          .
        </Text>
      </ContentContainer>
    </AboutContainer>
  );
};

export default AboutMe;
