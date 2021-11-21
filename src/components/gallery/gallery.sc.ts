import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 34.25rem;
  height: 34.25rem;
  position: relative;
  z-index: 0;

  & img {
    display: inline;
    margin: 0 auto;
    object-fit: cover;
    height: 100%;
    transform: scale(1.2);
  }
`;

export const Overlay = styled.span`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  display: block;
  z-index: 9;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(163, 25, 247, 1) 51%
  );
  opacity: 0.5;
`;
