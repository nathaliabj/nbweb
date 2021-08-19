import React, { FC, useEffect, useRef } from "react";
import { AboutContainer, Content, Link } from "./about.sc";
import SideTitle from "../side-title/side-title";
import { animateEntry } from "../../../utils/animate-text";

const AboutMe: FC = () => {
  const colombiaRef = useRef<HTMLParagraphElement>(null);
if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = colombiaRef.current.getBoundingClientRect();

      // // checking whether fully visible
      // if (position.top >= 0 && position.bottom <= window.innerHeight) {
      //   animateEntry(colombiaRef.current, 0.1);
      // }

      // checking for partial visibility
      if (position.top <= window.innerHeight && position.bottom >= 0) {
         animateEntry(colombiaRef.current, 0.1);
      }
    });
  }, []);

  return (
    <AboutContainer>
      <SideTitle>ABT</SideTitle>
      <Content>
        <p ref={colombiaRef}>
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
        </p>
        <p>
          Currently front-end engineering at{" "}
          <Link href="https://tray.io/" target="__blank">
            Tray.io
          </Link>
          , I enjoy creating well crafted experiences with a focus on good
          design.{" "}
        </p>
        <p>
          Read my thoughts on{" "}
          <Link href="https://twitter.com/NathaliaBJurado" target="__blank">
            Twitter
          </Link>
          .
        </p>
      </Content>
    </AboutContainer>
  );
};

export default AboutMe;
