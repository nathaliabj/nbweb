import styled, { css } from "styled-components";

export const PortfolioContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Content = styled.div`
  font-size: 2.5rem;
  line-height: 1.5;
  margin-left: 14.5rem;
  display: flex;
`;

export const Image = styled.img`
  margin-top: 2rem;
  width: 55.3125rem;
  vertical-align: middle;
`;

export const Title = styled.a`
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 300;
  text-decoration: none;
  color: white;
`;

export const Project = styled.div`
  margin-right: -30px;
  /* flex: 0 0 auto; */
  width: 55.3125rem;
  justify-items: center;
  margin: 0 5rem 0 0;
  cursor: pointer;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s;
  position: relative;
`;

// export const DraggableArea = styled.div`
//   border: 2px solid green;
//   position: absolute;
//   width: 55.3125rem;
//   height: 37.5rem;
//   top: 6rem;
//   left: 14.5rem;
// `;

export const Projects = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const Carousel = styled.div<{ $shifting: boolean }>`
  width: 10000px;
  position: relative;
  top: 0;
  left: -300px;

  ${({ $shifting }) =>
    $shifting &&
    css`
      transition: left 0.2s ease-out;
    `}
`;
