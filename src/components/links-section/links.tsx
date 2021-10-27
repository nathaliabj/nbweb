import React, { FC } from "react";
import { LinksContainer, Content, LinksWrapper, Link } from "./links.sc";
import SideTitle from "../side-title/side-title";

const Links: FC = () => (
  <LinksContainer data-scroll-section>
    <SideTitle>LKS</SideTitle>
    <Content>
      <p>Want to know more or get in touch? You’ve come to the right place.</p>
      <LinksWrapper>
        <Link href="https://github.com/nathaliabj" target="__blank">
          Gitbub
        </Link>
        <span>//</span>
        <Link
          href="https://www.linkedin.com/in/nathalia-buitrago-jurado/"
          target="__blank"
        >
          LinkedIn
        </Link>
        <span>//</span>
        <Link href="mailto:nathalia.buitragoj@gmail.com">Email</Link>
      </LinksWrapper>
    </Content>
  </LinksContainer>
);

export default Links;
