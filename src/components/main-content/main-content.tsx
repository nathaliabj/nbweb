import React, { FC } from "react";
import Gallery from "../gallery/gallery";
import { ContentContainer, Intro, Wrapper } from "./main-content.sc";

const MainContent: FC = () => (
  <ContentContainer>
    <Intro>
      Hola, <br /> I'm Nathalia and I code digital experiences
    </Intro>
    <Wrapper>
      <Gallery /> 
    </Wrapper>
  </ContentContainer>
);

export default MainContent;
