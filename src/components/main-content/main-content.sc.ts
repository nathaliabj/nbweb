import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 100%;
  height: 548px;
  margin: 3.3125rem auto 0;
  position: relative;
`;

export const Intro = styled.h1`
  font-family: Bigilla;
  font-size: 5.5rem;
  line-height: 6.6rem;
  margin: 0 0 0 14.5rem;
  max-width: 56.25rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  color: white;
`;

export const Wrapper = styled.div`
  z-index: -1;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Trigger = styled.span`
  border-bottom: 1px solid white;

  &:hover {
    cursor: pointer;
  }
`
