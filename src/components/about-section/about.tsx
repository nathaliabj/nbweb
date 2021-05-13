import React, { FC } from "react";
import { AboutContainer, Content, SideTitle } from "./about.sc";

const AboutMe: FC = () => (
  <AboutContainer>
    <SideTitle>ABT</SideTitle>
    <Content>
      <p>
        Originally from Colombia, I moved to London 7 years ago. Passionate
        about travel, different cultures &amp; food, I entered the tech-scene 3
        years ago as I taught myself how to code.
      </p>
      <p>
        Currently front-end engineering at Tray.io, I enjoy creating well
        crafted experiences with a focus on good design.{" "}
      </p>
      <p>Read my thoughts on Twitter.</p>
    </Content>
  </AboutContainer>
);

export default AboutMe;
