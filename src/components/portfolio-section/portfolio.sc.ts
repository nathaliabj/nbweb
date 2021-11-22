import styled from "styled-components";

export const PortfolioContainer = styled.section`
  overflow-x: hidden;
`;

export const Content = styled.div`
  font-size: 2.5rem;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    margin-left: 14.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 55.313rem;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

export const Underline = styled.span`
  position: absolute;
  background: none;
  opacity: 0.7;
  top: 2rem;
  left: 0;
  height: 1.5rem;
  width: 0;
  z-index: -1;

  transition: all 0.5s ease;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    ${Underline} {
      width: 100%;
      background-color: ${({ theme }) => theme.highlight};
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.a`
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 300;
  text-decoration: none;
  text-align: left;
  color: ${({ theme }) => theme.color};

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Project = styled.div`
  margin: 0;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-content: start;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 0 5rem 0 0;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const MobilePortfolioContainer = styled.div``;
