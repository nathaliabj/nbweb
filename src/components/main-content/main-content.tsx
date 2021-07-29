import { FC, useState, useEffect, useRef } from "react";
import Gallery from "../gallery/gallery";
import { ContentContainer, Intro, Wrapper, Trigger } from "./main-content.sc";

const MainContent: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const triggerRef = useRef<HTMLSpanElement>(null);

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

  return (
    <ContentContainer>
      <Intro>
        Hola, <br /> I'm <Trigger ref={triggerRef}>Nathalia</Trigger> and I code
        digital experiences
      </Intro>
      <Wrapper>
        <Gallery isActive={isActive} />
      </Wrapper>
    </ContentContainer>
  );
};

export default MainContent;
