import styled, { css } from "styled-components";

export const PortfolioContainer = styled.div`
  /* max-width: 180%;
  overflow-x: hidden; */
`;

export const Content = styled.div`
  font-size: 2.5rem;
  line-height: 1.5;
  margin-left: 14.5rem;
`;

export const Image = styled.img`
  width: 55.3125rem;
`;

export const Title = styled.a`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 300;
  text-decoration: none;
  text-align: left;
  color: white;
`;

export const Project = styled.div`
  margin: 0 5rem 0 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-content: start;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  color: white;
`;