import styled, { css } from "styled-components";

export const PortfolioContainer = styled.section`

  overflow-x: hidden; 
`;

export const Content = styled.div`
  font-size: 2.5rem;
  line-height: 1.5;
  margin-left: 14.5rem;
`;

export const ImageContainer = styled.div`
  width: 55.313rem;
  height: 34.375em;
  overflow: hidden;
  height: auto;
 position: relative;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
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
  text-decoration: none;
  justify-content: space-between;
  align-content: start;
  flex-direction: column;
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