import { FC, useState, useEffect, useRef } from "react";
import Gallery from "../gallery/gallery";
import {
  ContentContainer,
  Intro,
  Wrapper,
  Trigger,
  TextLine,
  TextSection,
} from "./main-content.sc";
import { animateEntry } from "../../utils/animate-text";

const MainContent: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const introRef = useRef<HTMLHRElement>(null);
  const introLine1 = useRef<HTMLParagraphElement>(null);
  const introLine2 = useRef<HTMLParagraphElement>(null);
  const introLine3 = useRef<HTMLParagraphElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Check if trigger is hovered
  useEffect(() => {
    if (!triggerRef.current) return;

    const { current } = triggerRef;

    const listener = () => {
      setIsActive(true);
    };

    current.addEventListener("mouseover", listener, {
      passive: true,
    });

    current.addEventListener("mouseout", () => setIsActive(false), {
      passive: true,
    });

    return () => current.removeEventListener("mouseover", listener);
  }, []);

  // animate  intro
  useEffect(() => {
    animateEntry(introLine1.current, 0.1);
    animateEntry(introLine2.current, 0.3);
    animateEntry(introLine3.current, 0.5);
    animateEntry(galleryRef.current, 0.7);
  }, []);

  return (
    <ContentContainer>
      <Intro ref={introRef}>
        <TextSection>
          <TextLine ref={introLine1}>Hola,</TextLine>
        </TextSection>
        <TextSection>
          <TextLine ref={introLine2}>
            I'm <Trigger ref={triggerRef}>Nathalia</Trigger> and I code
          </TextLine>
        </TextSection>
        <TextSection>
          <TextLine ref={introLine3}>digital experiences</TextLine>
        </TextSection>
      </Intro>
      <Wrapper ref={galleryRef}>
        <Gallery isActive={isActive} />
      </Wrapper>
    </ContentContainer>
  );
};

export default MainContent;
